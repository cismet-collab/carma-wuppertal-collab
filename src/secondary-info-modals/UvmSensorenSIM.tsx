import React, { useState, useEffect } from "react";
import type { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import sensorAqmeshImage from "./sensor_aqmesh.png";
import texts from "./_data/uvmSensorenTexts";

const fmtValue = (v: unknown, decimals: number, unit: string): string => {
  if (typeof v !== "number") return "–";
  return v.toFixed(decimals).replace(".", ",") + " " + unit;
};

const fmtHumidity = (v: unknown): string => {
  if (typeof v !== "number") return "–";
  return (v * 100).toFixed(1).replace(".", ",") + " %";
};

const HISTORICAL_BASE_URL = "https://tiles.cismet.de/uvm_historical";

const SKIP_HISTORICAL_KEYS = new Set([
  "id",
  "type",
  "entityType",
  "name",
  "dateCreated",
  "dateObserved",
  "timeStamp",
  "location",
  "carmaInfo",
]);

const SMART_WUPPERTAL_URL =
  "https://smart.wuppertal.de/strategie/strategieprozess.php";

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

const CHART_COLOR = "#1f77b4";

interface SeriesConfig {
  attr: string;
  label: string;
  /** multiplied onto raw values before plotting (e.g. fraction → percent). */
  scale?: number;
}

interface ChartPanel {
  key: string;
  header: string;
  series: SeriesConfig;
  unit: string;
}

const CHART_PANELS: ChartPanel[] = [
  {
    key: "no2",
    header: "Stickstoffdioxid NO₂ (µg/m³)",
    series: { attr: "no2", label: "NO₂" },
    unit: "µg/m³",
  },
  {
    key: "no",
    header: "Stickstoffmonoxid NO (µg/m³)",
    series: { attr: "no", label: "NO" },
    unit: "µg/m³",
  },
  {
    key: "o3",
    header: "Ozon O₃ (µg/m³)",
    series: { attr: "o3", label: "O₃" },
    unit: "µg/m³",
  },
  {
    key: "pressure",
    header: "Luftdruck (hPa)",
    series: { attr: "pressure", label: "Druck" },
    unit: "hPa",
  },
  {
    key: "humidity",
    header: "Luftfeuchtigkeit (%)",
    series: { attr: "relativeHumidity", label: "Feuchte", scale: 100 },
    unit: "%",
  },
  {
    key: "temperature",
    header: "Temperatur (°C)",
    series: { attr: "temperature", label: "Temperatur" },
    unit: "°C",
  },
];

function buildLineChartData(data: HistoricalData, series: SeriesConfig) {
  const entries = getAttrValues(data[series.attr]);
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
  const scale = series.scale ?? 1;
  const values = sorted.map((e) =>
    typeof e.value === "number" ? e.value * scale : null,
  );

  return {
    labels,
    datasets: [
      {
        label: series.label,
        data: values,
        borderColor: CHART_COLOR,
        backgroundColor: CHART_COLOR,
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
      beginAtZero: false,
    },
  },
};

const headerBg = "#00acc1";
const meteoBg = "#b2ebf2";

const renderCurrentValues = (sensor: Record<string, unknown>) => (
  <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#333" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
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
        NO
      </div>
      <div
        style={{
          padding: "2px 6px",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        NO₂
      </div>
      <div style={{ padding: "2px 6px" }}>O₃</div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        textAlign: "center",
        paddingBottom: 10,
      }}
    >
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtValue(sensor.no, 1, "µg/m³")}
      </div>
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtValue(sensor.no2, 1, "µg/m³")}
      </div>
      <div style={{ padding: "2px 6px" }}>
        {fmtValue(sensor.o3, 1, "µg/m³")}
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
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
        Temperatur
      </div>
      <div
        style={{
          padding: "2px 6px",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        Feuchte
      </div>
      <div style={{ padding: "2px 6px" }}>Druck</div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        textAlign: "center",
      }}
    >
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtValue(sensor.temperature, 1, "°C")}
      </div>
      <div style={{ padding: "2px 6px", borderRight: "1px solid #ccc" }}>
        {fmtHumidity(sensor.relativeHumidity)}
      </div>
      <div style={{ padding: "2px 6px" }}>
        {fmtValue(sensor.pressure, 1, "hPa")}
      </div>
    </div>
  </div>
);

interface FeatureType {
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

const getStationNumber = (id: string): string => {
  const match = id.match(/_(\d+)$/);
  return match ? match[1] : "";
};

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

  const stationNr = getStationNumber(entityId);
  const title = stationNr
    ? `AQMesh Luftqualitätssensor ${stationNr}`
    : "AQMesh Luftqualitätssensor";

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
          data: buildLineChartData(historicalData, p.series),
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
          {` Datenblatt: ${title}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="myMenu" key="uvmSensoren.secondaryInfo">
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
            {renderCurrentValues(sensor)}
            <div style={{ color: "#666", fontSize: "90%", marginTop: 8 }}>
              Stand: {formattedDate}
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
              alt="Schematische Darstellung AQMesh Luftqualitätssensor"
              src={sensorAqmeshImage}
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
                    const filename = `AQMesh_${stationNr || "sensor"}.csv`;
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
              <b>Kontextualisierung</b>
              <p>
                {(() => {
                  const label = "smart.wuppertal";
                  const kontext = texts.allgemeineInformationen.kontext;
                  const idx = kontext.indexOf(label);
                  if (idx === -1) return kontext;
                  return (
                    <>
                      {kontext.substring(0, idx)}
                      <a
                        href={SMART_WUPPERTAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                      {kontext.substring(idx + label.length)}
                    </>
                  );
                })()}
              </p>
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
