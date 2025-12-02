import {
  faBuilding,
  faLandmark,
  faSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { genericSecondaryInfoFooterFactory } from "../commons";
import {
  buildLiegenschaftskarteUrl,
  buildAbkAuszugUrl,
  buildBuchauszugUrl,
} from "./helper/alkis";

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
  baulast_belastet?: boolean;
  baulast_beguenstigt?: boolean;
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
      <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
        <Panel
          header="Liegenschaftskataster (ALKIS)"
          eventKey="0"
          bsStyle="info"
        >
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
                  <b>Gemarkung (Gemarkungskennzeichen):</b>
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
                  <b>Adresse (Straßenschlüssel):</b>
                </td>
                <td>
                  {mainStreet} {mainHausnr}
                  {mainStrschl ? ` (${mainStrschl})` : ""}
                </td>
              </tr>
              {weitereHausnummern.length > 0 && (
                <tr>
                  <td></td>
                  <td>
                    {mainStreet} {weitereHausnummern.join(", ")} ({mainStrschl})
                  </td>
                </tr>
              )}
              {otherGroups.map((group, idx) => (
                <tr key={idx}>
                  <td></td>
                  <td>
                    Straße ({group.strschl}): {group.hausnummern.join(", ")}
                  </td>
                </tr>
              ))}
              <tr>
                <td style={{ verticalAlign: "top" }}>
                  <b>Gebäudetyp:</b>
                </td>
                <td>{props.geb_typ?.trim() || "-"}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>
                  <b>Funktion:</b>
                </td>
                <td>{props.geb_fkt || "-"}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>
                  <b>Obergeschosse:</b>
                </td>
                <td>{props.og_geschosse ?? "-"}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>
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
        </Panel>
      </Accordion>

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
            <div style={{ marginBottom: 10 }}>
              <FontAwesomeIcon
                icon={faLandmark}
                style={{ marginRight: 8, color: "#666" }}
              />
              Dieses Gebäude ist ein eingetragenes Baudenkmal.
            </div>
            {props.baudenkmal_nr && (
              <div>
                <b>Baudenkmal-Nr.:</b> {props.baudenkmal_nr}
              </div>
            )}
            {props.baudenkmal_eintragung && (
              <div>
                <b>Eintragungsdatum:</b> {props.baudenkmal_eintragung}
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <FontAwesomeIcon
                icon={faLink}
                style={{ marginRight: 8, color: "#666" }}
              />
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{ color: "#337ab7" }}
              >
                weitere Informationen zum Baudenkmal einsehen
              </a>
            </div>
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
  const hasBaulast = props.baulast_belastet || props.baulast_beguenstigt;

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

  return (
    <>
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <table>
          <tbody>
            <tr>
              <td style={{ whiteSpace: "nowrap", paddingRight: "15px" }}>
                <b>Gemarkung (Gemarkungskennzeichen):</b>
              </td>
              <td>
                {gemarkungName}{" "}
                {props.gemarkungsnummer ? `(${props.gemarkungsnummer})` : ""}
              </td>
            </tr>
            <tr>
              <td>
                <b>Flur:</b>
              </td>
              <td>{props.flurnummer}</td>
            </tr>
            <tr>
              <td>
                <b>Flurstück:</b>
              </td>
              <td>
                {props.zaehler}
                {props.nenner ? `/${props.nenner}` : ""}
              </td>
            </tr>
            <tr>
              <td>
                <b>Lage:</b>
              </td>
              <td>{props.adresse || "-"}</td>
            </tr>
            <tr>
              <td>
                <b>Amtliche Fläche:</b>
              </td>
              <td>
                {props.flaeche_m2
                  ? `${props.flaeche_m2.toLocaleString("de-DE")} m²`
                  : "-"}
              </td>
            </tr>
            <tr>
              <td>
                <b>Entstehung:</b>
              </td>
              <td>{formatDate(props.zeitpunktderentstehung)}</td>
            </tr>
            {props.grundbuchblatt && (
              <tr>
                <td>
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
                      <td style={{ whiteSpace: "nowrap", paddingRight: 10 }}>
                        {n.funktion}
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
                              height: 16,
                              borderRadius: 2,
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                width: `${n.percentage}%`,
                                backgroundColor: "#666",
                                height: "100%",
                                borderRadius: 2,
                              }}
                            />
                            <span
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "11px",
                                color: n.percentage > 50 ? "#fff" : "#333",
                                fontWeight: "bold",
                              }}
                            >
                              {absoluteArea !== null
                                ? `${absoluteArea.toLocaleString("de-DE")} m²`
                                : ""}
                            </span>
                          </div>
                          <span
                            style={{
                              whiteSpace: "nowrap",
                              minWidth: 45,
                              textAlign: "right",
                            }}
                          >
                            {n.percentage}%
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
          <table style={{ width: "100%", marginBottom: 10 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>Produkt</th>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>
                  Beschreibung
                </th>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>
                  Hinweise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{ marginRight: 8, color: "#666" }}
                  />
                  <a
                    href={liegenschaftskarteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Liegenschaftskarte
                  </a>
                </td>
                <td>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Produktinfo
                  </a>
                </td>
                <td>⚠ *</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{ marginRight: 8, color: "#666" }}
                  />
                  <a
                    href={abkAuszugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ABK-Auszug
                  </a>
                </td>
                <td>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Produktinfo
                  </a>
                </td>
                <td>⚠ *</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{ marginRight: 8, color: "#666" }}
                  />
                  <a
                    href={buchauszugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buchauszug
                  </a>
                </td>
                <td>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Produktinfo
                  </a>
                </td>
                <td>⚠ * **</td>
              </tr>
            </tbody>
          </table>
          <hr style={{ margin: "10px 0" }} />
          <div style={{ fontSize: "11px" }}>
            * Karten-Download abends/Wochenende verzögert (ALKIS-Aktualisierung)
          </div>
          <div style={{ fontSize: "11px" }}>
            ** Datenschutzprüfung des berechtigten Interesses erforderlich
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
            <div style={{ marginBottom: 10 }}>
              <span style={{ marginRight: 8 }}>⚠</span>
              Dieses Flurstück wird durch Baulasten belastet und begünstigt.
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ marginRight: 8 }}>🗺</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Kartenebene "Baulastnachweis" laden
              </a>
            </div>
            <table style={{ width: "100%", marginBottom: 10 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", paddingBottom: 8 }}>
                    Produkt
                  </th>
                  <th style={{ textAlign: "left", paddingBottom: 8 }}>
                    Beschreibung
                  </th>
                  <th style={{ textAlign: "left", paddingBottom: 8 }}>
                    Hinweise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{ marginRight: 8, color: "#666" }}
                    />
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Baulastnachweis
                    </a>
                  </td>
                  <td>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Produktinfo
                    </a>
                  </td>
                  <td>⚠ *</td>
                </tr>
              </tbody>
            </table>
            <hr style={{ margin: "10px 0" }} />
            <div style={{ fontSize: "11px" }}>
              * Datenschutzprüfung des berechtigten Interesses erforderlich
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
