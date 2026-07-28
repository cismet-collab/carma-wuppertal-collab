import React, { useEffect, useMemo, useState } from "react";
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
import sensorKlimastationImage from "./sensor_klimastation.png";
import texts from "./_data/klimastationTexts";

// Archivdaten der Schwesterebene klimastation_historical. Pro Aufloesung eine
// Datei, erzeugt aus der API von klima.rgeo.de (die selbst kein CORS erlaubt).
const HISTORICAL_BASE_URL = "https://tiles.cismet.de/klimastation_historical";

type Resolution = "day" | "hour";

const historicalUrl = (stationId: number, resolution: Resolution): string =>
  `${HISTORICAL_BASE_URL}/klimastation_${stationId}_${resolution}.json`;

/** Eine Sensorreihe im Archivdokument. */
interface HistoricalSensor {
  id: number;
  name: string;
  label: string;
  unit: string | null;
  /** "mean" | "sum" | "mean-scalar-invalid" - steuert Aggregation und Anzeige. */
  aggregation: string;
  /** true bei zirkulaeren Groessen (Windrichtung), deren Mittelwerte unbrauchbar sind. */
  circular?: boolean;
  note?: string;
  values: (number | null)[];
}

interface HistoricalDoc {
  station?: { id?: number; title?: string; url?: string };
  resolution: string;
  from: string | null;
  to: string | null;
  pointCount: number;
  time: string[];
  sensors: Record<string, HistoricalSensor>;
}

interface CurrentSensor {
  name: string;
  label: string;
  unit: string | null;
  value: number | string | null;
}

/* -------------------------------------------------------------------------- */
/* Zeitstempel                                                                 */
/* -------------------------------------------------------------------------- */

// Die Zeitstempel der Station tragen keine Zeitzone und sind deutsche Ortszeit.
// Sie werden deshalb als Zeichenkette zerlegt und nicht ueber Date geparst -
// das wuerde sie in die Zeitzone des Browsers verschieben.
function splitTimestamp(ts: string): {
  year: string;
  month: string;
  day: string;
  time: string | null;
} {
  const [datePart, timePart] = String(ts).split("T");
  const [year = "", month = "", day = ""] = datePart.split("-");
  return { year, month, day, time: timePart ? timePart.slice(0, 5) : null };
}

/** Kurzform fuer die Achsenbeschriftung: "10.03.22" bzw. "10.03. 01:00". */
function fmtTimestampShort(ts: string): string {
  const { year, month, day, time } = splitTimestamp(ts);
  return time ? `${day}.${month}. ${time}` : `${day}.${month}.${year.slice(2)}`;
}

/** Langform fuer Tooltip und "Stand": "10.03.2022 01:00". */
function fmtTimestampFull(ts: string): string {
  const { year, month, day, time } = splitTimestamp(ts);
  return time ? `${day}.${month}.${year} ${time}` : `${day}.${month}.${year}`;
}

/* -------------------------------------------------------------------------- */
/* Zahlen                                                                      */
/* -------------------------------------------------------------------------- */

const fmtNumber = (v: unknown, decimals: number): string => {
  // 0 ist ein gueltiger Messwert (z. B. 0 mm Niederschlag).
  if (typeof v === "number" && isFinite(v))
    return v.toFixed(decimals).replace(".", ",");
  // Die Windrichtung liefert einen fertigen String ("340° NNW").
  if (typeof v === "string" && v.trim() !== "") return v;
  return "–";
};

const round = (v: number, decimals: number): number => {
  const f = Math.pow(10, decimals);
  return Math.round(v * f) / f;
};

/* -------------------------------------------------------------------------- */
/* Diagramme                                                                   */
/* -------------------------------------------------------------------------- */

interface ChartPanelConfig {
  attr: string;
  /** Fallback, falls die Archivdatei keine Einheit mitliefert. */
  unit: string;
  decimals: number;
  color: string;
  beginAtZero: boolean;
}

