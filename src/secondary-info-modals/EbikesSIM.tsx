import {
  faBicycle,
  faPhoneFlip,
  faSquareArrowUpRight,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
// import { SecondaryInfoFooter } from "@carma-collab/wuppertal/e-bikes";
import { SecondaryInfoFooter } from "../e-bikes";
import Panel from "react-cismap/commons/Panel";
import { convertVTEntryToFeatureProperties } from "./helper/ebikes";
interface FeatureType {
  properties?: any;
  [key: string]: any;
}

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = SecondaryInfoFooter,
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<any>;
}) => {
  const close = () => {
    setOpen(false);
  };
  let _feature;
  if (feature.type !== "Feature") {
    _feature = convertVTEntryToFeatureProperties(feature.properties);
  } else {
    _feature = feature;
  }
  console.log("xxx _feature", _feature);

  const station = _feature.properties; //can be a ladestation or a verleihstation

  const isVerleih = station.typ === "Verleihstation";
  let foto;
  if (station.foto !== undefined) {
    foto = station.foto;
  }

  let links: any = [];

  if (station.betreiber) {
    if (station?.betreiber?.telefon) {
      links.push(
        <a
          title="Betreiber anrufen"
          href={"tel:" + station?.betreiber?.telefon}
        >
          <FontAwesomeIcon
            icon={faPhoneFlip}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
    if (station?.betreiber?.email || station.email) {
      const mail = station?.betreiber?.email
        ? station?.betreiber?.email
        : station.email;
      links.push(
        <a
          title="E-Mail an den Betreiber schreiben"
          href={"mailto:" + mail}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
    if (station?.betreiber?.web) {
      links.push(
        <a
          title="Betreiberwebseite"
          href={station?.betreiber?.web}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSquareArrowUpRight}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
  } else {
    if (station.telefon) {
      links.push(
        <a title="Beitreiber anrufen" href={"tel:" + station?.telefon}>
          <FontAwesomeIcon
            icon={faPhoneFlip}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }

    if (station.email) {
      links.push(
        <a
          title="E-Mail an den Betreiber schreiben"
          href={"mailto:" + station?.email}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }

    if (station.homepage) {
      links.push(
        <a title="Betreiberwebseite" href={station?.homepage} target="_blank">
          <FontAwesomeIcon
            icon={faSquareArrowUpRight}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
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
          <FontAwesomeIcon icon={faBicycle} />
          {` Datenblatt: ${station.typ ? station.typ : "Ladestation"} ${
            station.standort || station.station
          }`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
        <div style={{ width: "100%", minHeight: 250 }}>
          {foto !== undefined && (
            <img
              alt="Bild"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                float: "right",
                paddingBottom: "5px",
              }}
              src={foto}
              width="250"
            />
          )}
          <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
            <div>
              <b>Adresse:</b>
            </div>
            <div>
              {station.strasse} {station.hausnummer}
            </div>
            {isVerleih ? (
              <>
                {station.weitereinfo && (
                  <>
                    <br />
                    <div>
                      <b>Weitere Informationen:</b>
                      <div>{station.weitereinfo}</div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <br />{" "}
                <div>
                  <b>Detailinformation:</b>
                </div>
                <div>{station.detailbeschreibung}</div>
              </>
            )}
            <br />
            {(station.bemerkung || station.zusatzinfo) && (
              <>
                <div>
                  <b>Bemerkung:</b>
                </div>

                {station.bemerkung && <div>{station.bemerkung}</div>}
                {station.zusatzinfo && <div>{station.zusatzinfo}</div>}
                <br />
              </>
            )}
            <div>
              <b>Öffnungszeiten:</b> {station.oeffnungszeiten}
            </div>
            <br />
            {!isVerleih && (
              <div>
                <b>Stellplätze:</b> {station.anzahl_plaetze}
              </div>
            )}
          </div>
        </div>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
          <Panel
            header={
              station.typ === "Verleihstation"
                ? "Verleih"
                : "Lademöglichkeit verfügbar"
            }
            eventKey="0"
            bsStyle="info"
          >
            {station.typ === "Verleihstation" ? (
              <>
                {station.anzahl_pedelec !== 0 && (
                  <div style={{ marginBottom: 6 }}>
                    <b>Pedelecs:</b> {station.anzahl_pedelec}
                  </div>
                )}
                {station.anzahl_spedelec !== 0 && (
                  <div style={{ marginBottom: 6 }}>
                    <b>Speed-Pedelecs:</b> {station.anzahl_spedelec}
                  </div>
                )}
                {station.anzahl_ebike !== 0 && (
                  <div style={{ marginBottom: 6 }}>
                    <b>E-Bikes:</b> {station.anzahl_ebike}
                  </div>
                )}
                {station.anzahl_lastenrad !== 0 && (
                  <div style={{ marginBottom: 6 }}>
                    <b>Lastenräder:</b> {station.anzahl_lastenrad}
                  </div>
                )}
                <div>
                  <b>Leihgebühr:</b> {station.leihgebuehr}
                </div>
              </>
            ) : (
              <>
                <div style={{ marginBottom: 16 }}>
                  Es kann keine Aussage darüber getroffen werden, ob die Station
                  momentan besetzt ist.
                </div>
                <div style={{ marginBottom: 16 }}>
                  <b>Ladepunkte:</b> {station.anzahl_ladepunkte}
                </div>
                <div>
                  <b>Steckerverbindungen: </b>
                  {station.stecker.map((stecker) => {
                    return `${stecker.typ} (${stecker.leistung}kW, ${stecker.strom}A, ${stecker.spannung}V)`;
                  })}
                </div>
                <div>
                  <b>Öko-Strom:</b>{" "}
                  {station.gruener_strom === true ? "Ja" : "Nein"}
                </div>
                {station.ladebox_zu && (
                  <div>
                    {(() => {
                      const hasFaecher =
                        station.anzahl_schliessfaecher &&
                        station.anzahl_fach_steckdosen;

                      const ladeboxAnz = station.ladebox_anz;
                      const coinsArr = Array.isArray(station.ladebox_pfand)
                        ? station.ladebox_pfand
                        : Array.isArray(station.pfand)
                        ? station.pfand
                        : undefined;
                      const coinsText =
                        coinsArr && coinsArr.length
                          ? `Sie benötigen eine der folgenden Münzen: ${coinsArr
                              .map((v) => `${v}€`)
                              .join(", ")}`
                          : typeof station.ladebox_pfand === "string"
                          ? station.ladebox_pfand
                          : typeof station.pfand === "string"
                          ? station.pfand
                          : "";
                      if (!ladeboxAnz && !coinsText) return null;
                      return (
                        <table
                          style={{ border: "none", margin: 0, padding: 0 }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontWeight: "bold",
                                  paddingRight: 8,
                                  verticalAlign: "top",
                                }}
                              >
                                Ladebox:
                              </td>
                              <td>
                                {ladeboxAnz
                                  ? ladeboxAnz
                                  : hasFaecher
                                  ? `Es sind ${station.anzahl_schliessfaecher} Schließfächer mit jeweils ${station.anzahl_fach_steckdosen} Steckdosen vorhanden.`
                                  : ""}
                              </td>
                            </tr>
                            {coinsText && (
                              <tr>
                                <td></td>
                                <td>{coinsText}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      );
                    })()}
                  </div>
                )}
              </>
            )}
          </Panel>
        </Accordion>
        {station.typ !== "Verleihstation" && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
            <Panel header="Bezahlen" eventKey="1" bsStyle="warning">
              <div>
                <b>Authentifizierung:</b> {station.zugangsarten.join(" / ")}
              </div>
              <div>
                <b>Ladekosten:</b> {station.ladekosten}
              </div>
            </Panel>
          </Accordion>
        )}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel
            header={station.betreiber ? "Betreiber" : "Kontakt"}
            eventKey="2"
            bsStyle="success"
          >
            <div
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                float: "right",
                paddingBottom: "5px",
              }}
            >
              {links}
            </div>
            <div>
              {station?.betreiber?.name || station.standort || station.station}
            </div>
            <div>
              {station?.betreiber?.strasse || station.strasse}{" "}
              {station?.betreiber?.hausnummer || station.hausnummer}
            </div>
            <div>
              {station?.betreiber?.plz} {station?.betreiber?.ort}
            </div>
            <br />
          </Panel>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Footer close={close} version={versionString} />
      </Modal.Footer>
    </Modal>
  );
};

export default SecondaryInfoModal;
