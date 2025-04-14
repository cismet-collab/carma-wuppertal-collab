import {
    faFaucetDrip,
    faSquareArrowUpRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Modal, Accordion, Card } from "react-bootstrap";
  import { normalizeInput } from "./helper/trinkwasserHelper";
  import CustomAccordionToggle from "../../commons/CustomAccordionToggle";
//import type { ReactElement, JSXElementConstructor, ReactNode } from "react";
  

 
  const TrinkwasserModal = ({ feature, setOpen }) => {
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
        
        let winterruhe;
        if (trinkwasser.winterruhe !== undefined) {
            winterruhe = trinkwasser.winterruhe;
        }

        let dauerlaeufer;
        if (trinkwasser.dauerlaeufer !== undefined) {
            dauerlaeufer = trinkwasser.dauerlaeufer;
        }

        let wartung;
        if (trinkwasser.wartung !== undefined) {
            wartung = trinkwasser.wartung;
        }

        let gebaeude;
        if (trinkwasser.gebaeude !== undefined) {
            gebaeude = trinkwasser.gebaeude;
        }
        
        let massnahmen;
        if (trinkwasser.massnahmen !== undefined) {
            massnahmen = trinkwasser.massnahmen;
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
            >
            <Modal.Header>
                <Modal.Title>
                <FontAwesomeIcon icon={faFaucetDrip} />
                {` Datenblatt: Trinkwasserbrunnen ${trinkwasser.name}`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="myMenu" key={"prbr.secondaryInfo"}>
                <div style={{ width: "100%", minHeight: 250 }}>
                <b>{winterruhe}</b> 
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
                                <div>{trinkwasser.adresse}</div>
                                <br />
                                <div><b>Beschreibung:</b> </div>
                                <div>{trinkwasser.beschreibung} </div>
                                <br />
                            </div> 
                    </div>
                </div>

                <div style={{ padding: "10px", paddingTop: "0px" }}>
                    <br />
                    <div>
                        <b>Öffnungszeiten:</b> {trinkwasser.oeffnungszeiten}
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
            </Modal>
        );
    }
};
  
  export default TrinkwasserModal;
  