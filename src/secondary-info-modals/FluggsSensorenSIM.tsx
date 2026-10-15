import React from "react";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import LiveBadge from "../commons/LiveBadge";
import texts from "./_data/fluggsSensorenTexts";

// Datenblatt der Wupperverband-Messstellen (FROST, #4129). Eine Komponente fuer
// alle sieben Ebenen, unterschieden ueber die Eigenschaft "gruppe".

// Kategoriefarben wie in der InfoBox der Styles: Wasser, Niederschlag als Klima
const COLORS: Record<string, { header: string; cell: string }> = {
  wasserstand: { header: "#1e88e5", cell: "#BBDEFB" },
  durchfluss: { header: "#1e88e5", cell: "#BBDEFB" },
  niederschlag: { header: "#607680", cell: "#CFD8DC" },
  wassertemperatur: { header: "#1e88e5", cell: "#BBDEFB" },
  speicherfuellstand: { header: "#1e88e5", cell: "#BBDEFB" },
  speicherinhalt: { header: "#1e88e5", cell: "#BBDEFB" },
  gewaesserguete: { header: "#1e88e5", cell: "#BBDEFB" },
};
const FALLBACK_COLORS = { header: "#546E7A", cell: "#CFD8DC" };

const HEADINGS: Record<string, string> = {
  wasserstand: "Pegel",
  durchfluss: "Abflusspegel",
  niederschlag: "Niederschlagsmesser",
  wassertemperatur: "Temperaturmessstelle",
  speicherfuellstand: "Talsperre",
  speicherinhalt: "Talsperre",
  gewaesserguete: "Gütemessstelle",
};

const LIVE_MS = 24 * 60 * 60 * 1000;

const fmtWert = (p: Record<string, unknown>): string => {
  const decimals =
    typeof p.nachkommastellen === "number" ? p.nachkommastellen : 1;
  if (typeof p.wert === "number" && isFinite(p.wert)) {
    return p.wert.toFixed(decimals).replace(".", ",");
  }
  if (typeof p.wert === "string" && p.wert.trim() !== "") return p.wert;
  return "–";
};

const fmtTimestamp = (ts: unknown): string => {
  if (typeof ts !== "string" || !ts) return "–";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return ts;
  return (
    d.toLocaleDateString("de-DE") +
    " " +
    d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
  );
};

const fmtDatum = (ts: unknown): string => {
  if (typeof ts !== "string" || !ts) return "–";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return ts;
  return d.toLocaleDateString("de-DE");
};

const alter = (ts: unknown): string => {
  if (typeof ts !== "string" || !ts) return "";
  const ms = Date.now() - new Date(ts).getTime();
  if (!isFinite(ms) || ms < 0) return "";
  const min = Math.floor(ms / 60000);
  if (min < 60) return `vor ${min} min`;
  const std = Math.floor(min / 60);
  if (std < 48) return `vor ${std} h`;
  const tage = Math.floor(std / 24);
  if (tage < 60) return `vor ${tage} Tagen`;
  const monate = Math.floor(tage / 30);
  if (monate < 24) return `vor ${monate} Monaten`;
  return `vor ${Math.floor(tage / 365)} Jahren`;
};

const Zeile = ({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 8,
      padding: "2px 4px",
      borderBottom: last ? undefined : "1px solid rgba(0,0,0,0.08)",
    }}
  >
    <div style={{ color: "#888" }}>{label}</div>
    <div style={{ textAlign: "right" }}>{children}</div>
  </div>
);

