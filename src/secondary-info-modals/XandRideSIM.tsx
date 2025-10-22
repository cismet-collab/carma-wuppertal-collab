import React from "react";
import { faBicycle, faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Accordion } from "react-bootstrap";
import type { SecondaryInfoFooterProps } from "../x-and-ride/SecondaryInfoFooter";

import logo_vrr from "./assets/logo-vrr.png";
import { convertVTEntryToFeatureProperties } from "./helper/xandride";
import Panel from "react-cismap/commons/Panel";
import { genericSecondaryInfoFooterFactory } from "../commons";

type Feature = {
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: any;
};

type SecondaryInfoModalProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feature?: Feature;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<SecondaryInfoFooterProps>;
};

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
}: SecondaryInfoModalProps) => {
  let _feature;
  if (feature.type !== "Feature") {
    _feature = convertVTEntryToFeatureProperties(feature.properties);
  } else {
    _feature = feature as Feature;
  }

  const close = () => {
    setOpen(false);
  };

  const properties = _feature.properties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupingFunction = (obj: any) => {
    if (obj.schluessel === "P") {
      return "P+R";
    } else {
      return "B+R";
    }
  };
  let foto: string | undefined;
  if (properties.foto !== undefined) {
    foto = properties.foto as string;
  }

  let plaetze_label = "Plätze";
  if (properties.ueberdachung === true) {
    plaetze_label = "überdachter Plätze";
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
          <FontAwesomeIcon
            icon={properties.schluessel === "B" ? faBicycle : faCar}
          />
          {` Datenblatt: ${groupingFunction(properties)} ${properties.name}`}
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
          <div style={{ padding: "10px", paddingTop: "0px" }}>
            <div style={{ marginBottom: 10 }}>{properties.beschreibung}</div>

            <div style={{ marginBottom: 10 }}>
              Anzahl {plaetze_label}: {properties.plaetze}
            </div>

            {properties.anbindung_schwebebahn === true && (
              <p>
                Die Anlage ist an die Schwebebahn angebunden und befindet sich{" "}
                {properties.inUZ === true ? "innerhalb" : "außerhalb"} einer
                Umweltzone.
              </p>
            )}
            {properties.anbindung_schwebebahn === false &&
              properties.inUZ === true && (
                <p>Die Anlage befindet sich in einer Umweltzone.</p>
              )}
            {properties.anbindung_schwebebahn === false &&
              properties.inUZ === false && (
                <p>Die Anlage befindet sich außerhalb einer Umweltzone.</p>
              )}
          </div>
        </div>
        {(properties.bahnlinien?.length > 0 ||
          properties.buslinien?.length > 0) && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"0"}>
            <Panel header={"ÖPNV"} eventKey="0" bsStyle="info">
              {properties.bahnlinien?.length > 0 && (
                <div style={{ marginBottom: 6, fontSize: 20 }}>
                  <b>Bahnlinien</b>
                </div>
              )}
              {properties.bahnlinien?.map((linie: string, i: number) => {
                return (
                  <p key={`bahn-${i}`} style={{ marginBottom: 0 }}>
                    {linie}
                  </p>
                );
              })}
              {properties.buslinien?.length > 0 && (
                <div style={{ marginBottom: 6, fontSize: 20, marginTop: 6 }}>
                  <b>Buslinien</b>
                </div>
              )}
              {properties.buslinien?.map((linie: string, i: number) => {
                return (
                  <span key={`bus-${i}`} style={{ marginBottom: 0 }}>
                    {linie}
                    {i !== properties.buslinien.length - 1 && ", "}
                  </span>
                );
              })}
            </Panel>
          </Accordion>
        )}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey={"2"}>
          <Panel header={"Fahrplanauskunft"} eventKey="1" bsStyle="success">
            <a
              style={{ textDecoration: "none" }}
              href={`http://efa.vrr.de/wswstd/XSLT_TRIP_REQUEST2?language=de&sessionID=0&odvMacro=true&commonMacro=true&lineRestriction=403&SpEncId=0&type_origin=any&type_destination=any&useRealtime=1&nameInfo_origin=invalid&nameInfo_destination=invalid&name_origin=${properties.haltestellenname}&name_destination=`}
              target="_fahrplanauskunft"
            >
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        verticalAlign: "top",
                        paddingRight: 10,
                      }}
                    >
                      <h4>
                        Mit einem Klick die Fahrplanauskunft des VRR zu dieser
                        Haltestelle öffnen.
                      </h4>
                      <img
                        alt="Bild"
                        style={{ paddingBottom: "5px" }}
                        src={logo_vrr}
                        width="80"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
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
