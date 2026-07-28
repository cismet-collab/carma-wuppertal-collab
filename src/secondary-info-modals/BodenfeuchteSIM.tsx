import React, { useState, useEffect, useMemo } from "react";
import type { ChartOptions } from "chart.js";
import "chart.js/auto";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import sensorWatermarkImage from "./sensor_watermark.png";
import sensorIoplantImage from "./sensor_ioplant.png";
import {
  getSensorType,
  getLocationKey,
  getStandortbeschreibung,
  getBodenkundeprotokoll,
  getAllgemeineInformationen,
  type Bodenkundeprotokoll,
  type SensorType,
} from "./bodenfeuchteContent";
import texts from "./_data/bodenfeuchteTexts";
import {
  ChartWithZoom,
  ZOOM_HINT,
  ZOOM_PLUGIN_OPTIONS,
} from "./helper/chartWithZoom";

const fmtValue = (v: unknown, unit: string): string => {
  if (typeof v !== "number" || v === 0) return "–";
  return v.toFixed(1).replace(".", ",") + "\u00A0" + unit;
};

const fmtResistance = (v: unknown): string => {
  if (typeof v !== "number" || v === 0) return "–";
  if (v >= 1_000_000)
    return (v / 1_000_000).toFixed(1).replace(".", ",") + "\u00A0MΩ";
  if (v >= 1_000)
    return (v / 1_000).toFixed(1).replace(".", ",") + "\u00A0kΩ";
  return v.toFixed(1).replace(".", ",") + "\u00A0Ω";
};

