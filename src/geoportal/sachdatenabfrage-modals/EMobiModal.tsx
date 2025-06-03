import {
  faChargingStation,
  faPhoneFlip,
  faSquareArrowUpRight,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion, Card, Table } from "react-bootstrap";
import { normalizeInput } from "./helper/eMobiHelper";
import CustomAccordionToggle from "../../commons/CustomAccordionToggle";

const EMobiModal = ({ feature, setOpen }) => {
  const close = () => {
    setOpen(false);
  };

  const ladestation = normalizeInput(feature.properties);

  let foto;
  if (ladestation.foto !== undefined) {
    foto = ladestation.foto;
  }

  let links: React.ReactNode[] = [];
  if (ladestation?.betreibertelefon) {
    links.push(
      <a
        href={"tel:" + ladestation?.betreibertelefon}
        style={{ marginRight: "4px" }}
      >
        <FontAwesomeIcon
          icon={faPhoneFlip}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }
  if (ladestation?.betreiberemail) {
    links.push(
      <a href={"mailto:" + ladestation?.betreiberemail} target="_blank">
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }
  if (ladestation?.betreiberhomepage) {
    links.push(
      <a
        href={ladestation?.betreiberhomepage}
        target="_blank"
        style={{ marginLeft: "4px" }}
      >
        <FontAwesomeIcon
          icon={faSquareArrowUpRight}
          style={{ color: "grey", width: "26px", textAlign: "center" }}
          size="2x"
        />
      </a>
    );
  }

  let steckerverbindungenTableArr: React.ReactNode[] = [];

  ladestation.stecker.forEach((stecker) => {
    let image = <img src={stecker.url} width="50" />;
    steckerverbindungenTableArr.push(
      <tr>
        <td
          style={{
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          {image}
        </td>
        <td style={{ verticalAlign: "middle" }}>{stecker.text}</td>
      </tr>
    );
  });

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
          <FontAwesomeIcon icon={faChargingStation} />
          {` Datenblatt: Ladestation ${ladestation.standort}`}
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
            <div>{ladestation.adresse}</div>
            <br />
            <div>{ladestation.bemerkung}</div>
            <div> {ladestation.zusatzinfo}</div>
            <br />
            <div>
              <b>Öffnungszeiten:</b> {ladestation.oeffnungszeiten}
            </div>
          </div>
        </div>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
          <Card style={{ backgroundColor: "#bce8f1" }}>
            <Card.Header>
              <CustomAccordionToggle eventKey="0" color="#31708f">
                {!!ladestation.status === false
                  ? "Lademöglichkeit momentan nicht verfügbar (offline)"
                  : "Lademöglichkeit verfügbar (online)"}
              </CustomAccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ backgroundColor: "white" }}>
                <div>
                  <b>Ladepunkte:</b> {ladestation.anzahl}
                </div>
                <div>
                  <b>Steckerverbindungen:</b>
                  <Table striped bordered hover style={{ marginTop: 8 }}>
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
                  <b>Strom:</b> {ladestation.strom}
                </div>
                <div>
                  <b>Schnellladestation:</b>{" "}
                  {!!ladestation.schnellladestation === true ? "Ja" : "Nein"}
                </div>
                <div>
                  <b>Öko-Strom:</b>{" "}
                  {!!ladestation.gruen === true ? "Ja" : "Nein"}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"1"}>
          <Card style={{ backgroundColor: "#faebcc", color: "black" }}>
            <Card.Header>
              <CustomAccordionToggle eventKey="1" color="#8a6d3b">
                Bezahlen
              </CustomAccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ backgroundColor: "white" }}>
                <div>
                  <b>Zugang:</b>{" "}
                  {ladestation.zugang.map((zugang, index) => (
                    <div key={index}>{zugang}</div>
                  ))}
                </div>
                <div>
                  <b>Parkgebühr:</b> {ladestation.parkgebuehr}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Card style={{ backgroundColor: "#d6e9c6" }}>
            <Card.Header>
              <CustomAccordionToggle eventKey="2" color="#3c763d">
                Betreiber
              </CustomAccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{ backgroundColor: "white" }}>
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
                <div>{ladestation?.betreiber}</div>
                <div>{ladestation?.betreiberadresse}</div>
                <div>{ladestation?.betreiberort}</div>
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
};

export default EMobiModal;
