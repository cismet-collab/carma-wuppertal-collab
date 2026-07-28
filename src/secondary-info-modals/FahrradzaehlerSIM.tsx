import React, { useState, useEffect, useMemo } from "react";
import type { ChartOptions } from "chart.js";
import "chart.js/auto";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import {
  ChartWithZoom,
  ZOOM_HINT,
  ZOOM_PLUGIN_OPTIONS,
} from "./helper/chartWithZoom";
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

/* -------------------------------------------------------------------------- */
/* Aggregation (cismet/wupp#4117)                                              */
/* -------------------------------------------------------------------------- */

// "interval" zeigt jeden Messpunkt, "day" fasst zu Tageswerten zusammen.
// Voreinstellung ist "day": in der Intervallansicht ist ein Wert von 0 fuer ein
// einzelnes Intervall zwar korrekt, wirkt neben einem Ausschlag im selben
// Diagramm aber widerspruechlich (#4117).
type Granularity = "day" | "interval";

interface SeriesConfig {
  attr: string;
  label: string;
}

interface ChartPanel {
  key: string;
  /** Ueberschrift ohne den Zusatz zur gewaehlten Aggregation. */
  header: string;
  series: SeriesConfig;
  color: string;
  /** "sum" fuer Zaehlungen, "weighted-mean" fuer Geschwindigkeiten. */
  aggregation: "sum" | "weighted-mean";
  /** Gewichtsreihe der Geschwindigkeit: die Zaehlung derselben Fahrtrichtung. */
  weightAttr?: string;
  unit: string;
  decimals: number;
}

const CHART_PANELS: ChartPanel[] = [
  {
    key: "leftCount",
    header: "Radfahrende Fahrtrichtung Ost",
    series: { attr: "leftCountClass0", label: "Radfahrende Ost" },
    color: "#1f77b4",
    aggregation: "sum",
    unit: "",
    decimals: 0,
  },
  {
    key: "rightCount",
    header: "Radfahrende Fahrtrichtung West",
    series: { attr: "rightCountClass0", label: "Radfahrende West" },
    color: "#ff7f0e",
    aggregation: "sum",
    unit: "",
    decimals: 0,
  },
  {
    key: "leftSpeed",
    header: "Durchschnittsgeschwindigkeit Ost",
    series: { attr: "leftSpeedAVRClass0", label: "Ø-Geschw. Ost" },
    color: "#2ca02c",
    aggregation: "weighted-mean",
    weightAttr: "leftCountClass0",
    unit: "km/h",
    decimals: 1,
  },
  {
    key: "rightSpeed",
    header: "Durchschnittsgeschwindigkeit West",
    series: { attr: "rightSpeedAVRClass0", label: "Ø-Geschw. West" },
    color: "#d62728",
    aggregation: "weighted-mean",
    weightAttr: "rightCountClass0",
    unit: "km/h",
    decimals: 1,
  },
];

const GRANULARITY_SUFFIX: Record<Granularity, string> = {
  day: "(Tagessumme)",
  interval: "(je Messintervall)",
};

// Die Geschwindigkeit ist keine Summe, dort passt der Zusatz anders.
const GRANULARITY_SUFFIX_MEAN: Record<Granularity, string> = {
  day: "(Tagesmittel)",
  interval: "(je Messintervall)",
};

interface ChartPoint {
  /** Beschriftung der x-Achse. */
  label: string;
  /**
   * Zeitpunkt fuer die Titelzeile des Tooltips, absichtlich unformatiert.
   * Formatiert wird erst im Tooltip, also nur fuer den Punkt unter der Maus.
   */
  time: number | null;
  /** Zusatz in der Wertzeile des Tooltips, z. B. "Intervall 30 Minuten". */
  note: string | null;
  /** null bedeutet: keine Daten. Wird als Luecke gezeichnet, nicht als 0. */
  value: number | null;
}

// Obergrenze fuer die Punkte, mit denen ein Ausfall aufgefuellt wird. Schuetzt
// davor, dass eine sehr lange Luecke das ganze Diagramm einnimmt.
const MAX_GAP_FILL = 400;

const pad2 = (n: number) => String(n).padStart(2, "0");