// Reihenfolge und Auswahl wie in der Tabelle von #4126.
const CHART_PANELS: ChartPanelConfig[] = [
  {
    attr: "Luft_Temperatur",
    unit: "°C",
    decimals: 1,
    color: "#d62728",
    beginAtZero: false,
  },
  {
    attr: "Luft_Feuchte",
    unit: "%",
    decimals: 1,
    color: "#17becf",
    beginAtZero: false,
  },
  {
    attr: "Niederschlag_Menge",
    unit: "mm",
    decimals: 1,
    color: "#1f77b4",
    beginAtZero: true,
  },
  {
    attr: "Wind_Geschwindigkeit",
    unit: "m/s",
    decimals: 1,
    color: "#2ca02c",
    beginAtZero: true,
  },
  {
    attr: "Wind_Richtung",
    unit: "°",
    decimals: 0,
    color: "#8c564b",
    beginAtZero: true,
  },
  {
    attr: "Luft_Druck",
    unit: "hPa",
    decimals: 0,
    color: "#9467bd",
    beginAtZero: false,
  },
  {
    attr: "Strahlung_Global",
    unit: "W/m²",
    decimals: 1,
    color: "#ff7f0e",
    beginAtZero: true,
  },
  {
    attr: "Oberflaeche_Temperatur_1",
    unit: "°C",
    decimals: 1,
    color: "#e377c2",
    beginAtZero: false,
  },
  {
    attr: "Boden_Temperatur_20cm",
    unit: "°C",
    decimals: 1,
    color: "#866352",
    beginAtZero: false,
  },
];

interface RangeOption {
  key: string;
  label: string;
  /** null = gesamter Messzeitraum. */
  days: number | null;
}

const RANGES: RangeOption[] = [
  { key: "30d", label: "30 Tage", days: 30 },
  { key: "12m", label: "12 Monate", days: 365 },
  { key: "all", label: "Gesamt", days: null },
];

const RESOLUTIONS: { key: Resolution; label: string; noun: string }[] = [
  { key: "day", label: "Tag", noun: "Tageswerte" },
  { key: "hour", label: "Stunde", noun: "Stundenwerte" },
];

// Mehr Punkte bringen im Diagramm keine zusaetzliche Information, machen es aber
// spuerbar traege. Darueber hinaus wird zu Buckets zusammengefasst.
const MAX_POINTS = 2000;

/** Buckets bilden: Mittelwerte mitteln, Summenreihen (Niederschlag) summieren. */
function reduceSeries(
  values: (number | null)[],
  bucketSize: number,
  mode: "mean" | "sum",
  decimals: number,
): (number | null)[] {
  if (bucketSize <= 1) return values;
  const out: (number | null)[] = [];
  for (let i = 0; i < values.length; i += bucketSize) {
    const nums = values
      .slice(i, i + bucketSize)
      .filter((v): v is number => typeof v === "number");
    if (nums.length === 0) {
      out.push(null);
      continue;
    }
    const sum = nums.reduce((a, b) => a + b, 0);
    out.push(round(mode === "sum" ? sum : sum / nums.length, decimals));
  }
  return out;
}

interface SeriesStats {
  min: number;
  max: number;
  avg: number;
  sum: number;
  count: number;
}

function statsOf(values: (number | null)[]): SeriesStats | null {
  const nums = values.filter((v): v is number => typeof v === "number");
  if (nums.length === 0) return null;
  const sum = nums.reduce((a, b) => a + b, 0);
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
    avg: sum / nums.length,
    sum,
    count: nums.length,
  };
}

function chartOptions(
  fullLabels: string[],
  unit: string,
  decimals: number,
  beginAtZero: boolean,
): ChartOptions<"line" | "bar"> {
  return {
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (items) => fullLabels[items[0]?.dataIndex] ?? "",
          label: (item) =>
            `${fmtNumber(item.parsed.y, decimals)}${unit ? " " + unit : ""}`,
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
        beginAtZero,
      },
    },
  };
}

/* -------------------------------------------------------------------------- */
/* CSV                                                                         */
/* -------------------------------------------------------------------------- */