interface FeatureType {
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<{ close: () => void; version: string }>;
  inStorybook?: boolean;
}) => {
  const close = () => {
    setOpen(false);
  };

  const p = feature?.properties;
  if (p === undefined) return null;

  const gruppe = (p.gruppe as string) ?? "";
  const colors = COLORS[gruppe] ?? FALLBACK_COLORS;
  const name = (p.name as string) || "Messstelle";
  const phaenomen = (p.phaenomen as string) || "";
  const einheit = (p.einheit as string) || "";
  const dateObserved = p.dateObserved as string | undefined;
  const isLive =
    !!dateObserved &&
    Date.now() - new Date(dateObserved).getTime() < LIVE_MS;
  const standAlter = alter(dateObserved);
  const messgroesse = texts.messgroessen[gruppe];
  const frostUrl = p.url as string | undefined;

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
          <FontAwesomeIcon icon={faInfoCircle} />
          {` Datenblatt: ${name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key="fluggsSensoren.secondaryInfo">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            padding: "10px",
            paddingTop: 0,
            marginBottom: 10,
            fontFamily: "sans-serif",
            fontSize: 13,
            color: "#333",
          }}
        >
          <div style={{ flex: "1 1 200px" }}>
            <div
              style={{
                background: colors.header,
                color: "#fff",
                fontWeight: "bold",
                padding: "2px 6px",
                textAlign: "center",
              }}
            >
              {phaenomen || "Messwert"}
            </div>
            <div
              style={{
                background: colors.cell,
                textAlign: "center",
                padding: "10px 6px",
              }}
            >
              <span style={{ fontSize: 30, fontWeight: "bold", color: "#222" }}>
                {fmtWert(p)}
              </span>
              {einheit && einheit !== "-" && (
                <span style={{ fontSize: 15, color: "#555" }}> {einheit}</span>
              )}
            </div>
            <div
              style={{
                color: "#666",
                fontSize: "90%",
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>
                Stand: {fmtTimestamp(dateObserved)}
                {standAlter && ` (${standAlter})`}
              </span>
              <LiveBadge isLive={isLive} />
            </div>
          </div>
          <div style={{ flex: "1 1 260px" }}>
            <Zeile label="Messstelle">
              {HEADINGS[gruppe] ?? "Messstelle"} des Wupperverbands
            </Zeile>
            {typeof p.stadt === "string" && p.stadt && (
              <Zeile label="Stadt">{p.stadt}</Zeile>
            )}
            <Zeile label="Messbeginn">{fmtDatum(p.messbeginn)}</Zeile>
            {typeof p.sensorName === "string" && p.sensorName && (
              <Zeile label="Sensor">{p.sensorName}</Zeile>
            )}
            {typeof p.wvAkzId === "string" && p.wvAkzId && (
              <Zeile label="Kennung">{p.wvAkzId}</Zeile>
            )}
            <Zeile label="Datastream" last>
              {frostUrl ? (
                <a href={frostUrl} target="_blank" rel="noopener noreferrer">
                  {String(p.datastreamId ?? "–")}
                </a>
              ) : (
                String(p.datastreamId ?? "–")
              )}
            </Zeile>
          </div>
        </div>

        {/* Platzhalter, bis die Historie bei cismet gespiegelt wird */}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="ganglinie">
          <Panel header="Ganglinie" eventKey="ganglinie" bsStyle="success">
            <div style={{ padding: "10px", paddingTop: 0 }}>
              <div
                style={{
                  height: 200,
                  border: "1px dashed #bbb",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#888",
                  padding: 20,
                }}
              >
                {texts.hinweise.zeitreihe}
              </div>
            </div>
          </Panel>
        </Accordion>

        {messgroesse && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="messgroesse">
            <Panel
              header={`Messgröße: ${phaenomen || HEADINGS[gruppe] || "Messwert"}`}
              eventKey="messgroesse"
              bsStyle="default"
            >
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <p>{messgroesse}</p>
              </div>
            </Panel>
          </Accordion>
        )}

        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="info">
          <Panel
            header="Allgemeine Informationen"
            eventKey="info"
            bsStyle="default"
          >
            <div
              style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
            >
              <b>Wupperverband</b>
              <p>{texts.allgemeineInformationen.wupperverband}</p>
              <b>Datenquelle</b>
              <p>{texts.allgemeineInformationen.datenquelle}</p>
              <b>Kontextualisierung</b>
              <p>{texts.allgemeineInformationen.kontext}</p>
            </div>
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
