import React, { useState, useEffect } from "react";
import type { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import sensorPmxTcrImage from "./sensor_pmx_tcr.png";
import texts from "./_data/fahrradzaehlerTexts";

const fmtCount = (v: unknown): string => {
  if (typeof v !== "number") return "–";
  return v.toLocaleString("de-DE");
};

const fmtSpeed = (v: unknown): string => {
  if (typeof v !== "number") return "–";
  return v.toFixed(1).replace(".", ",");
};

const HISTORICAL_BASE_URL = "https://tiles.cismet.de/fahrradzaehler_historical";

const SKIP_HISTORICAL_KEYS = new Set([
  "id",
  "type",
  "entityType",
  "name",
  "dateCreated",
  "dateObserved",
  "timeStamp",
  "location",
  "header",
  "intervalMeasureEnd",
]);

export interface HistoricalEntry {
  value: number | string;
  observedAt: string;
}

export type HistoricalData = Record<string, unknown> & {
  id?: string;
  type?: string;
};

/** Extract entries from the NGSI-LD temporal format:
 *  { type: "Property", values: [ [value, timestamp], ... ] }
 */
function getAttrValues(val: unknown): HistoricalEntry[] {
  const values = (val as { values?: unknown[] })?.values;
  if (!Array.isArray(values)) return [];
  return values
    .filter((e: unknown) => Array.isArray(e) && e.length >= 2)
    .map((e) => ({
      value: (e as unknown[])[0] as number | string,
      observedAt: (e as unknown[])[1] as string,
    }));
}

function getHistoricalUrl(entityId: string): string {
  return `${HISTORICAL_BASE_URL}/${entityId.replace(/:/g, "_")}.json`;
}

function historicalDataToCsv(data: HistoricalData): string {
  const attrs: string[] = [];
  const attrEntries = new Map<string, HistoricalEntry[]>();

  for (const [key, val] of Object.entries(data)) {
    if (SKIP_HISTORICAL_KEYS.has(key)) continue;
    const entries = getAttrValues(val);
    if (entries.length === 0) continue;
    attrs.push(key);
    attrEntries.set(key, entries);
  }
  attrs.sort();

  const tsRows = new Map<string, Map<string, number | string>>();
  for (const attr of attrs) {
    for (const entry of attrEntries.get(attr)!) {
      if (!tsRows.has(entry.observedAt))
        tsRows.set(entry.observedAt, new Map());
      tsRows.get(entry.observedAt)!.set(attr, entry.value);
    }
  }

  const sorted = [...tsRows.keys()].sort();
  const header = ["timestamp", ...attrs].join(";");
  const rows = sorted.map((ts) => {
    const row = tsRows.get(ts)!;
    const vals = attrs.map((a) => {
      const v = row.get(a);
      return v !== undefined && v !== null ? String(v) : "";
    });
    return [ts, ...vals].join(";");
  });

  return [header, ...rows].join("\n");
}

function triggerCsvDownload(csv: string, filename: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

interface SeriesConfig {
  attr: string;
  label: string;
}

interface ChartPanel {
  key: string;
  header: string;
  series: SeriesConfig;
  color: string;
}

const CHART_PANELS: ChartPanel[] = [
  {
    key: "leftCount",
    header: "Zählerstand Fahrtrichtung Links (Gesamt)",
    series: { attr: "leftCountClass0", label: "Zählerstand Links" },
    color: "#1f77b4",
  },
  {
    key: "rightCount",
    header: "Zählerstand Fahrtrichtung Rechts (Gesamt)",
    series: { attr: "rightCountClass0", label: "Zählerstand Rechts" },
    color: "#ff7f0e",
  },
  {
    key: "leftSpeed",
    header: "Durchschnittsgeschwindigkeit Links (km/h)",
    series: { attr: "leftSpeedAVRClass0", label: "Ø-Geschw. Links" },
    color: "#2ca02c",
  },
  {
    key: "rightSpeed",
    header: "Durchschnittsgeschwindigkeit Rechts (km/h)",
    series: { attr: "rightSpeedAVRClass0", label: "Ø-Geschw. Rechts" },
    color: "#d62728",
  },
];

function buildLineChartData(data: HistoricalData, panel: ChartPanel) {
  const entries = getAttrValues(data[panel.series.attr]);
  if (entries.length === 0) return null;

  const sorted = [...entries].sort((a, b) =>
    a.observedAt.localeCompare(b.observedAt),
  );
  const labels = sorted.map((e) =>
    new Date(e.observedAt).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
    }),
  );
  const values = sorted.map((e) =>
    typeof e.value === "number" ? e.value : null,
  );

  return {
    labels,
    datasets: [
      {
        label: panel.series.label,
        data: values,
        borderColor: panel.color,
        backgroundColor: panel.color,
        pointRadius: 0,
        borderWidth: 1.5,
        fill: false,
        tension: 0.1,
      },
    ],
  };
}

const lineChartOptions: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: {
      ticks: { maxTicksLimit: 8, font: { size: 10 } },
      grid: { display: false },
    },
    y: {
      ticks: { maxTicksLimit: 6 },
      beginAtZero: true,
    },
  },
};

const headerBg = "#616161";
const meteoBg = "#E0E0E0";

