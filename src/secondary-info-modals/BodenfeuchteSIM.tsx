import React, { type ComponentType } from "react";
import SecondaryInfoPanelSection from "react-cismap/topicmaps/SecondaryInfoPanelSection";
import SecondaryInfo from "react-cismap/topicmaps/SecondaryInfo";
import { genericSecondaryInfoFooterFactory } from "../commons";
import sensorWatermarkImage from "./sensor_watermark.png";
import sensorIoplantImage from "./sensor_ioplant.png";
import {
  getSensorType,
  getLocationKey,
  getSensorTypeLabel,
  getStandortbeschreibung,
  getBodenkundeprotokoll,
  getAllgemeineInformationen,
  type Bodenkundeprotokoll,
} from "./bodenfeuchteContent";
import texts from "./_data/bodenfeuchteTexts.json";

type FooterProps = {
  close: () => void;
  version: string;
};

type InfoPanelProps = {
  feature?: { properties?: Record<string, unknown>; [key: string]: unknown };
  setOpen?: (open: boolean) => void;
  Footer?: ComponentType<FooterProps>;
  versionString?: string;
  inStorybook?: boolean;
  close?: () => void;
};

const SMART_WUPPERTAL_URL =
  "https://smart.wuppertal.de/strategie/strategieprozess.php";

const renderKontextWithLink = (kontextText: string) => {
  const linkLabel = "smart.wuppertal";
  const idx = kontextText.indexOf(linkLabel);
  if (idx === -1) return <p>{kontextText}</p>;
  return (
    <p>
      {kontextText.substring(0, idx)}
      <a href={SMART_WUPPERTAL_URL} target="_blank" rel="noopener noreferrer">
        {linkLabel}
      </a>
      {kontextText.substring(idx + linkLabel.length)}
    </p>
  );
};