function historicalDocToCsv(doc: HistoricalDoc): string {
  const names = Object.keys(doc.sensors);
  const header = [
    "Zeitstempel",
    ...names.map((n) => {
      const s = doc.sensors[n];
      return s.unit ? `${s.label} [${s.unit}]` : s.label;
    }),
  ].join(";");
  const rows = doc.time.map((ts, i) =>
    [
      ts,
      ...names.map((n) => {
        const v = doc.sensors[n].values[i];
        return typeof v === "number" ? String(v) : "";
      }),
    ].join(";"),
  );
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
/* Aktuelle Messwerte                                                          */
/* -------------------------------------------------------------------------- */

// Die neun Messgroessen aus der Tabelle in #4126, in dieser Reihenfolge.
const CURRENT_ROWS: { attr: string; decimals: number; unit: string }[] = [
  { attr: "Luft_Temperatur", decimals: 1, unit: "°C" },
  { attr: "Luft_Feuchte", decimals: 1, unit: "%" },
  { attr: "Niederschlag_Menge", decimals: 1, unit: "mm" },
  { attr: "Wind_Geschwindigkeit", decimals: 1, unit: "m/s" },
  { attr: "Wind_Richtung", decimals: 0, unit: "°" },
  { attr: "Luft_Druck", decimals: 0, unit: "hPa" },
  { attr: "Strahlung_Global", decimals: 1, unit: "W/m²" },
  { attr: "Oberflaeche_Temperatur_1", decimals: 1, unit: "°C" },
  { attr: "Boden_Temperatur_20cm", decimals: 1, unit: "°C" },
];

const FALLBACK_LABELS: Record<string, string> = {
  Luft_Temperatur: "Lufttemperatur",
  Luft_Feuchte: "Luftfeuchte",
  Niederschlag_Menge: "Niederschlag",
  Wind_Geschwindigkeit: "Windgeschwindigkeit",
  Wind_Richtung: "Windrichtung",
  Luft_Druck: "Luftdruck",
  Strahlung_Global: "Globalstrahlung",
  Oberflaeche_Temperatur_1: "Oberflächentemperatur (Boden)",
  Boden_Temperatur_20cm: "Bodentemperatur (20 cm)",
};

const headerBg = "#0277BD";

/* -------------------------------------------------------------------------- */
/* Illustration                                                                */
/* -------------------------------------------------------------------------- */

// Der Mast in sensor_klimastation.png ist ein hochformatiges Motiv auf einer
// querformatigen Flaeche (1536 x 1024) und steht dabei links der Bildmitte.
// Ungeschnitten waere die Station in der schmalen Spalte winzig, deshalb wird
// das Bild in einen Rahmen gelegt und um den Versatz zwischen Motiv- und
// Bildmitte verschoben. Die Werte stammen aus der Alphamaske der Datei
// (deckende Pixel: x 398 bis 937, y 35 bis 1010).
const ILLU_SOURCE_WIDTH = 1536;
const ILLU_SOURCE_HEIGHT = 1024;
const ILLU_SUBJECT_LEFT = 398;
const ILLU_SUBJECT_RIGHT = 937;
const ILLU_HEIGHT = 240;

const illuScale = ILLU_HEIGHT / ILLU_SOURCE_HEIGHT;
// Positiver Wert = Bild nach rechts schieben, damit das Motiv mittig steht.
const illuOffset =
  (ILLU_SOURCE_WIDTH / 2 - (ILLU_SUBJECT_LEFT + ILLU_SUBJECT_RIGHT) / 2) *
  illuScale;
// Motivbreite plus etwas Luft an beiden Seiten.
const illuWidth =
  Math.round((ILLU_SUBJECT_RIGHT - ILLU_SUBJECT_LEFT) * illuScale) + 24;

/**
 * Sensorliste des Features. Bevorzugt wird das verschachtelte Array, ersatzweise
 * greifen die flachen Properties (<name>, <name>__unit), die der Erzeuger
 * zusaetzlich ablegt.
 */
function currentSensorOf(
  props: Record<string, unknown>,
  attr: string,
): CurrentSensor {
  const list = Array.isArray(props.sensors)
    ? (props.sensors as CurrentSensor[])
    : [];
  const found = list.find((s) => s?.name === attr);
  if (found) return found;
  return {
    name: attr,
    label: FALLBACK_LABELS[attr] ?? attr,
    unit: (props[`${attr}__unit`] as string) ?? null,
    value: (props[attr] as number | string) ?? null,
  };
}

const renderCurrentValues = (props: Record<string, unknown>) => (
  <table
    style={{
      borderCollapse: "collapse",
      fontSize: 13,
      color: "#333",
      width: "100%",
    }}
  >
    <thead>
      <tr style={{ background: headerBg, color: "#fff" }}>
        <th style={{ textAlign: "left", padding: "3px 8px", fontWeight: 600 }}>
          Messgröße
        </th>
        <th style={{ textAlign: "right", padding: "3px 8px", fontWeight: 600 }}>
          Aktueller Wert
        </th>
      </tr>
    </thead>
    <tbody>
      {CURRENT_ROWS.map((row) => {
        const sensor = currentSensorOf(props, row.attr);
        const unit = sensor.unit ?? row.unit;
        // Bei der Windrichtung steckt das Gradzeichen bereits im Wert.
        const showUnit =
          unit && row.attr !== "Wind_Richtung" && sensor.value !== null;
        return (
          <tr key={row.attr} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "3px 8px", whiteSpace: "nowrap" }}>
              {sensor.label || FALLBACK_LABELS[row.attr] || row.attr}
            </td>
            <td
              style={{
                padding: "3px 8px",
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              {fmtNumber(sensor.value, row.decimals)}
              {showUnit && (
                <span style={{ fontSize: 11, color: "#888" }}>
                  {" " + unit}
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

/* -------------------------------------------------------------------------- */
/* Bedienelemente                                                              */
/* -------------------------------------------------------------------------- */

const ChoiceGroup = <T extends string>({
  label,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string;
  options: { key: T; label: string }[];
  value: T;
  onChange: (key: T) => void;
  disabled?: boolean;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
    <span style={{ fontSize: "90%", color: "#666" }}>{label}</span>
    <div className="btn-group btn-group-sm" role="group">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className={`btn btn-sm ${
            o.key === value ? "btn-primary" : "btn-outline-secondary"
          }`}
          disabled={disabled}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* Modal                                                                       */
/* -------------------------------------------------------------------------- */

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
  const station = selectedFeature?.properties;
  const stationId =
    typeof station?.stationId === "number" ? station.stationId : null;

  const [resolution, setResolution] = useState<Resolution>("day");
  const [rangeKey, setRangeKey] = useState<string>("all");
  const [docs, setDocs] = useState<Record<string, HistoricalDoc>>({});
  const [loading, setLoading] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (stationId === null || docs[resolution]) return;
    let cancelled = false;
    setLoading(true);
    setLoadFailed(false);
    fetch(historicalUrl(stationId, resolution))
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((doc: HistoricalDoc) => {
        if (!cancelled) setDocs((prev) => ({ ...prev, [resolution]: doc }));
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [stationId, resolution, docs]);

  const doc = docs[resolution];

  // Ausschnitt der Zeitachse und Bucketgroesse fuer die gewaehlte Kombination
  // aus Aufloesung und Zeitraum.
  const slice = useMemo(() => {
    if (!doc || !Array.isArray(doc.time) || doc.time.length === 0) return null;
    const range = RANGES.find((r) => r.key === rangeKey) ?? RANGES[RANGES.length - 1];
    // Ueber die Anzahl der Punkte statt ueber Datumsarithmetik schneiden - die
    // Zeitstempel sind Ortszeit ohne Zeitzone (siehe splitTimestamp).
    const perDay = resolution === "hour" ? 24 : 1;
    const total = doc.time.length;
    const count =
      range.days === null ? total : Math.min(total, range.days * perDay);
    const start = total - count;
    const bucketSize = Math.max(1, Math.ceil(count / MAX_POINTS));
    const times = doc.time.slice(start);
    const labelTimes =
      bucketSize === 1 ? times : times.filter((_, i) => i % bucketSize === 0);
    return {
      start,
      count,
      bucketSize,
      labels: labelTimes.map(fmtTimestampShort),
      fullLabels: labelTimes.map(fmtTimestampFull),
      from: times[0] ?? null,
      to: times[times.length - 1] ?? null,
    };
  }, [doc, rangeKey, resolution]);

  const charts = useMemo(() => {
    if (!doc || !slice) return [];
    return CHART_PANELS.map((panel) => {
      const sensor = doc.sensors?.[panel.attr];
      if (!sensor || !Array.isArray(sensor.values)) return null;
      const raw = sensor.values.slice(slice.start);
      if (!raw.some((v) => typeof v === "number")) return null;
      const isSum = sensor.aggregation === "sum";
      const values = reduceSeries(
        raw,
        slice.bucketSize,
        isSum ? "sum" : "mean",
        panel.decimals,
      );
      const unit = sensor.unit ?? panel.unit;
      // Zirkulaere Groessen (Windrichtung): die aggregierten Werte sind
      // rechnerisch falsch, statt eines Verlaufs steht dort der Hinweis.
      const isCircular = sensor.circular === true;
      return {
        panel,
        sensor,
        isSum,
        isCircular,
        // Statistik bewusst aus den ungebuendelten Werten - Buckets wuerden
        // Minimum und Maximum abschleifen.
        stats: statsOf(raw),
        unit,
        // Daten und Optionen entstehen hier und nicht im Render: ein bei jedem
        // Rerender neu gebautes Optionsobjekt laesst react-chartjs-2 die Skalen
        // neu setzen und der gesetzte Zoom waere sofort wieder weg.
        data: isCircular
          ? null
          : {
              labels: slice.labels,
              datasets: [
                {
                  label: sensor.label,
                  data: values,
                  borderColor: panel.color,
                  backgroundColor: panel.color,
                  // Summenreihen werden als Balken gezeichnet, alles andere als
                  // Linie - die Linienoptionen gelten nur dort.
                  ...(isSum
                    ? { borderWidth: 0 }
                    : {
                        pointRadius: 0,
                        borderWidth: 1.5,
                        fill: false,
                        tension: 0.1,
                      }),
                },
              ],
            },
        options: isCircular
          ? null
          : chartOptions(
              slice.fullLabels,
              unit,
              panel.decimals,
              panel.beginAtZero,
            ),
      };
    }).filter((c): c is NonNullable<typeof c> => c !== null);
  }, [doc, slice]);

  if (station === undefined) return null;

  const name = (station.name as string) ?? "Klimastation Wuppertal";
  const stationUrl = station.url as string | undefined;
  const altitude = station.altitude as number | undefined;
  const coordinates = (selectedFeature as { geometry?: { coordinates?: number[] } })
    ?.geometry?.coordinates;
  const dateObserved = station.dateObserved as string | undefined;
  const lastReadingInMinutes = station.lastReadingInMinutes as number | undefined;
  // Live = juengste Messung nicht aelter als 24 h. Der Minutenwert der API ist
  // zeitzonenfest, der Zeitstempel nicht.
  const isLive =
    typeof lastReadingInMinutes === "number" && lastReadingInMinutes < 24 * 60;

  const resolutionEntry = RESOLUTIONS.find((r) => r.key === resolution);
  const resolutionNoun = resolutionEntry?.noun ?? "Messwerte";
  const resolutionLabel = resolutionEntry?.label ?? "Zeitschritt";

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
      <Modal.Body id="myMenu" key="klimastation.secondaryInfo">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            paddingTop: 0,
            marginBottom: 10,
          }}
        >
          <div style={{ width: "66%" }}>
            {renderCurrentValues(station)}
            <div
              style={{
                color: "#666",
                fontSize: "90%",
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>
                Stand: {dateObserved ? fmtTimestampFull(dateObserved) : "–"}
              </span>
              {isLive && (
                <span
                  style={{
                    background: "#ff1a1a",
                    color: "white",
                    padding: "0px 4px",
                    borderRadius: 2,
                    fontSize: 9,
                    fontWeight: "bold",
                  }}
                >
                  LIVE
                </span>
              )}
            </div>
          </div>
          <div
            style={{
              width: "34%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                position: "relative",
                height: ILLU_HEIGHT,
                width: illuWidth,
                overflow: "hidden",
              }}
            >
              <img
                alt="Schematische Darstellung der Klimastation"
                src={sensorKlimastationImage}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  height: ILLU_HEIGHT,
                  width: "auto",
                  maxWidth: "none",
                  transform: `translateX(calc(-50% + ${illuOffset}px))`,
                }}
              />
            </div>
            <div
              style={{
                fontSize: "85%",
                color: "#666",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              {Array.isArray(coordinates) && coordinates.length >= 2 && (
                <div>
                  {fmtNumber(coordinates[1], 2)}°N, {fmtNumber(coordinates[0], 2)}
                  °O
                </div>
              )}
              {typeof altitude === "number" && (
                <div>{fmtNumber(altitude, 0)} m ü. NN</div>
              )}
            </div>
          </div>
        </div>

        {/* Bedienelemente fuer die Archivdiagramme */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            padding: "0 10px 12px 10px",
          }}
        >
          <ChoiceGroup
            label="Zeitraum:"
            options={RANGES.map((r) => ({ key: r.key, label: r.label }))}
            value={rangeKey}
            onChange={setRangeKey}
            disabled={loading}
          />
          <ChoiceGroup<Resolution>
            label="Auflösung:"
            options={RESOLUTIONS.map((r) => ({ key: r.key, label: r.label }))}
            value={resolution}
            onChange={setResolution}
            disabled={loading}
          />
          {slice && (
            <span style={{ fontSize: "85%", color: "#888" }}>
              {slice.from && slice.to
                ? `${fmtTimestampFull(slice.from)} bis ${fmtTimestampFull(slice.to)}`
                : ""}
              {slice.bucketSize > 1 &&
                ` · je Punkt ${slice.bucketSize} ${resolutionNoun}`}
            </span>
          )}
          {charts.length > 0 && (
            <span
              style={{ fontSize: "85%", color: "#888", flexBasis: "100%" }}
            >
              {ZOOM_HINT}
            </span>
          )}
        </div>

        {loading && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="loading">
            <Panel header="Diagramme" eventKey="loading" bsStyle="success">
              <div style={{ fontSize: "115%", padding: 10, paddingTop: 0 }}>
                <p>Messreihen werden geladen…</p>
              </div>
            </Panel>
          </Accordion>
        )}

        {!loading && loadFailed && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="failed">
            <Panel header="Diagramme" eventKey="failed" bsStyle="danger">
              <div style={{ fontSize: "115%", padding: 10, paddingTop: 0 }}>
                <p>
                  Die Messreihen konnten nicht geladen werden. Die aktuellen
                  Messwerte oben sind davon nicht betroffen.
                </p>
              </div>
            </Panel>
          </Accordion>
        )}

        {charts.map((chart) => {
          const { panel, sensor, stats, unit, isSum, isCircular } = chart;
          const header = `${sensor.label ?? FALLBACK_LABELS[panel.attr]}${
            unit ? ` (${unit})` : ""
          }`;
          // Zirkulaere Groessen (Windrichtung): die aggregierten Werte sind
          // rechnerisch falsch, deshalb kein Verlauf, sondern der Hinweis.
          if (isCircular || !chart.data || !chart.options) {
            return (
              <Accordion
                key={panel.attr}
                style={{ marginBottom: 6 }}
                defaultActiveKey={panel.attr}
              >
                <Panel header={header} eventKey={panel.attr} bsStyle="warning">
                  <div style={{ padding: 10, paddingTop: 0 }}>
                    <p style={{ marginBottom: 0 }}>
                      {texts.hinweise.windrichtung}
                    </p>
                  </div>
                </Panel>
              </Accordion>
            );
          }

          return (
            <Accordion
              key={panel.attr}
              style={{ marginBottom: 6 }}
              defaultActiveKey={panel.attr}
            >
              <Panel header={header} eventKey={panel.attr} bsStyle="success">
                <div style={{ padding: 10, paddingTop: 0 }}>
                  <ChartWithZoom
                    // Ein Wechsel von Zeitraum oder Aufloesung soll den Zoom
                    // nicht mitnehmen.
                    key={`${panel.attr}-${resolution}-${rangeKey}`}
                    bars={isSum}
                    data={chart.data}
                    options={chart.options}
                    height={240}
                  />
                  {stats && (
                    <div
                      style={{ fontSize: "85%", color: "#666", marginTop: 6 }}
                    >
                      {isSum ? (
                        <>
                          Summe {fmtNumber(stats.sum, panel.decimals)} {unit} ·
                          Maximum je {resolutionLabel}{" "}
                          {fmtNumber(stats.max, panel.decimals)} {unit}
                        </>
                      ) : (
                        <>
                          Minimum {fmtNumber(stats.min, panel.decimals)} {unit} ·
                          Mittel {fmtNumber(stats.avg, panel.decimals)} {unit} ·
                          Maximum {fmtNumber(stats.max, panel.decimals)} {unit}
                        </>
                      )}
                    </div>
                  )}
                  {isSum && (
                    <div
                      style={{ fontSize: "85%", color: "#666", marginTop: 4 }}
                    >
                      {texts.hinweise.niederschlag}
                    </div>
                  )}
                </div>
              </Panel>
            </Accordion>
          );
        })}

        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="download">
          <Panel header="Datendownload" eventKey="download" bsStyle="warning">
            <div style={{ fontSize: "115%", padding: 10, paddingTop: 0 }}>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={loading || !doc}
                onClick={() => {
                  if (!doc) return;
                  triggerCsvDownload(
                    historicalDocToCsv(doc),
                    `klimastation_${stationId ?? "wuppertal"}_${resolution}.csv`,
                  );
                }}
              >
                <i
                  className="glyphicon glyphicon-download"
                  style={{ marginRight: 6 }}
                />
                {loading
                  ? "Daten werden geladen…"
                  : `Messreihen herunterladen (CSV, ${resolutionNoun})`}
              </button>
              {doc && (
                <span style={{ marginLeft: 10, color: "#666", fontSize: "85%" }}>
                  ({(doc.time?.length ?? 0).toLocaleString("de-DE")}{" "}
                  Zeitpunkte,{" "}
                  {doc.from ? fmtTimestampFull(doc.from) : "?"} bis{" "}
                  {doc.to ? fmtTimestampFull(doc.to) : "?"})
                </span>
              )}
              <div style={{ fontSize: "80%", color: "#666", marginTop: 8 }}>
                Die Datei enthält den gesamten Messzeitraum in der oben
                gewählten Auflösung, Spalten durch Semikolon getrennt. Die
                Spalte Windrichtung enthält aggregierte Mittelwerte, die aus
                dem oben genannten Grund nicht belastbar sind.
              </div>
            </div>
          </Panel>
        </Accordion>

        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="info">
          <Panel
            header="Allgemeine Informationen"
            eventKey="info"
            bsStyle="default"
          >
            <div style={{ fontSize: "115%", padding: 10, paddingTop: 0 }}>
              <b>Station und Messverfahren</b>
              <p>{texts.allgemeineInformationen.station}</p>
              <b>Kontextualisierung</b>
              <p>
                {texts.allgemeineInformationen.kontext}
                {stationUrl ? (
                  <a href={stationUrl} target="_blank" rel="noopener noreferrer">
                    {texts.allgemeineInformationen.kontextLinkLabel}
                  </a>
                ) : (
                  texts.allgemeineInformationen.kontextLinkLabel
                )}
                {texts.allgemeineInformationen.kontextAfterLink}
              </p>
              <b>Hinweise zu den Daten</b>
              <p>{texts.hinweise.zeitstempel}</p>
              <p>{texts.hinweise.puffer}</p>
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
