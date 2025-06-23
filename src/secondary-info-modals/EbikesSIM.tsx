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

  const ladestation = feature.properties;
  const isVerleih = ladestation.typ === "Verleihstation";
  let foto;
  if (ladestation.foto !== undefined) {
    foto = ladestation.foto;
  }

  let links: any = [];

  if (ladestation.betreiber) {
    if (ladestation?.betreiber?.telefon) {
      links.push(
        <a
          title="Beitreiber anrufen"
          href={"tel:" + ladestation?.betreiber?.telefon}
        >
          <FontAwesomeIcon
            icon={faPhoneFlip}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
    if (ladestation?.betreiber?.email || ladestation.email) {
      const mail = ladestation?.betreiber?.email
        ? ladestation?.betreiber?.email
        : ladestation.email;
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
    if (ladestation?.betreiber?.web) {
      links.push(
        <a
          title="Betreiberwebseite"
          href={ladestation?.betreiber?.web}
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
    if (ladestation.telefon) {
      links.push(
        <a title="Beitreiber anrufen" href={"tel:" + ladestation?.telefon}>
          <FontAwesomeIcon
            icon={faPhoneFlip}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }

    if (ladestation.email) {
      links.push(
        <a
          title="E-Mail an den Betreiber schreiben"
          href={"mailto:" + ladestation?.email}
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

    if (ladestation.homepage) {
      links.push(
        <a
          title="Betreiberwebseite"
          href={ladestation?.homepage}
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
          {` Datenblatt: ${ladestation.typ} ${ladestation.standort}`}
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
              {ladestation.strasse} {ladestation.hausnummer}
            </div>
            {isVerleih ? (
              <>
                {ladestation.weitereinfo && (
                  <>
                    <br />
                    <div>
                      <b>Weitere Informationen:</b>
                      <div>{ladestation.weitereinfo}</div>
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
                <div>{ladestation.detailbeschreibung}</div>
              </>
            )}
            <br />
            {ladestation.bemerkung && (
              <>
                <div>
                  <b>Bemerkung:</b>
                </div>
                <div>{ladestation.bemerkung}</div>
                <br />
              </>
            )}
            <div>
              <b>Öffnungszeiten:</b> {ladestation.oeffnungszeiten}
            </div>
            <br />
            {!isVerleih && (
              <div>
                <b>Stellplätze:</b> {ladestation.anzahl_plaetze}
              </div>
            )}
          </div>
        </div>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
          <Panel
            header={
              ladestation.typ === "Verleihstation"
                ? "Verleih"
                : "Lademöglichkeit verfügbar"
            }
            eventKey="2"
            bsStyle="info"
          >
            {ladestation.typ === "Verleihstation" ? (
              <>
                <div style={{ marginBottom: 6 }}>
                  <b>Pedelecs:</b> {ladestation.anzahl_pedelec}
                </div>
                <div style={{ marginBottom: 6 }}>
                  <b>Speed-Pedelecs:</b> {ladestation.anzahl_spedelec}
                </div>
                <div style={{ marginBottom: 6 }}>
                  <b>E-Bikes:</b> {ladestation.anzahl_ebike}
                </div>
                <div style={{ marginBottom: 6 }}>
                  <b>Lastenräder:</b> {ladestation.anzahl_lastenrad}
                </div>
                <div>
                  <b>Leihgebühr:</b> {ladestation.leihgebuehr}
                </div>
              </>
            ) : (
              <>
                <div style={{ marginBottom: 16 }}>
                  Es kann keine Aussage darüber getroffen werden, ob die Station
                  momentan besetzt ist.
                </div>
                <div style={{ marginBottom: 16 }}>
                  <b>Ladepunkte:</b> {ladestation.anzahl_plaetze}
                </div>
                <div>
                  <b>Steckerverbindungen:</b>
                  {ladestation.stecker.map((stecker) => {
                    return `${stecker.typ} (${stecker.leistung}kW, ${stecker.strom}A, ${stecker.spannung}V)`;
                  })}
                </div>
              </>
            )}
          </Panel>
        </Accordion>
        {ladestation.typ !== "Verleihstation" && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
            <Panel header="Bezahlen" eventKey="1" bsStyle="warning">
              <div>
                <b>Authentifizierung:</b> {ladestation.zugangsarten.join(" / ")}
              </div>
              <div>
                <b>Ladekosten:</b> {ladestation.ladekosten}
              </div>
            </Panel>
          </Accordion>
        )}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel
            header={ladestation.betreiber ? "Betreiber" : "Kontakt"}
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
            <div>{ladestation?.betreiber?.name || ladestation.standort}</div>
            <div>
              {ladestation?.betreiber?.strasse || ladestation.strasse}{" "}
              {ladestation?.betreiber?.hausnummer || ladestation.hausnummer}
            </div>
            <div>
              {ladestation?.betreiber?.plz} {ladestation?.betreiber?.ort}
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
