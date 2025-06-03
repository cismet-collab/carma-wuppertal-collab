import {
  faBicycle,
  faPhoneFlip,
  faSquareArrowUpRight,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion, Card, Table } from "react-bootstrap";
import { normalizeInput } from "./helper/eMobiRadHelper";
import CustomAccordionToggle from "../../commons/CustomAccordionToggle";
//import type { ReactElement, JSXElementConstructor, ReactNode } from "react";

const EMobiRadModal = ({ feature, setOpen }) => {
  const close = () => {
    setOpen(false);
  };

  if (feature !== undefined) {
    const station_rad = normalizeInput(feature.properties);
    // const links = getLinksForStation(station_rad, {
    //    phone: true,
    //    email: true,
    //    web: true
    //});
    let foto;
    if (station_rad.foto !== undefined) {
      foto = station_rad.foto;
    }

    let links: React.ReactNode[] = [];
    if (station_rad?.betreibertelefon) {
      links.push(
        <a
          href={"tel:" + station_rad?.betreibertelefon}
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

    if (station_rad?.betreiberemail) {
      links.push(
        <a href={"mailto:" + station_rad?.betreiberemail} target="_blank">
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            style={{ color: "grey", width: "26px", textAlign: "center" }}
            size="2x"
          />
        </a>
      );
    }
    if (station_rad?.betreiberhomepage) {
      links.push(
        <a
          href={station_rad?.betreiberhomepage}
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

    station_rad.stecker.forEach((stecker) => {
      steckerverbindungenTableArr.push(
        <tr>
          <td style={{ verticalAlign: "middle" }}>{stecker}</td>
        </tr>
      );
    });

    let ladeboxTable: React.ReactNode[] = [];

    if (station_rad?.ladebox_zu) {
      ladeboxTable.push(
        <tbody>
          <tr>
            <div style={{ width: "100%", minHeight: 50 }}>
              <div style={{ float: "left", paddingRight: "5px" }}>
                <div>
                  <b>Ladebox:</b>
                </div>
                <div>
                  {
                    <img
                      alt="Box"
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        float: "left",
                        paddingBottom: "5px",
                      }}
                      src={station_rad.ladebox_zu}
                      width="50"
                    />
                  }
                </div>
              </div>
              <div style={{ float: "left" }}>
                <div>{station_rad.ladebox_anz}</div>

                <div>{station_rad.ladebox_pfand}</div>
              </div>
            </div>
          </tr>
        </tbody>
      );
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
            {` Datenblatt: Ladestation ${station_rad.standort}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
          <div style={{ width: "100%", minHeight: 250 }}>
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

              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <div>
                  <b>Adresse:</b>
                </div>
                <div>{station_rad.adresse}</div>
                <br />
                <div>
                  <b>Detailinformation:</b>{" "}
                </div>
                <div>{station_rad.detailbeschreibung} </div>
                <br />
                <div>
                  <b>Bemerkung:</b>{" "}
                </div>
                <div>{station_rad.bemerkung}</div>
                <div>{station_rad.zusatzinfo}</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "10px", paddingTop: "0px" }}>
            <br />
            <div>
              <b>Öffnungszeiten:</b> {station_rad.oeffnungszeiten}
            </div>
            <br />
            <div>
              <b>Stellplätze:</b> {station_rad.anzahl_plaetze}
            </div>
          </div>
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
            <Card style={{ backgroundColor: "#bce8f1" }}>
              <Card.Header>
                <CustomAccordionToggle eventKey="0" color="#31708f">
                  {!!station_rad.status === false
                    ? "Lademöglichkeit momentan nicht verfügbar (offline)"
                    : "Lademöglichkeit verfügbar (online)"}
                </CustomAccordionToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: "white" }}>
                  <div>{station_rad.verfuegbar}</div>
                  <br />
                  <div>
                    <b>Ladepunkte:</b> {station_rad.anzahl_ladepunkte}
                  </div>
                  <br />
                  <div>
                    <b>Steckerverbindungen:</b>
                    <Table striped bordered hover style={{ marginTop: 8 }}>
                      <tbody>{steckerverbindungenTableArr}</tbody>
                    </Table>
                  </div>
                  <div>
                    <b>Öko-Strom:</b>{" "}
                    {!!station_rad.gruen === true ? "Ja" : "Nein"}
                  </div>
                  <div style={{ width: "100%" }}>
                    <table style={{ marginTop: 8 }}>{ladeboxTable}</table>
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
                    <b>Authentifizierung:</b>{" "}
                    {station_rad.zugangsarten.map((zugangsarten, index) => (
                      <div key={index}>{zugangsarten}</div>
                    ))}
                  </div>
                  <br />
                  <div>
                    <b>Ladekosten:</b> {station_rad.ladekosten}
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
                  <div>{station_rad?.betreiber}</div>
                  <div>{station_rad?.betreiberadresse}</div>
                  <div>{station_rad?.betreiberort}</div>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
      </Modal>
    );
  }
};

export default EMobiRadModal;
