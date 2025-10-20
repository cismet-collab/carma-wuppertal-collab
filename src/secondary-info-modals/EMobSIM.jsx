import {
  faChargingStation,
  faPhoneFlip,
  faQuestion,
  faSquareArrowUpRight,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Accordion, Card, Table } from "react-bootstrap";
import {
  getConnectorImageUrl,
  convertVTEntryToFeatureProperties,
} from "./helper/emob";
import { SecondaryInfoFooter } from "../e-auto-ladestation";
import Panel from "react-cismap/commons/Panel";

const SecondaryInfoModal = ({
  feature = {},
  setOpen = (x) => {},
  versionString = "???",
  Footer = SecondaryInfoFooter,
}) => {
  let _feature;
  if (feature.type !== "Feature") {
    _feature = convertVTEntryToFeatureProperties(feature.properties);
  } else {
    _feature = feature;
  }
  const close = () => {
    setOpen(false);
  };

  const ladestation = _feature.properties;
  let foto;
  if (ladestation.foto !== undefined) {
    foto = ladestation.foto;
  }

  let links = [];
  if (ladestation?.betreiber?.telefon) {
    links.push(
      <a href={"tel:" + ladestation?.betreiber?.telefon}>
        <FontAwesomeIcon
          icon={faPhoneFlip}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }
  if (ladestation?.betreiber?.email) {
    links.push(
      <a href={"mailto:" + ladestation?.betreiber?.email} target="_blank">
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }
  if (ladestation?.betreiber?.homepage) {
    links.push(
      <a href={ladestation?.betreiber?.homepage} target="_blank">
        <FontAwesomeIcon
          icon={faSquareArrowUpRight}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }

  let steckerverbindungenTableArr = [];
  if (
    ladestation.steckerverbindungen &&
    ladestation.steckerverbindungen.length > 0
  ) {
    ladestation.steckerverbindungen.forEach((v, index) => {
      for (let i = 0; i < v.anzahl; ++i) {
        let imageUrl = getConnectorImageUrl(v.steckdosentypkey);
        let image;
        if (imageUrl) {
          image = (
            <img
              alt={v.steckdosentypkey}
              src={imageUrl}
              width="50"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  import.meta.env.VITE_WUPP_ASSET_BASEURL +
                  "/images/emob/dynamic/unknown.png";
              }}
            />
          );
        } else {
          image = <FontAwesomeIcon icon={faQuestion} />;
        }
        steckerverbindungenTableArr.push(
          <tr key={index + "." + i}>
            <td
              style={{
                verticalAlign: "middle",
                textAlign: "center",
              }}
            >
              {image}
            </td>
            <td style={{ verticalAlign: "middle" }}>{v.steckdosentyp}</td>
            <td style={{ verticalAlign: "middle" }}>
              {v.leistung}kW
              {v.strom && v.spannung ? ` (${v.strom}A, ${v.spannung}V)` : ``}
              {v.strom && !v.spannung ? ` (${v.strom}A)` : ``}
              {!v.strom && v.spannung ? ` (${v.spannung}V)` : ``}
            </td>
          </tr>
        );
      }
    });
  }

  return (
    <Modal
      style={{
        zIndex: 2900000000,
      }}
      dialogClassName="modal-dialog-scrollable"
      height="100%"
      size="lg"
      show={true}
      onHide={close}
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>
          <FontAwesomeIcon icon={faChargingStation} />
          {` Datenblatt: Ladestation ${ladestation.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
        <div style={{ width: "100%", minHeight: 250 }}>
          {foto && (
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
            <br />
            <div>{ladestation.detailbeschreibung}</div>
            <div> {ladestation.zusatzinfo}</div>
            <br />
            <div>
              <b>Öffnungszeiten:</b> {ladestation.oeffnungszeiten}
            </div>
          </div>
        </div>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
          <Panel
            header={
              ladestation.online === true
                ? "Lademöglichkeit verfügbar (online)"
                : "Lademöglichkeit momentan nicht verfügbar (offline)"
            }
            eventKey="0"
            bsStyle="info"
          >
            <div>
              <b>Ladepunkte:</b> {ladestation.ladeplaetze}
            </div>
            <div>
              <b>Steckerverbindungen:</b>
              <Table striped bordered condensed hover style={{ marginTop: 8 }}>
                <tbody>{steckerverbindungenTableArr}</tbody>
              </Table>
              <div style={{ textAlign: "right" }}>
                <a
                  href="https://github.com/cismet/wupp-topic-maps/blob/feature/039-winter-2019-dev-sprint/public/images/emob/"
                  target="_license"
                >
                  Bildnachweis
                </a>
              </div>
            </div>
            <div>
              <b>Strom:</b> {ladestation.stromart}
            </div>
            <div>
              <b>Schnellladestation:</b>{" "}
              {ladestation.schnellladestation === true ? "Ja" : "Nein"}
            </div>
            <div>
              <b>Öko-Strom:</b>{" "}
              {ladestation.gruener_strom === true ? "Ja" : "Nein"}
            </div>
          </Panel>
        </Accordion>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
          <Panel header={"Bezahlen"} eventKey="1" bsStyle="warning">
            <div>
              <b>Authentifizierung:</b>{" "}
              {ladestation.authentifizierung.join(" / ")}
            </div>
            <div>
              <b>Ladekosten:</b>{" "}
              {ladestation.ladekosten.startsWith("http") ? (
                <a href={ladestation.ladekosten} target="_ladekosten">
                  in anderem Fenster anschauen
                </a>
              ) : (
                ladestation.ladekosten
              )}
            </div>
            <div>
              <b>Parkgebühr:</b> {ladestation.parkgebuehr}
            </div>
          </Panel>
        </Accordion>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel header={"Betreiber"} eventKey="2" bsStyle="success">
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
            <div>{ladestation?.betreiber?.name}</div>
            <div>
              {ladestation?.betreiber?.strasse}{" "}
              {ladestation?.betreiber?.hausnummer}
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