const renderCurrentValues = (sensor: Record<string, unknown>) => (
  <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontWeight: "bold",
        textAlign: "center",
        background: headerBg,
        color: "#fff",
      }}
    >
      <div
        style={{
          padding: "2px 6px",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        Zählerstand Links
      </div>
      <div style={{ padding: "2px 6px" }}>Zählerstand Rechts</div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
        paddingBottom: 10,
      }}
    >
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtCount(sensor.leftCountClass0)}
      </div>
      <div style={{ padding: "2px 6px" }}>
        {fmtCount(sensor.rightCountClass0)}
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontWeight: "bold",
        textAlign: "center",
        background: meteoBg,
        color: "#555",
      }}
    >
      <div
        style={{
          padding: "2px 6px",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        Ø-Geschw. Links
      </div>
      <div style={{ padding: "2px 6px" }}>Ø-Geschw. Rechts</div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
      }}
    >
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtSpeed(sensor.leftSpeedAVRClass0)}{" "}
        <span style={{ fontSize: 11, color: "#888" }}>km/h</span>
      </div>
      <div style={{ padding: "2px 6px" }}>
        {fmtSpeed(sensor.rightSpeedAVRClass0)}{" "}
        <span style={{ fontSize: 11, color: "#888" }}>km/h</span>
      </div>
    </div>
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

  const selectedFeature = feature as { properties?: Record<string, unknown> };
  const sensor = selectedFeature?.properties;
  const entityId = (sensor?.id as string) ?? "";

  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(
    null,
  );
  const [historyLoading, setHistoryLoading] = useState(false);

  useEffect(() => {
    if (!entityId) return;
    let cancelled = false;
    setHistoryLoading(true);
    fetch(getHistoricalUrl(entityId))
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => {
        if (!cancelled) setHistoricalData(data);
      })
      .catch(() => {
        if (!cancelled) setHistoricalData(null);
      })
      .finally(() => {
        if (!cancelled) setHistoryLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [entityId]);

  if (sensor === undefined) return null;

  const name = (sensor.name as string) ?? "";

  const dateObserved = sensor.dateObserved as string | undefined;
  const formattedDate = dateObserved
    ? new Date(dateObserved).toLocaleString("de-DE")
    : "–";

  const historicalDataPointCount = historicalData
    ? (() => {
        const ts = new Set<string>();
        for (const [key, val] of Object.entries(historicalData)) {
          if (SKIP_HISTORICAL_KEYS.has(key)) continue;
          for (const e of getAttrValues(val)) {
            ts.add(e.observedAt);
          }
        }
        return ts.size;
      })()
    : 0;

  const chartPanelData =
    historicalData && historicalDataPointCount > 0
      ? CHART_PANELS.map((p) => ({
          panel: p,
          data: buildLineChartData(historicalData, p),
        })).filter((entry) => entry.data !== null)
      : [];

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
          {" Datenblatt: PMX TCR Fahrrad- und Verkehrszählsensor"}
          {name && (
            <>
              <br />
              {name}
            </>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key="fahrradzaehler.secondaryInfo">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            paddingTop: 0,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: "55%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              {renderCurrentValues(sensor)}
              <div
                style={{
                  color: "#666",
                  fontSize: "90%",
                  marginTop: 16,
                  textAlign: "left",
                }}
              >
                Stand: {formattedDate}
              </div>
            </div>
          </div>
          <div
            style={{
              width: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt="Schematische Darstellung PMX TCR Zählsensor"
              src={sensorPmxTcrImage}
              style={{ height: 180, maxHeight: 180, width: "auto" }}
            />
          </div>
        </div>

        {chartPanelData.map((entry, idx) => (
          <Accordion
            key={entry.panel.key}
            style={{ marginBottom: 6 }}
            defaultActiveKey={String(idx)}
          >
            <Panel
              header={entry.panel.header}
              eventKey={String(idx)}
              bsStyle="success"
            >
              <div style={{ padding: "10px", paddingTop: 0 }}>
                <div style={{ height: 260, width: "100%" }}>
                  <Line
                    data={entry.data as NonNullable<typeof entry.data>}
                    options={lineChartOptions}
                  />
                </div>
              </div>
            </Panel>
          </Accordion>
        ))}

        {historyLoading && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="loading">
            <Panel header="Diagramme" eventKey="loading" bsStyle="success">
              <div
                style={{
                  fontSize: "115%",
                  padding: "10px",
                  paddingTop: "0px",
                }}
              >
                <p>Daten werden geladen…</p>
              </div>
            </Panel>
          </Accordion>
        )}

        {historicalDataPointCount > 0 && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="download">
            <Panel header="Datendownload" eventKey="download" bsStyle="warning">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  disabled={historyLoading}
                  onClick={() => {
                    if (!historicalData) return;
                    const csv = historicalDataToCsv(historicalData);
                    const filename = `${name.replace(/[^a-zA-Z0-9_-]/g, "_") || "fahrradzaehler"}.csv`;
                    triggerCsvDownload(csv, filename);
                  }}
                >
                  <i
                    className="glyphicon glyphicon-download"
                    style={{ marginRight: 6 }}
                  />
                  Messdaten herunterladen (CSV)
                </button>
                <span
                  style={{ marginLeft: 10, color: "#666", fontSize: "85%" }}
                >
                  ({historicalDataPointCount} Datenpunkte)
                </span>
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
              <b>Sensor und Messverfahren</b>
              <p>{texts.allgemeineInformationen.sensor}</p>
              <b>Historie</b>
              <p>{texts.allgemeineInformationen.historie}</p>
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