/** Tagesschluessel in Ortszeit - die Nutzer lesen deutsche Kalendertage. */
const dayKeyOf = (d: Date) =>
  `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

// Die Formatter werden einmal angelegt und wiederverwendet. Ueber
// toLocaleDateString mit Optionsobjekt kostet dieselbe Arbeit fuer die vier
// Diagramme rund 2,4 Sekunden statt 90 Millisekunden.
const dfDayShort = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
});
const dfDayLong = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const dfDateFull = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const dfTime = new Intl.DateTimeFormat("de-DE", {
  hour: "2-digit",
  minute: "2-digit",
});

const fmtDayLabel = (d: Date) => dfDayShort.format(d);
const fmtTimeLabel = (d: Date) => `${dfDayShort.format(d)} ${dfTime.format(d)}`;

/** Titelzeile des Tooltips, erst beim Hovern gebildet. */
function fmtPointTitle(time: number, granularity: Granularity): string {
  const d = new Date(time);
  return granularity === "day"
    ? dfDayLong.format(d)
    : `${dfDateFull.format(d)}, ${dfTime.format(d)} Uhr`;
}

function sortedNumericEntries(data: HistoricalData, attr: string) {
  return getAttrValues(data[attr])
    .filter((e) => typeof e.value === "number")
    .sort((a, b) => a.observedAt.localeCompare(b.observedAt)) as {
    value: number;
    observedAt: string;
  }[];
}

/**
 * Messpunkte einzeln. Zwischen zwei Punkten, die weiter auseinanderliegen als
 * das Uebliche, wird ein leerer Punkt eingeschoben, damit ein Ausfall als
 * Luecke sichtbar wird und nicht als durchgezogene Linie (#4117).
 */
function buildIntervalPoints(
  entries: { value: number; observedAt: string }[],
): ChartPoint[] {
  if (entries.length === 0) return [];

  const gapsMin = entries
    .slice(1)
    .map(
      (e, i) =>
        (new Date(e.observedAt).getTime() -
          new Date(entries[i].observedAt).getTime()) /
        60000,
    );
  const sortedGaps = [...gapsMin].sort((a, b) => a - b);
  const typicalGap = sortedGaps.length
    ? sortedGaps[Math.floor(sortedGaps.length / 2)]
    : 0;
  const gapThreshold = typicalGap > 0 ? typicalGap * 3 : Infinity;

  const points: ChartPoint[] = [];
  entries.forEach((e, i) => {
    const date = new Date(e.observedAt);
    const minutes = i === 0 ? null : gapsMin[i - 1];

    if (minutes !== null && minutes > gapThreshold) {
      // Die x-Achse ist eine Kategorieachse: ein einzelner leerer Punkt waere
      // genau so breit wie ein Messintervall, ein Ausfall von sieben Tagen
      // damit rund einen drittel Pixel breit und praktisch unsichtbar. Die
      // Luecke wird deshalb mit so vielen leeren Punkten aufgefuellt, wie im
      // ueblichen Takt hineingepasst haetten.
      const missing = Math.min(
        Math.max(Math.round(minutes / typicalGap) - 1, 1),
        MAX_GAP_FILL,
      );
      const gapStart = date.getTime() - minutes * 60000;
      for (let k = 1; k <= missing; k++) {
        points.push({
          // Beschriftet, damit die Achse im Ausfall die fehlenden Tage zeigt.
          label: fmtTimeLabel(new Date(gapStart + k * typicalGap * 60000)),
          time: null,
          note: null,
          value: null,
        });
      }
    }

    points.push({
      label: fmtTimeLabel(date),
      time: date.getTime(),
      note:
        minutes !== null && minutes <= gapThreshold
          ? `Intervall ${Math.round(minutes)} Minuten`
          : null,
      value: e.value,
    });
  });
  return points;
}

/**
 * Tageswerte. Kalendertage ohne einen einzigen Messpunkt bleiben null und
 * werden dadurch als Luecke gezeichnet - ein Ausfall ist kein Tag ohne
 * Radverkehr (#4117).
 */
function buildDayPoints(
  entries: { value: number; observedAt: string }[],
  panel: ChartPanel,
  weights: Map<string, number> | null,
): ChartPoint[] {
  if (entries.length === 0) return [];

  const byDay = new Map<string, { value: number; weight: number }[]>();
  for (const e of entries) {
    const key = dayKeyOf(new Date(e.observedAt));
    const weight = weights ? (weights.get(e.observedAt) ?? 0) : 1;
    const bucket = byDay.get(key);
    if (bucket) bucket.push({ value: e.value, weight });
    else byDay.set(key, [{ value: e.value, weight }]);
  }

  const first = new Date(entries[0].observedAt);
  const last = new Date(entries[entries.length - 1].observedAt);
  const cursor = new Date(first.getFullYear(), first.getMonth(), first.getDate());
  const end = new Date(last.getFullYear(), last.getMonth(), last.getDate());

  const points: ChartPoint[] = [];
  while (cursor <= end) {
    const key = dayKeyOf(cursor);
    const bucket = byDay.get(key);
    const label = fmtDayLabel(cursor);
    const title = cursor.getTime();

    if (!bucket) {
      // Kein einziger Messpunkt an diesem Tag: Luecke, kein Nullwert.
      points.push({ label, time: title, note: null, value: null });
    } else if (panel.aggregation === "sum") {
      points.push({
        label,
        time: title,
        note: `Tagessumme aus ${bucket.length} Messintervallen`,
        value: bucket.reduce((sum, b) => sum + b.value, 0),
      });
    } else {
      // Intervalle ohne Radverkehr melden 0 km/h. Das ist kein Messwert und
      // wuerde das Tagesmittel nach unten ziehen, deshalb zaehlen nur
      // Intervalle mit Verkehr, gewichtet nach ihrer Anzahl.
      const used = bucket.filter((b) => b.weight > 0);
      const total = used.reduce((sum, b) => sum + b.weight, 0);
      points.push({
        label,
        time: title,
        note: total > 0 ? `Tagesmittel aus ${total} Fahrten` : null,
        value:
          total > 0
            ? used.reduce((sum, b) => sum + b.value * b.weight, 0) / total
            : null,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return points;
}

function buildPoints(
  data: HistoricalData,
  panel: ChartPanel,
  granularity: Granularity,
): ChartPoint[] {
  const entries = sortedNumericEntries(data, panel.series.attr);
  if (entries.length === 0) return [];
  if (granularity === "interval") return buildIntervalPoints(entries);

  const weights =
    panel.aggregation === "weighted-mean" && panel.weightAttr
      ? new Map(
          sortedNumericEntries(data, panel.weightAttr).map((e) => [
            e.observedAt,
            e.value,
          ]),
        )
      : null;
  return buildDayPoints(entries, panel, weights);
}

function buildChartData(points: ChartPoint[], panel: ChartPanel, bars: boolean) {
  return {
    labels: points.map((p) => p.label),
    datasets: [
      {
        label: panel.series.label,
        data: points.map((p) => p.value),
        borderColor: panel.color,
        backgroundColor: panel.color,
        ...(bars
          ? { borderWidth: 0 }
          : {
              pointRadius: 0,
              borderWidth: 1.5,
              fill: false,
              tension: 0.1,
              // Luecken bleiben Luecken.
              spanGaps: false,
            }),
      },
    ],
  };
}

function buildChartOptions(
  points: ChartPoint[],
  panel: ChartPanel,
  granularity: Granularity,
): ChartOptions<"line" | "bar"> {
  const format = panel.decimals === 0 ? fmtCount : fmtSpeed;
  return {
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (items) => {
            const time = points[items[0]?.dataIndex]?.time;
            return typeof time === "number"
              ? fmtPointTitle(time, granularity)
              : "";
          },
          label: (item) => {
            const point = points[item.dataIndex];
            const value = format(item.parsed.y);
            const unit = panel.unit ? ` ${panel.unit}` : "";
            return point?.note
              ? `${value}${unit} (${point.note})`
              : `${value}${unit}`;
          },
        },
      },
      zoom: ZOOM_PLUGIN_OPTIONS,
    },
    scales: {
      x: {
        ticks: { maxTicksLimit: 8, font: { size: 10 }, autoSkip: true },
        grid: { display: false },
      },
      y: {
        ticks: { maxTicksLimit: 6 },
        beginAtZero: true,
      },
    },
  };
}

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
        Radfahrende Ost
      </div>
      <div style={{ padding: "2px 6px" }}>Radfahrende West</div>
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
        Ø-Geschw. Ost
      </div>
      <div style={{ padding: "2px 6px" }}>Ø-Geschw. West</div>
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
  const [granularity, setGranularity] = useState<Granularity>("day");

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

  const chartPanelData = useMemo(() => {
    if (!historicalData) return [];
    return CHART_PANELS.map((panel) => {
      const points = buildPoints(historicalData, panel, granularity);
      if (points.length === 0) return null;
      // Zaehlungen je Tag als Balken, alles andere als Linie.
      const bars = granularity === "day" && panel.aggregation === "sum";
      const suffix =
        panel.aggregation === "sum"
          ? GRANULARITY_SUFFIX[granularity]
          : GRANULARITY_SUFFIX_MEAN[granularity];
      return {
        panel,
        bars,
        header: `${panel.header} ${suffix}${panel.unit ? ` in ${panel.unit}` : ""}`,
        data: buildChartData(points, panel, bars),
        options: buildChartOptions(points, panel, granularity),
      };
    }).filter((entry): entry is NonNullable<typeof entry> => entry !== null);
  }, [historicalData, granularity]);

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
                Zuletzt übertragenes Messintervall: {formattedDate}
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

        {chartPanelData.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              padding: "0 10px 12px 10px",
            }}
          >
            <span style={{ fontSize: "90%", color: "#666" }}>Auflösung:</span>
            <div className="btn-group btn-group-sm" role="group">
              {(["day", "interval"] as Granularity[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`btn btn-sm ${
                    g === granularity ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setGranularity(g)}
                >
                  {g === "day" ? "Tag" : "Messintervall"}
                </button>
              ))}
            </div>
            <span style={{ fontSize: "85%", color: "#888" }}>{ZOOM_HINT}</span>
          </div>
        )}

        {chartPanelData.map((entry) => (
          <Accordion
            key={entry.panel.key}
            style={{ marginBottom: 6 }}
            defaultActiveKey={entry.panel.key}
          >
            <Panel
              header={entry.header}
              eventKey={entry.panel.key}
              bsStyle="success"
            >
              <div style={{ padding: "10px", paddingTop: 0 }}>
                <ChartWithZoom
                  // Ein Wechsel der Aufloesung soll den Zoom nicht mitnehmen.
                  key={`${entry.panel.key}-${granularity}`}
                  bars={entry.bars}
                  data={entry.data}
                  options={entry.options}
                />
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
