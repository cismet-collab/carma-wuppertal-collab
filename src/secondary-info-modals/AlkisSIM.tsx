import {
  faBuilding,
  faLandmark,
  faSquare,
  faLink,
  faShoppingCart,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { genericSecondaryInfoFooterFactory } from "../commons";
import {
  buildLiegenschaftskarteUrl,
  buildAbkAuszugUrl,
  buildBuchauszugUrl,
  buildBaulastenUrl,
} from "./helper/alkis";
import {
  createLayerSelectors,
  useCarmaMapAPIActions,
  useCarmaMapAPISelector,
} from "@carma-mapping/carma-map-api";

interface FeatureType {
  properties?: any;
  targetProperties?: any;
  carmaInfo?: {
    sourceLayer?: string;
    propertyTarget?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

type AlkisType = "building" | "landparcel";

interface GebaeudeProperties {
  fid: number;
  id?: string;
  gebaeudefunktion?: number;
  geb_fkt?: string;
  geb_typ?: string;
  og_geschosse?: number;
  strname?: string;
  strschl?: string;
  hausnr?: number;
  hnr?: string;
  adressen?: string;
  adr_zusatz?: string;
  anz_adress?: number;
  ursprung?: string;
  oeffentl?: string;
  flaeche?: number;
  bounds?: string;
  baudenkmal?: boolean;
  baujahr?: number;
  baudenkmal_nr?: string;
  baudenkmalnummer?: string;
  baudenkmal_vid?: string;
  baudenkmal_eintragung?: string;
  gemarkung?: string;
  gemarkungsnummer?: number;
}

interface FlurstueckProperties {
  fid: number;
  flurstueck_kz_voll?: string;
  gemarkungsnummer?: number;
  flurnummer?: number;
  zaehler?: number;
  nenner?: number;
  nutzungen?: string;
  adresse?: string;
  flur_flst_nr?: string;
  flaeche_m2?: number;
  zeitpunktderentstehung?: string;
  bounds?: string;
  grundbuchblatt?: string;
  baulast_status?: number; // 1: begünstigt, 2: belastet, 3: belastet/begünstigt
}

// Gemarkung mapping (can be extended)
const GEMARKUNGEN: Record<number, string> = {
  3001: "Barmen",
  3485: "Beyenburg",
  3279: "Cronenberg",
  3278: "Dönberg",
  3135: "Elberfeld",
  3486: "Langerfeld",
  3487: "Nächstebreck",
  3267: "Ronsdorf",
  3276: "Schöller",
  3277: "Vohwinkel",
};

function getGemarkungName(nummer?: number): string {
  if (!nummer) return "";
  return GEMARKUNGEN[nummer] || `Gemarkung ${nummer}`;
}

function determineAlkisType(feature: FeatureType): AlkisType {
  const sourceLayer =
    feature?.carmaInfo?.sourceLayer ||
    feature?.properties?.carmaInfo?.sourceLayer;

  if (
    sourceLayer === "landparcel" ||
    sourceLayer === "landparcel_point" ||
    sourceLayer === "landparcel_arrows" ||
    sourceLayer === "landparcel_arrows_tips"
  ) {
    return "landparcel";
  }

  if (sourceLayer === "building" || sourceLayer === "adresses") {
    return "building";
  }

  // Fallback: check for specific properties
  const props = feature?.targetProperties || feature?.properties || feature;
  if (props?.flurstueck_kz_voll || props?.flurnummer !== undefined) {
    return "landparcel";
  }
  if (props?.geb_fkt || props?.gebaeudefunktion !== undefined) {
    return "building";
  }

  return "building";
}

function getProperties(feature: FeatureType): any {
  // If targetProperties exists, use those (case when user clicked via number/arrow)
  if (feature?.targetProperties) {
    return { ...feature.targetProperties, ...feature.properties };
  }
  return feature?.properties || feature;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  // Handle format like "19790101  " or "18000101"
  const cleaned = dateStr.trim();
  if (cleaned.length >= 8) {
    const year = cleaned.substring(0, 4);
    const month = cleaned.substring(4, 6);
    const day = cleaned.substring(6, 8);
    return `${day}.${month}.${year}`;
  }
  return cleaned;
}

function parseNutzungen(
  nutzungenStr?: string
): Array<{ typ: string; funktion?: string; percentage: number }> {
  if (!nutzungenStr) return [];
  try {
    const parsed = JSON.parse(nutzungenStr);
    // Group by funktion and sum percentages
    const grouped: Record<string, number> = {};
    parsed.forEach(
      (n: { typ: string; funktion?: string; percentage: number }) => {
        const key = n.funktion || n.typ.replace("AX_", "");
        grouped[key] = (grouped[key] || 0) + n.percentage;
      }
    );
    return Object.entries(grouped)
      .map(([funktion, percentage]) => ({
        typ: "",
        funktion,
        percentage,
      }))
      .sort((a, b) => b.percentage - a.percentage);
  } catch {
    return [];
  }
}

// Helper to parse addresses from "strschl_hausnr" format
// Groups addresses by street and collects house numbers
function parseAdressen(
  adressen?: string,
  mainStrschl?: string,
  mainHausnr?: number
): { strschl: string; hausnummern: string[] }[] {
  if (!adressen) return [];

  const adressenParts = adressen.split(",");
  const grouped: Record<string, string[]> = {};

  adressenParts.forEach((a) => {
    const parts = a.split("_");
    const strschl = parts[0] || "";
    const hausnr = parts[1] || "";
    if (strschl && hausnr) {
      if (!grouped[strschl]) {
        grouped[strschl] = [];
      }
      grouped[strschl].push(hausnr);
    }
  });

  return Object.entries(grouped).map(([strschl, hausnummern]) => ({
    strschl,
    hausnummern,
  }));
}

// Building Component
const GebaeudeInfo = ({ props }: { props: GebaeudeProperties }) => {
  const gemarkungName = getGemarkungName(props.gemarkungsnummer);

  const baudenkmalLayerID = "wuppPlanung:baudenkmale";
  const { addLayerById } = useCarmaMapAPIActions();
  const containsBaudenkmalLayer = useCarmaMapAPISelector(
    createLayerSelectors.hasLayerById(baudenkmalLayerID)
  );

  // Parse all addresses grouped by street
  const addressGroups = parseAdressen(
    props.adressen,
    props.strschl,
    props.hausnr
  );

  // Determine main address and additional addresses
  const mainStreet = props.strname || "";
  const mainHausnr = props.hausnr ? String(props.hausnr) : "";
  const mainStrschl = props.strschl || "";

  // Find the group for the main street
  const mainGroup = addressGroups.find((g) => g.strschl === mainStrschl);
  const otherGroups = addressGroups.filter((g) => g.strschl !== mainStrschl);

  // Get additional house numbers for main street (excluding the primary one)
  const weitereHausnummern = mainGroup
    ? mainGroup.hausnummern.filter((h) => h !== mainHausnr)
    : [];

  return (
    <>
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  whiteSpace: "nowrap",
                  paddingRight: "15px",
                  verticalAlign: "top",
                }}
              >
                <b>Gemarkung:</b>
              </td>
              <td>
                {gemarkungName}{" "}
                {props.gemarkungsnummer ? `(${props.gemarkungsnummer})` : ""}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  whiteSpace: "nowrap",
                  paddingRight: "15px",
                  verticalAlign: "top",
                }}
              >
                <b>Adresse:</b>
              </td>
              <td>
                {mainStreet} {mainHausnr}
              </td>
            </tr>
            {(weitereHausnummern.length > 0 || otherGroups.length > 0) && (
              <tr>
                <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                  <b>Weitere Adressen:</b>
                </td>
                <td>
                  {weitereHausnummern.length > 0 && (
                    <div>
                      {mainStreet} {weitereHausnummern.join(", ")}
                    </div>
                  )}
                  {otherGroups.map((group, idx) => (
                    <div key={idx}>
                      Straße ({group.strschl}): {group.hausnummern.join(", ")}
                    </div>
                  ))}
                </td>
              </tr>
            )}
            <tr>
              <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                <b>Gebäudetyp:</b>
              </td>
              <td>{props.geb_typ?.trim() || "-"}</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                <b>Funktion:</b>
              </td>
              <td>{props.geb_fkt || "-"}</td>
            </tr>
            <tr>
              <td
                style={{
                  whiteSpace: "nowrap",
                  paddingRight: "15px",
                  verticalAlign: "top",
                }}
              >
                <b>Anzahl der Geschosse:</b>
              </td>
              <td>{props.og_geschosse ?? "-"}</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                <b>Grundfläche:</b>
              </td>
              <td>
                {props.flaeche
                  ? `${props.flaeche.toLocaleString("de-DE")} m²`
                  : "-"}
              </td>
            </tr>
          </tbody>
        </table>
        {props.oeffentl === "1" && (
          <div style={{ marginTop: 10 }}>
            <FontAwesomeIcon
              icon={faLandmark}
              style={{ marginRight: 8, color: "#666" }}
            />
            Öffentliches Gebäude
          </div>
        )}
      </div>

      {props.baujahr && (
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
          <Panel
            header="Gebäudedatei der Statistikstelle"
            eventKey="1"
            bsStyle="warning"
          >
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "140px" }}>
                    <b>Baujahr:</b>
                  </td>
                  <td>{props.baujahr}</td>
                </tr>
              </tbody>
            </table>
          </Panel>
        </Accordion>
      )}

      {props.baudenkmal && (
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel header="Denkmalliste" eventKey="2" bsStyle="success">
            <img
              src="https://tiles.cismet.de/alkis/assets/baudenkmale.svg"
              alt="Baudenkmal"
              style={{
                float: "right",
                width: 50,
                height: 50,
                marginLeft: 10,
              }}
            />
            <div style={{ marginBottom: 10 }}>
              Dieses Gebäude ist ein eingetragenes Baudenkmal
              {(props.baudenkmalnummer || props.baudenkmal_nr) &&
                ` (Nr. ${props.baudenkmalnummer || props.baudenkmal_nr})`}
              .
            </div>
            {props.baudenkmal_eintragung && (
              <div>
                <b>Eintragungsdatum:</b> {props.baudenkmal_eintragung}
              </div>
            )}
            <div style={{ marginBottom: 10 }}>
              <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: 8 }} />
              {containsBaudenkmalLayer ? (
                <span>
                  Kartenebene "Baudenkmäler" befindet sich in der Karte
                </span>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      addLayerById(baudenkmalLayerID);
                    } catch (e) {
                      console.error("Error adding layer", e);
                    }
                  }}
                >
                  Kartenebene "Baudenkmäler" laden
                </a>
              )}
            </div>
            {props.baudenkmal_vid && (
              <div style={{ marginTop: 10 }}>
                <FontAwesomeIcon
                  icon={faLink}
                  style={{ marginRight: 8, color: "#666" }}
                />
                <a
                  href={`https://www.wuppertal.de/denkmalliste-online/Detail/Show/${props.baudenkmal_vid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#337ab7" }}
                >
                  weitere Informationen zum Baudenkmal einsehen
                </a>
              </div>
            )}
          </Panel>
        </Accordion>
      )}
    </>
  );
};

// Land Parcel Component
const FlurstueckInfo = ({ props }: { props: FlurstueckProperties }) => {
  const gemarkungName = getGemarkungName(props.gemarkungsnummer);
  const nutzungen = parseNutzungen(props.nutzungen);
  const hasBaulast =
    props.baulast_status !== undefined && props.baulast_status > 0;

  const baulastLayerID = "wuppPlanung:baul";
  const { addLayerById } = useCarmaMapAPIActions();
  const containsBaulastLayer = useCarmaMapAPISelector(
    createLayerSelectors.hasLayerById(baulastLayerID)
  );

  // Get baulast description based on status
  const getBaulastText = () => {
    switch (props.baulast_status) {
      case 1:
        return "Dieses Flurstück wird durch Baulasten begünstigt.";
      case 2:
        return "Dieses Flurstück wird durch Baulasten belastet.";
      case 3:
        return "Dieses Flurstück wird durch Baulasten belastet und begünstigt.";
      default:
        return "";
    }
  };

  // Build form URLs with prefilled Flurstück data
  const formParams = {
    gemarkungName,
    gemarkungsnummer: props.gemarkungsnummer,
    flurnummer: props.flurnummer,
    zaehler: props.zaehler,
    nenner: props.nenner,
  };
  const liegenschaftskarteUrl = buildLiegenschaftskarteUrl(formParams);
  const abkAuszugUrl = buildAbkAuszugUrl(formParams);
  const buchauszugUrl = buildBuchauszugUrl(formParams);
  const baulastenUrl = buildBaulastenUrl(formParams);

  return (
    <>
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <table>
          <tbody>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Gemarkung:</b>
              </td>
              <td>
                {gemarkungName}{" "}
                {props.gemarkungsnummer ? `(${props.gemarkungsnummer})` : ""}
              </td>
            </tr>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Flur:</b>
              </td>
              <td>{props.flurnummer}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Flurstück:</b>
              </td>
              <td>
                {props.zaehler}
                {props.nenner ? `/${props.nenner}` : ""}
              </td>
            </tr>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Lage:</b>
              </td>
              <td>{props.adresse || "-"}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Amtliche Fläche:</b>
              </td>
              <td>
                {props.flaeche_m2
                  ? `${props.flaeche_m2.toLocaleString("de-DE")} m²`
                  : "-"}
              </td>
            </tr>

            {props.grundbuchblatt && (
              <tr>
                <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                  <b>Grundbuchblatt:</b>
                </td>
                <td>{props.grundbuchblatt}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {nutzungen.length > 0 && (
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
          <Panel header="Tatsächliche Nutzung" eventKey="0" bsStyle="info">
            <table style={{ width: "100%" }}>
              <tbody>
                {nutzungen.map((n, idx) => {
                  const absoluteArea = props.flaeche_m2
                    ? Math.round((props.flaeche_m2 * n.percentage) / 100)
                    : null;
                  return (
                    <tr key={idx}>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          paddingRight: 10,
                          textAlign: "right",
                          minWidth: 50,
                        }}
                      >
                        {n.percentage.toLocaleString()}%
                      </td>
                      <td style={{ width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                              backgroundColor: "#e0e0e0",
                              minHeight: 20,
                              borderRadius: 2,
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "2px 6px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: `${n.percentage}%`,
                                backgroundColor: "#666",
                                borderRadius: 2,
                              }}
                            />
                            <span
                              style={{
                                position: "relative",
                                fontSize: "11px",
                                color: n.percentage > 50 ? "#fff" : "#333",
                                textAlign: "center",
                                lineHeight: 1.3,
                              }}
                            >
                              {n.funktion}
                            </span>
                          </div>
                          <span
                            style={{
                              whiteSpace: "nowrap",
                              minWidth: 55,
                              textAlign: "right",
                            }}
                          >
                            {absoluteArea !== null
                              ? `${absoluteArea.toLocaleString()} m²`
                              : ""}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Panel>
        </Accordion>
      )}

      <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
        <Panel header="Bestellformulare" eventKey="1" bsStyle="warning">
          <table style={{ marginBottom: 10, borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    paddingBottom: 8,
                    paddingRight: 20,
                  }}
                >
                  Produktbeschreibung
                </th>
                <th
                  style={{
                    textAlign: "center",
                    paddingBottom: 8,
                    paddingRight: 20,
                  }}
                >
                  Zur Bestellung
                </th>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>
                  Hinweise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingRight: 20 }}>Liegenschaftskarte</td>
                <td style={{ paddingRight: 20, textAlign: "center" }}>
                  <a
                    href={liegenschaftskarteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </td>
                <td style={{ fontSize: "11px" }}>1</td>
              </tr>
              <tr>
                <td style={{ paddingRight: 20 }}>Amtliche Basiskarte</td>
                <td style={{ paddingRight: 20, textAlign: "center" }}>
                  <a
                    href={abkAuszugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </td>
                <td style={{ fontSize: "11px" }}>1</td>
              </tr>
              <tr>
                <td style={{ paddingRight: 20 }}>Liegenschaftsbuch</td>
                <td style={{ paddingRight: 20, textAlign: "center" }}>
                  <a
                    href={buchauszugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </td>
                <td style={{ fontSize: "11px" }}>1, 2, 3</td>
              </tr>
            </tbody>
          </table>
          <hr style={{ margin: "10px 0" }} />
          <div style={{ fontSize: "11px" }}>
            1: Karten-Download abends/Wochenende verzögert
            (ALKIS-Aktualisierung)
          </div>
          <div style={{ fontSize: "11px" }}>
            2: Datenschutzprüfung des berechtigten Interesses erforderlich
          </div>
          <div style={{ fontSize: "11px" }}>
            3: Flurstückinformationen werden momentan noch nicht ins Formular
            übernommen
          </div>
          <div style={{ marginTop: 10 }}>
            <b>Gebühren je Dokument:</b>
            <br />
            15,00 € als PDF-Download | 25,00 € als Ausdruck
          </div>
          <div style={{ marginTop: 10 }}>
            <b>Zahlungsarten:</b> PayPal, Kreditkarte, SEPA Lastschrift
          </div>
        </Panel>
      </Accordion>

      {hasBaulast && (
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel header="Baulastnachweis" eventKey="2" bsStyle="success">
            <div style={{ marginBottom: 10 }}>{getBaulastText()}</div>
            <div style={{ marginBottom: 10 }}>
              <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: 8 }} />
              {containsBaulastLayer ? (
                <span>
                  Kartenebene "Baulastnachweis" befindet sich in der Karte
                </span>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      addLayerById(baulastLayerID);
                    } catch (e) {
                      console.error("Error adding layer", e);
                    }
                  }}
                >
                  Kartenebene "Baulastnachweis" laden
                </a>
              )}
            </div>
            <table style={{ marginBottom: 10, borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: 8,
                      paddingRight: 20,
                    }}
                  >
                    Produktbeschreibung
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      paddingBottom: 8,
                      paddingRight: 20,
                    }}
                  >
                    Zur Bestellung
                  </th>
                  <th style={{ textAlign: "left", paddingBottom: 8 }}>
                    Hinweise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ paddingRight: 20 }}>Baulastbescheinigung</td>
                  <td style={{ paddingRight: 20, textAlign: "center" }}>
                    <a
                      href={baulastenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                  </td>
                  <td style={{ fontSize: "11px" }}>1, 2, 3</td>
                </tr>
              </tbody>
            </table>
            <hr style={{ margin: "10px 0" }} />
            <div style={{ fontSize: "11px" }}>
              1: Karten-Download abends/Wochenende verzögert
              (ALKIS-Aktualisierung)
            </div>
            <div style={{ fontSize: "11px" }}>
              2: Datenschutzprüfung des berechtigten Interesses erforderlich
            </div>
            <div style={{ fontSize: "11px" }}>
              3: Flurstückinformationen werden momentan noch nicht ins Formular
              übernommen
            </div>
            <div style={{ marginTop: 10 }}>
              <b>Gebühren:</b>
              <ul style={{ margin: "5px 0", paddingLeft: 20 }}>
                <li>Wenn Baulasten vorhanden sind: je Grundstück 50 – 75 €</li>
                <li>Wenn keine Baulasten vorhanden sind: je Grundstück 30 €</li>
              </ul>
            </div>
            <div style={{ marginTop: 10 }}>
              <b>Zahlungsarten:</b> PayPal, Kreditkarte, SEPA Lastschrift
            </div>
          </Panel>
        </Accordion>
      )}
    </>
  );
};

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({
    skipTeilzwilling: false,
    isTopicMap: false,
  }),
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<any>;
}) => {
  const close = () => {
    setOpen(false);
  };

  const alkisType = determineAlkisType(feature);
  const props = getProperties(feature);

  let title: string;
  let icon: any;

  if (alkisType === "landparcel") {
    title = `Flurstück ${props.gemarkungsnummer || ""} - ${
      props.flurnummer || ""
    } - ${props.zaehler || ""}${props.nenner ? `/${props.nenner}` : ""}`;
    icon = faSquare;
  } else {
    const address = `${props.strname || ""} ${props.hausnr || ""}`.trim();
    title = `Gebäude ${address}`;
    icon = faBuilding;
  }

  return (
    <Modal
      style={{
        zIndex: 2900000000,
      }}
      height="100%"
      size="lg"
      show={true}
      onHide={close}
      keyboard={false}
      dialogClassName="modal-dialog-scrollable"
    >
      <Modal.Header>
        <Modal.Title>
          <FontAwesomeIcon icon={icon} />
          {` Datenblatt: ${title}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key={"alkis.secondaryInfo"}>
        <div style={{ width: "100%", minHeight: 250 }}>
          {alkisType === "landparcel" ? (
            <FlurstueckInfo props={props as FlurstueckProperties} />
          ) : (
            <GebaeudeInfo props={props as GebaeudeProperties} />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Footer close={close} version={versionString} />
      </Modal.Footer>
    </Modal>
  );
};

export default SecondaryInfoModal;