const thLeft: React.CSSProperties = {
  textAlign: "left",
  padding: "3px 8px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};
const thRight: React.CSSProperties = { ...thLeft, textAlign: "right" };
const tdLeft: React.CSSProperties = {
  padding: "3px 8px",
  whiteSpace: "nowrap",
};
const tdRight: React.CSSProperties = { ...tdLeft, textAlign: "right" };
const tblStyle: React.CSSProperties = {
  borderCollapse: "collapse",
  fontSize: "100%",
};

const renderIoplantMeasurements = (sensor: Record<string, unknown>) => {
  const rows = [
    { d: "30 cm", m: sensor.soilMoisture_Percent_1, t: sensor.temperatureAtDepth_1 },
    { d: "60 cm", m: sensor.soilMoisture_Percent_2, t: sensor.temperatureAtDepth_2 },
    { d: "90 cm", m: sensor.soilMoisture_Percent_3, t: sensor.temperatureAtDepth_3 },
  ];
  return (
    <table style={tblStyle}>
      <thead>
        <tr style={{ borderBottom: "1px solid #ccc" }}>
          <th style={thLeft}>Tiefe</th>
          <th style={thRight}>Feuchte</th>
          <th style={thRight}>Temperatur</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.d} style={{ borderBottom: "1px solid #eee" }}>
            <td style={tdLeft}>{r.d}</td>
            <td style={tdRight}>{fmtValue(r.m, "%")}</td>
            <td style={tdRight}>{fmtValue(r.t, "°C")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const renderWatermarkMeasurements = (sensor: Record<string, unknown>) => {
  const slots = [1, 2, 3, 4, 5, 6].map((i) => ({
    n: i,
    val: fmtResistance(sensor[`Widerstand_Steckplatz_${i}`]),
  }));
  const renderGroup = (group: typeof slots) => (
    <table style={tblStyle}>
      <thead>
        <tr style={{ borderBottom: "1px solid #ccc" }}>
          <th style={thLeft}>Kanal</th>
          <th style={thRight}>Widerstand</th>
        </tr>
      </thead>
      <tbody>
        {group.map((s) => (
          <tr key={s.n} style={{ borderBottom: "1px solid #eee" }}>
            <td style={tdLeft}>{s.n}</td>
            <td style={tdRight}>{s.val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {renderGroup(slots.slice(0, 3))}
      {renderGroup(slots.slice(3, 6))}
    </div>
  );
};

const renderMeasurements = (
  sensor: Record<string, unknown>,
  sensorType: SensorType,
) => {
  if (sensorType === "watermark") return renderWatermarkMeasurements(sensor);
  if (sensorType === "tree" || sensorType === "dike")
    return renderIoplantMeasurements(sensor);
  return null;
};

const HISTORICAL_BASE_URL =
  "https://tiles.cismet.de/bodenfeuchtesensoren_historical";

const SKIP_HISTORICAL_KEYS = new Set([
  "id",
  "type",
  "name",
  "dateCreated",
  "dateObserved",
  "timeStamp",
  "location",
  "ProtocolID",
]);

export interface HistoricalEntry {
  value: number | string;
  observedAt: string;
}

export type HistoricalData = Record<string, unknown> & {
  id?: string;
  type?: string;
};

/** Extract entries from the new NGSI-LD temporal format:
 *  { type: "Property", values: [ [value, timestamp], ... ] }
 */
function getAttrValues(val: unknown): HistoricalEntry[] {
  const values = (val as any)?.values;
  if (!Array.isArray(values)) return [];
  return values
    .filter((e: unknown) => Array.isArray(e) && e.length >= 2)
    .map((e: any) => ({ value: e[0], observedAt: e[1] }));
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

const CHART_COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
];

interface SeriesConfig {
  attr: string;
  label: string;
}

const IOPLANT_MOISTURE_SERIES: SeriesConfig[] = [
  { attr: "soilMoisture_Percent_1", label: "30 cm" },
  { attr: "soilMoisture_Percent_2", label: "60 cm" },
  { attr: "soilMoisture_Percent_3", label: "90 cm" },
];

const IOPLANT_TEMP_SERIES: SeriesConfig[] = [
  { attr: "temperatureAtDepth_1", label: "30 cm" },
  { attr: "temperatureAtDepth_2", label: "60 cm" },
  { attr: "temperatureAtDepth_3", label: "90 cm" },
];

const WATERMARK_SERIES: SeriesConfig[] = [
  { attr: "Widerstand_Steckplatz_1", label: "Kanal 1" },
  { attr: "Widerstand_Steckplatz_2", label: "Kanal 2" },
  { attr: "Widerstand_Steckplatz_3", label: "Kanal 3" },
  { attr: "Widerstand_Steckplatz_4", label: "Kanal 4" },
  { attr: "Widerstand_Steckplatz_5", label: "Kanal 5" },
  { attr: "Widerstand_Steckplatz_6", label: "Kanal 6" },
];

// Einmal angelegt und wiederverwendet. Ueber toLocaleDateString mit
// Optionsobjekt kostet dieselbe Beschriftung in einer Schleife ueber mehrere
// tausend Messpunkte ein Vielfaches.
const dfDayShort = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
});

function buildLineChartData(
  data: HistoricalData,
  series: SeriesConfig[],
) {
  // Collect all unique timestamps across all series and sort them
  const tsSet = new Set<string>();
  for (const s of series) {
    const entries = getAttrValues(data[s.attr]);
    for (const e of entries) {
      tsSet.add(e.observedAt);
    }
  }
  const timestamps = [...tsSet].sort();

  const labels = timestamps.map((ts) => dfDayShort.format(new Date(ts)));

  const datasets = series
    .map((s, i) => {
      const entries = getAttrValues(data[s.attr]);
      if (entries.length === 0) return null;
      const valByTs = new Map<string, number | null>();
      for (const e of entries) {
        valByTs.set(
          e.observedAt,
          typeof e.value === "number" ? e.value : null,
        );
      }
      return {
        label: s.label,
        data: timestamps.map((ts) => valByTs.get(ts) ?? null),
        borderColor: CHART_COLORS[i % CHART_COLORS.length],
        backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
        pointRadius: 0,
        borderWidth: 1.5,
        fill: false,
        tension: 0.1,
      };
    })
    .filter(Boolean);

  return { labels, datasets };
}

// Bewusst als "line" | "bar" typisiert: so passt das Objekt in ChartWithZoom,
// das beide Diagrammarten bedient.
const lineChartOptions: ChartOptions<"line" | "bar"> = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: { boxWidth: 12, padding: 8, font: { size: 11 } },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
    zoom: ZOOM_PLUGIN_OPTIONS,
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

interface FeatureType {
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

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

const SecondaryInfoModal = ({
  feature = {},
  setOpen = () => {},
  versionString = "???",
  Footer = genericSecondaryInfoFooterFactory({ skipTeilzwilling: true }),
}: {
  feature?: FeatureType;
  setOpen?: (open: boolean) => void;
  versionString?: string;
  Footer?: React.ComponentType<any>;
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

  const historicalDataPointCount = useMemo(() => {
    if (!historicalData) return 0;
    const ts = new Set<string>();
    for (const [key, val] of Object.entries(historicalData)) {
      if (SKIP_HISTORICAL_KEYS.has(key)) continue;
      for (const e of getAttrValues(val)) {
        ts.add(e.observedAt);
      }
    }
    return ts.size;
  }, [historicalData]);

  // Die Chartdaten entstehen einmal je Datensatz und nicht bei jedem Rerender.
  // Ein frisch gebautes Datenobjekt laesst react-chartjs-2 die Skalen neu
  // setzen, womit ein gerade gesetzter Zoom sofort wieder verloren waere.
  const charts = useMemo(() => {
    if (!historicalData || historicalDataPointCount === 0) return null;
    const type = getSensorType((sensor?.name as string) ?? "");
    if (type === "tree" || type === "dike") {
      return {
        moisture: buildLineChartData(historicalData, IOPLANT_MOISTURE_SERIES),
        temperature: buildLineChartData(historicalData, IOPLANT_TEMP_SERIES),
        resistance: null,
      };
    }
    if (type === "watermark") {
      return {
        moisture: null,
        temperature: null,
        resistance: buildLineChartData(historicalData, WATERMARK_SERIES),
      };
    }
    return null;
  }, [historicalData, historicalDataPointCount, sensor]);

  if (sensor === undefined) return null;

  const name = (sensor.name as string) ?? "";
  const sensorType = getSensorType(name);
  const locationKey = getLocationKey(name, sensorType);
  const standort = getStandortbeschreibung(locationKey, sensorType);
  const isIoplant = sensorType === "tree" || sensorType === "dike";
  const protokoll = isIoplant ? getBodenkundeprotokoll(locationKey) : null;
  const allgemeineInfo = getAllgemeineInformationen(sensorType);

  const dateObserved = sensor.dateObserved as string | undefined;
  const formattedDate = dateObserved
    ? new Date(dateObserved).toLocaleString("de-DE")
    : "–";

  const moistureData = charts?.moisture ?? null;
  const tempData = charts?.temperature ?? null;
  const resistanceData = charts?.resistance ?? null;

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
      <Modal.Body id="myMenu" key="bodenfeuchte.secondaryInfo">
        {/* Main section with measurements and image */}
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
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderMeasurements(sensor, sensorType)}
            <div style={{ color: "#666", fontSize: "90%", marginTop: 8 }}>
              Letzte Messung: {formattedDate}
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt="Schematische Darstellung Bodenfeuchtesensor"
              src={
                sensorType === "watermark"
                  ? sensorWatermarkImage
                  : sensorIoplantImage
              }
              style={{ height: 180, maxHeight: 180, width: "auto" }}
            />
          </div>
        </div>

        {/* 1. Standortbeschreibung */}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="0">
          <Panel header="Standortbeschreibung" eventKey="0" bsStyle="info">
            <div
              style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
            >
              <p>{standort.text}</p>
              {standort.bodentyp && (
                <p>
                  <b>Dominanter Bodentyp:</b> {standort.bodentyp}
                </p>
              )}
            </div>
          </Panel>
        </Accordion>

        {/* 2. Diagramme */}
        {(moistureData || tempData || resistanceData) && (
          <>
            <div
              style={{
                fontSize: "85%",
                color: "#888",
                padding: "0 10px 10px 10px",
              }}
            >
              {ZOOM_HINT}
            </div>
            {(sensorType === "tree" || sensorType === "dike") && moistureData && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey="1">
                <Panel header="Bodenfeuchte (%)" eventKey="1" bsStyle="success">
                  <div style={{ padding: "10px", paddingTop: 0 }}>
                    <ChartWithZoom
                      data={moistureData}
                      options={lineChartOptions}
                      height={300}
                    />
                  </div>
                </Panel>
              </Accordion>
            )}
            {(sensorType === "tree" || sensorType === "dike") && tempData && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey="2">
                <Panel header="Temperatur (°C)" eventKey="2" bsStyle="success">
                  <div style={{ padding: "10px", paddingTop: 0 }}>
                    <ChartWithZoom
                      data={tempData}
                      options={lineChartOptions}
                      height={300}
                    />
                  </div>
                </Panel>
              </Accordion>
            )}
            {sensorType === "watermark" && resistanceData && (
              <Accordion style={{ marginBottom: 6 }} defaultActiveKey="3">
                <Panel header="Widerstand (Ω)" eventKey="3" bsStyle="success">
                  <div style={{ padding: "10px", paddingTop: 0 }}>
                    <ChartWithZoom
                      data={resistanceData}
                      options={lineChartOptions}
                      height={300}
                    />
                  </div>
                </Panel>
              </Accordion>
            )}
          </>
        )}
        {historyLoading && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="1">
            <Panel header="Diagramm" eventKey="1" bsStyle="success">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <p>Daten werden geladen…</p>
              </div>
            </Panel>
          </Accordion>
        )}

        {/* 3. Datendownload */}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="4">
          <Panel header="Datendownload" eventKey="4" bsStyle="warning">
            <div
              style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
            >
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={historyLoading || historicalDataPointCount === 0}
                onClick={() => {
                  if (!historicalData) return;
                  const csv = historicalDataToCsv(historicalData);
                  const filename = `${name.replace(/[^a-zA-Z0-9_\-]/g, "_")}.csv`;
                  triggerCsvDownload(csv, filename);
                }}
              >
                <i
                  className="glyphicon glyphicon-download"
                  style={{ marginRight: 6 }}
                />
                {historyLoading
                  ? "Daten werden geladen…"
                  : "Messdaten herunterladen (CSV)"}
              </button>
              {!historyLoading && (
                <span style={{ marginLeft: 10, color: "#666", fontSize: "85%" }}>
                  ({historicalDataPointCount} Datenpunkte)
                </span>
              )}
            </div>
          </Panel>
        </Accordion>

        {/* 4. Bodenkundeprotokolle (ioplant only) */}
        {isIoplant && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="5">
            <Panel header="Bodenkundeprotokoll" eventKey="5" bsStyle="default">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                {protokoll ? (
                  renderProtokoll(protokoll)
                ) : (
                  <p>{texts.experimentalPlaceholder}</p>
                )}
              </div>
            </Panel>
          </Accordion>
        )}

        {/* 5. Allgemeine Informationen */}
        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="6">
          <Panel
            header="Allgemeine Informationen"
            eventKey="6"
            bsStyle="default"
          >
            <div
              style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
            >
              <b>Sensor und Messverfahren</b>
              <p>{allgemeineInfo.sensor}</p>
              {allgemeineInfo.kontext && (
                <>
                  <b>Kontextualisierung</b>
                  {renderKontextWithLink(allgemeineInfo.kontext)}
                </>
              )}
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
