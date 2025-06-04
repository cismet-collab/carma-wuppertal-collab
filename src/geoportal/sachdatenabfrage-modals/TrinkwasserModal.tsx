import React from "react";
import {
  faFaucetDrip,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion, Card } from "react-bootstrap";
import { normalizeInput } from "./helper/trinkwasserHelper";
import CustomAccordionToggle from "../../commons/CustomAccordionToggle";
import GenericFooter from "./GenericFooter";
import type { GenericFooterProps } from "./GenericFooter";

interface TrinkwasserModalProps {
  feature: { properties: any };
  setOpen: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<GenericFooterProps>;
}

const TrinkwasserModal: React.FC<TrinkwasserModalProps> = ({
  feature,
  setOpen,
  versionString = "???",
  Footer = GenericFooter,
}) => {
  const close = () => {
    setOpen(false);
  };

  if (feature !== undefined) {
    const trinkwasser = normalizeInput(feature.properties);
    // const links = getLinksForStation(trinkwasser, {
    //    phone: true,
    //    email: true,
    //    web: true
    //});

    let foto;
    if (trinkwasser.foto !== undefined) {
      foto = trinkwasser.foto;
    }

    let frei;
    if (trinkwasser.frei !== undefined) {
      frei = trinkwasser.frei;
    }

    let winterruhe;
    if (trinkwasser.winterruhe !== undefined) {
      winterruhe = trinkwasser.winterruhe;
    }

    let massnahmen;
    if (trinkwasser.massnahmen !== undefined) {
      massnahmen = trinkwasser.massnahmen;
    }

    let dauerlaeufer;
    if (trinkwasser.dauerlaeufer !== undefined) {
      dauerlaeufer = trinkwasser.dauerlaeufer;
    }

    let links: React.ReactNode[] = [];
    if (trinkwasser?.betreiber_url) {
      links.push(
        <a
          href={trinkwasser?.betreiber_url}
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
            <FontAwesomeIcon icon={faFaucetDrip} />
            {` Datenblatt: Trinkwasserbrunnen ${trinkwasser.geographicidentifier}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
          <div style={{ width: "100%", minHeight: 250 }}>
            {winterruhe !== undefined && (
              <div>
                <b>{winterruhe}</b>
              </div>
            )}
            <div style={{ width: "100%", minHeight: 250 }}>
              {foto !== undefined && (
                <img
                  alt="Bild"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "500px",
                    paddingLeft: 10,
                    paddingRight: 10,
                    float: "right",
                    paddingBottom: "5px",
                  }}
                  src={foto}
                />
              )}
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <div>
                  <b>Adresse:</b>
                </div>
                <div>{trinkwasser.adresse}</div>
                <br />
                <div>
                  <b>Beschreibung:</b>
                </div>
                <div>{trinkwasser.beschreibung}</div>
                <br />
                {dauerlaeufer !== undefined && (
                  <div>
                    <b>Dauerläufer:</b>
                  </div>
                )}
                {dauerlaeufer !== undefined && <div>{dauerlaeufer}</div>}
                <br />
                {massnahmen !== undefined && (
                  <div>
                    <b>Massnahmen:</b>
                  </div>
                )}
                {massnahmen !== undefined && <div>{massnahmen}</div>}
                <br />
                <div>
                  <b>Öffnungszeiten:</b> {trinkwasser.oeffnungszeiten}{" "}
                </div>
                <br />
                {frei !== undefined && (
                  <img
                    alt="Barrierefrei"
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingBottom: "5px",
                    }}
                    src={frei}
                    width="50"
                  />
                )}
                <br />
              </div>
            </div>
          </div>
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
                  <div>{trinkwasser?.betreiber}</div>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Footer close={close} version={versionString} />
        </Modal.Footer>
      </Modal>
    );
  }
};

export default TrinkwasserModal;
