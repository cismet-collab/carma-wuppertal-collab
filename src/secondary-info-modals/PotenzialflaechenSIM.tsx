import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { genericSecondaryInfoFooterFactory } from "../commons";
import type { SecondaryInfoFooterProps } from "../commons/genericSecondaryInfoFooterFactory";
import {
  convertVTEntryToFeatureProperties,
  applyTypoKeyAliases,
} from "./helper/potenzialflaechen";

type Feature = {
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: any;
};

type SecondaryInfoModalProps = {
  feature?: Feature;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<SecondaryInfoFooterProps>;
  inStorybook?: boolean;
};

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({
    skipTeilzwilling: true,
    applicationName: "Teilzwilling Potenzialflächen-Online",
  }),
}: SecondaryInfoModalProps) => {
  // Dual-data: a real GeoJSON/DAQ feature is used directly, a vektorlayer
  // (vector tile) entry is normalised to the same property shape first.
  let _feature: Feature;
  if (feature.type !== "Feature") {
    _feature = convertVTEntryToFeatureProperties(feature.properties);
  } else {
    _feature = feature;
  }

  const close = () => {
    setOpen(false);
  };

  // Backfill canonical keys from misspelled SQL-view keys (see helper) so the
  // suppressed fields show regardless of whether the upstream typo is fixed.
  const potenzialflaeche = applyTypoKeyAliases(_feature?.properties);
  if (potenzialflaeche === undefined) {
    return null;
  }

  const display = (
    desc: string,
    value: unknown,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valFunc?: (value: any) => React.ReactNode
  ) => {
    if (value && valFunc === undefined && Array.isArray(value) === false) {
      return (
        <div>
          <b>{desc}:</b> {value as React.ReactNode}
        </div>
      );
    } else if (value && valFunc === undefined && Array.isArray(value) === true) {
      return (
        <div>
          <b>{desc}:</b> {(value as unknown[]).join(", ")}
        </div>
      );
    } else if (value && valFunc !== undefined) {
      return (
        <div>
          <b>{desc}:</b> {valFunc(value)}
        </div>
      );
    }
  };

  const showRawData = new URLSearchParams(window.location.href).get(
    "showRawData"
  );

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
          <FontAwesomeIcon icon={faInfoCircle} />
          {` Datenblatt: ${potenzialflaeche?.bezeichnung}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key="potenzialflaeche.secondaryInfo">
        {/* Main section */}
        <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
          <div>
            {display("Nummer", potenzialflaeche?.nummer)}
            {display("Bezeichnung", potenzialflaeche?.bezeichnung)}
            {display("Kategorie", potenzialflaeche?.kampagne?.bezeichnung)}
            {display("Flächengröße", potenzialflaeche?.groesse, (a) => (
              <span>
                {a.toLocaleString()} m² (circa{" "}
                {(Math.round((a / 10000) * 10) / 10).toLocaleString()} ha)
              </span>
            ))}
            {display("Stadtbezirk(e)", potenzialflaeche?.stadtbezirke, (sb) =>
              sb.join(", ")
            )}
            {display("Quartier(e)", potenzialflaeche?.quartiere, (q) =>
              q.join(", ")
            )}
            {display("Eigentümer", potenzialflaeche?.eigentuemer, (e) =>
              e.join(", ")
            )}
          </div>
        </div>

        {/* Lagebeschreibung */}
        {(potenzialflaeche?.lagebewertung_verkehr ||
          potenzialflaeche?.oepnv ||
          potenzialflaeche?.naehe_zu ||
          potenzialflaeche?.siedlungsraeumliche_lage ||
          potenzialflaeche?.topografie ||
          potenzialflaeche?.hang) && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="lage">
            <Panel header="Lagebeschreibung" eventKey="lage" bsStyle="info">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {display(
                  "Lagebewertung Verkehr",
                  potenzialflaeche?.lagebewertung_verkehr
                )}
                {display("ÖPNV Qualität", potenzialflaeche?.oepnv)}
                {display("Nähe zu", potenzialflaeche?.naehe_zu)}
                {display(
                  "Siedlungsräumliche Lage",
                  potenzialflaeche?.siedlungsraeumliche_lage
                )}
                {display("Topografie", potenzialflaeche?.topografie)}
                {display("Hangrichtung", potenzialflaeche?.hang)}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Planungsrecht / Bauordnungsrecht */}
        {(potenzialflaeche?.regionalplan ||
          potenzialflaeche?.bplaene ||
          potenzialflaeche?.festsetzungen_bplan ||
          potenzialflaeche?.bauordnungsrecht_genehmigung ||
          potenzialflaeche?.stand_bauordnungsrecht) && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="planung">
            <Panel
              header="Planungsrecht / Bauordnungsrecht"
              eventKey="planung"
              bsStyle="danger"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {display("Regionalplan", potenzialflaeche?.regionalplan)}
                {/* {display("Flächennutzungsplan", potenzialflaeche?.)} */}
                {display("Bebauungspläne", potenzialflaeche?.bplaene)}
                {display("Festsetzungen", potenzialflaeche?.festsetzungen_bplan)}
                {/* bauordnungsrecht_baulast kommt noch dazu */}
                {display(
                  "Bauordnungsrecht (Stand)",
                  potenzialflaeche?.stand_bauordnungsrecht
                )}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Erweiterte Informationen */}
        {(potenzialflaeche?.umgebungsnutzung ||
          potenzialflaeche?.brachflaechen ||
          potenzialflaeche?.jahr_brachflaeche ||
          potenzialflaeche?.bisherige_nutzung ||
          potenzialflaeche?.bestand_bebauung ||
          potenzialflaeche?.versiegelung ||
          potenzialflaeche?.aeussere_erschliessung ||
          potenzialflaeche?.wohnlagen ||
          potenzialflaeche?.klimainformationen) && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="erweitert">
            <Panel
              header="Erweiterte Informationen"
              eventKey="erweitert"
              bsStyle="success"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {display("Umgebungsnutzung", potenzialflaeche?.umgebungsnutzung)}
                {display("Brachfläche", potenzialflaeche?.brachflaechen)}
                {display("Nutzungsaufgabe", potenzialflaeche?.jahr_brachflaeche)}
                {display(
                  "Bisherige Nutzung",
                  potenzialflaeche?.bisherige_nutzung
                )}
                {display("Bestand Bebauung", potenzialflaeche?.bestand_bebauung)}
                {display("Bestand Versiegelung", potenzialflaeche?.versiegelung)}
                {display(
                  "Äußere Erschließung",
                  potenzialflaeche?.aeussere_erschliessung
                )}
                {display("Wohnlagen", potenzialflaeche?.wohnlagen)}
                {/* {display("Bodenrichtwerte", potenzialflaeche?.)} */}
                {/* {display("Stadtraumtypen", potenzialflaeche?.)} */}
                {display(
                  "Klimainformationen",
                  potenzialflaeche?.klimainformationen
                )}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Beschreibung / Sachstand */}
        {potenzialflaeche?.beschreibung_flaeche && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="beschreibung">
            <Panel
              header="Beschreibung / Sachstand"
              eventKey="beschreibung"
              bsStyle="warning"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {potenzialflaeche?.beschreibung_flaeche
                  .split("\n")
                  .map((part: string, index: number) => {
                    return <p key={"beschreibung.part" + index}>{part}</p>;
                  })}

                {display("Quelle", potenzialflaeche?.quelle)}
                {display("Stand", potenzialflaeche?.stand, (d) => {
                  try {
                    const date = new Date(d);
                    return (
                      date.getDate() +
                      "." +
                      (date.getMonth() + 1) +
                      "." +
                      date.getFullYear()
                    );
                  } catch (e) {
                    return d;
                  }
                })}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Notwendige Maßnahmen / Nächste Schritte */}
        {potenzialflaeche?.notwendige_massnahmen && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="massnahmen">
            <Panel
              header="Notwendige Maßnahmen / Nächste Schritte"
              eventKey="massnahmen"
              bsStyle="success"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <p>{potenzialflaeche?.notwendige_massnahmen}</p>
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Bewertung */}
        {(potenzialflaeche?.kategorie ||
          potenzialflaeche?.potenzialart ||
          potenzialflaeche?.entwicklungsstand ||
          potenzialflaeche?.restriktionen ||
          potenzialflaeche?.empfohlene_nutzungen_wohnen ||
          potenzialflaeche?.wohneinheiten ||
          potenzialflaeche?.entwicklungsaussichten ||
          potenzialflaeche?.verfuegbarkeit ||
          potenzialflaeche?.verwertbarkeit ||
          potenzialflaeche?.handlungsprioritaet ||
          potenzialflaeche?.empfohlene_nutzungen ||
          potenzialflaeche?.revitalisierung ||
          potenzialflaeche?.handlungsdruck) && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="bewertung">
            <Panel header="Bewertung" eventKey="bewertung" bsStyle="info">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {display("Entwicklungsart", potenzialflaeche?.kategorie)}
                {display("Potenzialart", potenzialflaeche?.potenzialart)}
                {display(
                  "Entwicklungsstand",
                  potenzialflaeche?.entwicklungsstand
                )}
                {display(
                  "Restriktionen / Hemnisse",
                  potenzialflaeche?.restriktionen
                )}
                {display(
                  "Empfohlene Art der Wohnnutzung",
                  potenzialflaeche?.empfohlene_nutzungen_wohnen
                )}
                {display(
                  "Anzahl mög. Wohneinheiten",
                  potenzialflaeche?.wohneinheiten,
                  (t) => (
                    <span>
                      {potenzialflaeche?.anzahl_wohneinheiten && (
                        <span> {potenzialflaeche?.anzahl_wohneinheiten}</span>
                      )}{" "}
                      {t}
                    </span>
                  )
                )}
                {display(
                  "Entwicklungsaussichten",
                  potenzialflaeche?.entwicklungsaussichten
                )}
                {display("Verfügbarkeit", potenzialflaeche?.verfuegbarkeit)}
                {display("Verwertbarkeit", potenzialflaeche?.verwertbarkeit)}
                {display(
                  "Handlungspriorität (Verwaltung)",
                  potenzialflaeche?.handlungsprioritaet
                )}
                {display(
                  "Empfohlene Nutzung",
                  potenzialflaeche?.empfohlene_nutzungen
                )}
                {display("Revitalisierung", potenzialflaeche?.revitalisierung)}
                {display("Handlungsdruck", potenzialflaeche?.handlungsdruck)}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* Raw data (debug, via ?showRawData) */}
        {showRawData !== null && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="raw">
            <Panel
              header={"Potenzialfläche (raw data): " + potenzialflaeche?.nummer}
              eventKey="raw"
              bsStyle="info"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <pre>{JSON.stringify(potenzialflaeche, null, 2)}</pre>
              </div>
            </Panel>
          </Accordion>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Footer close={close} version={versionString} />
      </Modal.Footer>
    </Modal>
  );
};

export default SecondaryInfoModal;