const renderProtokoll = (protokoll: Bodenkundeprotokoll) => {
  return (
    <div style={{ fontSize: "100%", padding: "10px", paddingTop: "0px" }}>
      <table style={{ width: "100%", marginBottom: 12 }}>
        <tbody>
          <tr>
            <td
              style={{
                fontWeight: "bold",
                paddingRight: 12,
                whiteSpace: "nowrap",
                verticalAlign: "top",
              }}
            >
              Datum:
            </td>
            <td>{protokoll.datum}</td>
          </tr>
          <tr>
            <td
              style={{
                fontWeight: "bold",
                paddingRight: 12,
                whiteSpace: "nowrap",
                verticalAlign: "top",
              }}
            >
              Nutzung:
            </td>
            <td>{protokoll.nutzung}</td>
          </tr>
          <tr>
            <td
              style={{
                fontWeight: "bold",
                paddingRight: 12,
                whiteSpace: "nowrap",
                verticalAlign: "top",
              }}
            >
              Bodentyp:
            </td>
            <td>{protokoll.bodentyp}</td>
          </tr>
          <tr>
            <td
              style={{
                fontWeight: "bold",
                paddingRight: 12,
                whiteSpace: "nowrap",
                verticalAlign: "top",
              }}
            >
              Beprobungstiefe:
            </td>
            <td>{protokoll.beprobungstiefe}</td>
          </tr>
          {protokoll.auffaelligkeiten && (
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  paddingRight: 12,
                  whiteSpace: "nowrap",
                  verticalAlign: "top",
                }}
              >
                Auffälligkeiten:
              </td>
              <td>{protokoll.auffaelligkeiten}</td>
            </tr>
          )}
          {protokoll.gelaendeform && (
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  paddingRight: 12,
                  whiteSpace: "nowrap",
                  verticalAlign: "top",
                }}
              >
                Geländeform:
              </td>
              <td>{protokoll.gelaendeform}</td>
            </tr>
          )}
          {protokoll.bewuchs && (
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  paddingRight: 12,
                  whiteSpace: "nowrap",
                  verticalAlign: "top",
                }}
              >
                Bewuchs:
              </td>
              <td>{protokoll.bewuchs}</td>
            </tr>
          )}
          {protokoll.anmerkungen && (
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  paddingRight: 12,
                  whiteSpace: "nowrap",
                  verticalAlign: "top",
                }}
              >
                Anmerkungen:
              </td>
              <td>{protokoll.anmerkungen}</td>
            </tr>
          )}
        </tbody>
      </table>

      {protokoll.organischerHorizont &&
        protokoll.organischerHorizont.length > 0 && (
          <>
            <b>Organischer Horizont</b>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 4,
                marginBottom: 12,
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <th style={{ textAlign: "left", padding: "4px 8px" }}>
                    Tiefe
                  </th>
                  <th style={{ textAlign: "left", padding: "4px 8px" }}>
                    Horizont
                  </th>
                </tr>
              </thead>
              <tbody>
                {protokoll.organischerHorizont.map((h, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "4px 8px" }}>{h.tiefe}</td>
                    <td style={{ padding: "4px 8px" }}>{h.horizont}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

      <b>Mineralischer Horizont</b>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: 4,
            fontSize: "90%",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>
                Tiefe [cm]
              </th>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>
                Horizont
              </th>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>
                Feinboden
              </th>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>
                Bodenfarbe
              </th>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>Humus</th>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>
                Bemerkungen
              </th>
            </tr>
          </thead>
          <tbody>
            {protokoll.mineralischerHorizont.map((h, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "4px 6px" }}>{h.tiefe}</td>
                <td style={{ padding: "4px 6px" }}>{h.horizont}</td>
                <td style={{ padding: "4px 6px" }}>{h.feinboden ?? "–"}</td>
                <td style={{ padding: "4px 6px" }}>{h.bodenfarbe ?? "–"}</td>
                <td style={{ padding: "4px 6px" }}>{h.humus || "–"}</td>
                <td style={{ padding: "4px 6px" }}>{h.bemerkungen || "–"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InfoPanel: React.FC<InfoPanelProps> = ({
  feature = {},
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
  versionString = "???",
  inStorybook = false,
  close = () => {},
}) => {
  const selectedFeature = feature as { properties?: Record<string, unknown> };
  const sensor = selectedFeature?.properties;

  if (sensor === undefined) return null;

  const name = (sensor.name as string) ?? "";
  const sensorType = getSensorType(name);
  const sensorTypeLabel = getSensorTypeLabel(sensorType);
  const locationKey = getLocationKey(name, sensorType);
  const standort = getStandortbeschreibung(locationKey, sensorType);
  const isIoplant = sensorType === "tree" || sensorType === "dike";
  const protokoll = isIoplant ? getBodenkundeprotokoll(locationKey) : null;
  const allgemeineInfo = getAllgemeineInformationen(sensorType);

  const dateObserved = sensor.dateObserved as string | undefined;
  const formattedDate = dateObserved
    ? new Date(dateObserved).toLocaleString("de-DE")
    : "–";

  const subSections: JSX.Element[] = [];

  // 1. Standortbeschreibung
  subSections.push(
    <SecondaryInfoPanelSection
      key="standort"
      bsStyle="info"
      header="Standortbeschreibung"
    >
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <p>{standort.text}</p>
        {standort.bodentyp && (
          <p>
            <b>Dominanter Bodentyp:</b> {standort.bodentyp}
          </p>
        )}
      </div>
    </SecondaryInfoPanelSection>
  );

  // 2. Diagramm
  subSections.push(
    <SecondaryInfoPanelSection
      key="diagramm"
      bsStyle="success"
      header="Diagramm"
    >
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <p>tbd.</p>
      </div>
    </SecondaryInfoPanelSection>
  );

  // 3. Datendownload
  subSections.push(
    <SecondaryInfoPanelSection
      key="download"
      bsStyle="warning"
      header="Datendownload"
    >
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <p>tbd.</p>
      </div>
    </SecondaryInfoPanelSection>
  );

  // 4. Bodenkundeprotokolle (ioplant only)
  if (isIoplant) {
    subSections.push(
      <SecondaryInfoPanelSection
        key="bodenkunde"
        bsStyle="default"
        header="Bodenkundeprotokoll"
      >
        <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
          {protokoll ? (
            renderProtokoll(protokoll)
          ) : (
            <p>{texts.experimentalPlaceholder}</p>
          )}
        </div>
      </SecondaryInfoPanelSection>
    );
  }

  // 5. Allgemeine Informationen
  subSections.push(
    <SecondaryInfoPanelSection
      key="allgemein"
      bsStyle="default"
      header="Allgemeine Informationen"
    >
      <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
        <b>Sensor und Messverfahren</b>
        <p>{allgemeineInfo.sensor}</p>
        {allgemeineInfo.kontext && (
          <>
            <b>Kontextualisierung</b>
            {renderKontextWithLink(allgemeineInfo.kontext)}
          </>
        )}
      </div>
    </SecondaryInfoPanelSection>
  );

  return (
    <SecondaryInfo
      visible={inStorybook ? true : undefined}
      defaultContextValues={
        inStorybook ? { windowSize: { width: 800, height: 1000 } } : {}
      }
      titleIconName="info-circle"
      title={`Datenblatt: Bodenfeuchtesensor (${sensorTypeLabel})`}
      mainSection={
        <div style={{ width: "100%", minHeight: 180, overflow: "hidden" }}>
          <div
            style={{
              textAlign: "center",
              float: "right",
              paddingLeft: 10,
              paddingRight: 100,
              paddingBottom: 10,
            }}
          >
            <img
              alt="Schematische Darstellung Bodenfeuchtesensor"
              src={
                sensorType === "watermark"
                  ? sensorWatermarkImage
                  : sensorIoplantImage
              }
              height="180"
            />
          </div>
          <div
            style={{
              fontSize: "115%",
              padding: "10px",
              paddingTop: "0px",
            }}
          >
            <div>
              <b>Sensor:</b>
              <p>{name}</p>
            </div>
            <div>
              <b>Letzte Messung:</b>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      }
      subSections={subSections}
      footer={<Footer version={versionString} close={close} skipCloseButton />}
    />
  );
};

export default InfoPanel;
