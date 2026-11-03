import React, { useEffect, useMemo, useState } from "react";
import type { ChartOptions } from "chart.js";
import "chart.js/auto";
import { Modal, Accordion } from "react-bootstrap";
import Panel from "react-cismap/commons/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { genericSecondaryInfoFooterFactory } from "../commons";
import LiveBadge from "../commons/LiveBadge";
import texts from "./_data/fluggsSensorenTexts";
import {
  ChartWithZoom,
  ZOOM_HINT,
  ZOOM_PLUGIN_OPTIONS,
} from "./helper/chartWithZoom";
import { ChartLoadingPlaceholder } from "./helper/chartLoading";
import { valueRange, withYScale } from "./helper/chartAxis";
import { useProgressiveCharts } from "./helper/useProgressiveCharts";

// Datenblatt der Wupperverband-Messstellen (FROST, #4129). Eine Komponente fuer
// alle sieben Ebenen, unterschieden ueber die Eigenschaft "gruppe".

/* -------------------------------------------------------------------------- */
/* Ganglinie                                                                   */
/* -------------------------------------------------------------------------- */

// Vorgerechnete Zeitreihen der Schwesterebene fluggs_historical (tiling-pipeline).
// Bewusst nicht direkt vom FROST-Server: jeder Klick ginge sonst an den
// Wupperverband.
const HISTORICAL_BASE_URL = "https://tiles.cismet.de/fluggs_historical";

type Resolution = "hour" | "day";

const historicalUrl = (datastreamId: number, resolution: Resolution) =>
  `${HISTORICAL_BASE_URL}/ds_${datastreamId}_${resolution}.json`;

/**
 * Regelmaessiges Raster: Wert i gehoert zu start + i * stepSeconds (UTC),
 * null steht fuer einen Zeitschritt ohne Messung.
 */
interface HistoricalDoc {
  datastreamId: number;
  resolution: Resolution;
  unit?: string;
  /** "mean" oder "sum" (Niederschlag). */
  aggregation: string;
  start: string;
  stepSeconds: number;
  v: (number | null)[];
}

interface RangeOption {
  key: string;
  label: string;
  /** null = alles, was die Datei hergibt. */
  days: number | null;
}

const RANGES: RangeOption[] = [
  { key: "7d", label: "7 Tage", days: 7 },
  { key: "30d", label: "30 Tage", days: 30 },
  { key: "12m", label: "12 Monate", days: 365 },
  { key: "all", label: "Gesamt", days: null },
];

const RESOLUTIONS: { key: Resolution; label: string; noun: string }[] = [
  { key: "hour", label: "Stunde", noun: "Stundenwerte" },
  { key: "day", label: "Tag", noun: "Tageswerte" },
];

// Mehr Punkte bringen im Diagramm keine zusaetzliche Information, machen es aber
// traege. Darueber hinaus wird zu Buckets zusammengefasst.
const MAX_POINTS = 2000;

// Die Dateien sind UTC, angezeigt wird die Wanduhr in Wuppertal.
const dfHour = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
const dfDay = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});
const dfFull = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
const dfFullDay = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const fmtNumber = (v: number, decimals: number) =>
  v.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/** Buckets bilden: Mittelwerte mitteln, Summenreihen summieren. */
function reduceSeries(
  values: (number | null)[],
  bucketSize: number,
  sum: boolean
): (number | null)[] {
  if (bucketSize <= 1) return values;
  const out: (number | null)[] = [];
  for (let i = 0; i < values.length; i += bucketSize) {
    let total = 0;
    let n = 0;
    for (let k = i; k < Math.min(i + bucketSize, values.length); k++) {
      const v = values[k];
      if (typeof v === "number") {
        total += v;
        n++;
      }
    }
    out.push(n === 0 ? null : sum ? total : total / n);
  }
  return out;
}

interface Slice {
  /** Index des ersten sichtbaren Werts in doc.v. */
  start: number;
  count: number;
  bucketSize: number;
  /** Zeitstempel (ms) der Buckets. */
  times: number[];
  from: number;
  to: number;
  gaps: number;
}

function sliceDoc(doc: HistoricalDoc, rangeKey: string): Slice | null {
  const total = Array.isArray(doc.v) ? doc.v.length : 0;
  if (total === 0) return null;
  const range = RANGES.find((r) => r.key === rangeKey) ?? RANGES[0];
  const perDay = 86400 / doc.stepSeconds;
  // Vom Ende der Reihe aus geschnitten, nicht von heute: steht die Quelle
  // still, bleibt der Zeitraum trotzdem gefuellt.
  const count =
    range.days === null
      ? total
      : Math.min(total, Math.round(range.days * perDay));
  const start = total - count;
  const bucketSize = Math.max(1, Math.ceil(count / MAX_POINTS));
  const t0 = new Date(doc.start).getTime();
  const stepMs = doc.stepSeconds * 1000;
  const times: number[] = [];
  for (let i = start; i < total; i += bucketSize) times.push(t0 + i * stepMs);
  let gaps = 0;
  for (let i = start; i < total; i++) if (doc.v[i] === null) gaps++;
  return {
    start,
    count,
    bucketSize,
    times,
    from: t0 + start * stepMs,
    to: t0 + (total - 1) * stepMs,
    gaps,
  };
}

function buildChart(
  doc: HistoricalDoc,
  slice: Slice,
  opts: { color: string; label: string; unit: string; decimals: number }
) {
  const isSum = doc.aggregation === "sum";
  const values = reduceSeries(
    doc.v.slice(slice.start),
    slice.bucketSize,
    isSum
  );
  const range = valueRange(values);
  if (!range) return null;
  const fmtAxis = doc.resolution === "hour" ? dfHour : dfDay;
  const fmtTooltip = doc.resolution === "hour" ? dfFull : dfFullDay;
  const unitSuffix = opts.unit && opts.unit !== "-" ? " " + opts.unit : "";

  const base: ChartOptions<"line" | "bar"> = {
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (items) =>
            items.length
              ? fmtTooltip.format(slice.times[items[0].dataIndex])
              : "",
          label: (item) =>
            typeof item.parsed.y === "number"
              ? fmtNumber(item.parsed.y, opts.decimals) + unitSuffix
              : "–",
        },
      },
      zoom: ZOOM_PLUGIN_OPTIONS,
    },
    scales: {
      x: {
        ticks: { maxTicksLimit: 8, font: { size: 10 }, autoSkip: true },
        grid: { display: false },
      },
      y: { ticks: { maxTicksLimit: 6 }, beginAtZero: isSum },
    },
  };

  return {
    isSum,
    data: {
      labels: slice.times.map((t) => fmtAxis.format(t)),
      datasets: [
        {
          label: opts.label,
          data: values,
          borderColor: opts.color,
          backgroundColor: opts.color,
          ...(isSum
            ? { borderWidth: 0 }
            : { pointRadius: 0, borderWidth: 1.5, fill: false, tension: 0.1 }),
        },
      ],
    },
    // Hier und nicht im Render gebaut, sonst geht der Zoom bei jedem Rerender
    // verloren (siehe ChartWithZoom).
    options: withYScale(base, range.min, range.max, { beginAtZero: isSum }),
  };
}

function docToCsv(doc: HistoricalDoc, unit: string): string {
  const t0 = new Date(doc.start).getTime();
  const stepMs = doc.stepSeconds * 1000;
  const header = `Zeitstempel (UTC);Wert${unit ? ` [${unit}]` : ""}`;
  const rows = doc.v.map(
    (v, i) =>
      `${new Date(t0 + i * stepMs).toISOString()};${
        typeof v === "number" ? String(v).replace(".", ",") : ""
      }`
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
  const datastreamId =
    typeof p?.datastreamId === "number" ? p.datastreamId : null;

  const [resolution, setResolution] = useState<Resolution>("hour");
  const [rangeKey, setRangeKey] = useState<string>("30d");
  // Je Messreihe und Aufloesung nur einmal geladen.
  const [docs, setDocs] = useState<Record<string, HistoricalDoc>>({});
  const [loading, setLoading] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const docKey = datastreamId === null ? "" : `${datastreamId}_${resolution}`;

  useEffect(() => {
    if (datastreamId === null || docs[docKey]) return;
    let cancelled = false;
    setLoading(true);
    setLoadFailed(false);
    fetch(historicalUrl(datastreamId, resolution))
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((doc: HistoricalDoc) => {
        if (!cancelled) setDocs((prev) => ({ ...prev, [docKey]: doc }));
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
  }, [datastreamId, resolution, docKey, docs]);

  const doc = docs[docKey];
  const slice = useMemo(
    () => (doc ? sliceDoc(doc, rangeKey) : null),
    [doc, rangeKey]
  );

  const chartColor =
    (typeof p?.farbe === "string" && p.farbe) ||
    (COLORS[(p?.gruppe as string) ?? ""] ?? FALLBACK_COLORS).header;
  const chartUnit = (doc?.unit ?? (p?.einheit as string)) || "";
  const chartDecimals =
    typeof p?.nachkommastellen === "number" ? p.nachkommastellen : 2;
  const chartLabel = (p?.phaenomen as string) || "Messwert";

  const chartSource = useMemo(
    () => (doc && slice ? { doc, slice } : null),
    [doc, slice]
  );
  const { prepared, mountedCharts } = useProgressiveCharts(
    chartSource,
    ({ doc, slice }) => {
      const chart = buildChart(doc, slice, {
        color: chartColor,
        label: chartLabel,
        unit: chartUnit,
        decimals: chartDecimals,
      });
      return { panels: chart ? [chart] : [] };
    }
  );
  const chart = prepared?.panels[0];

  if (p === undefined) return null;

  const gruppe = (p.gruppe as string) ?? "";
  const colors = COLORS[gruppe] ?? FALLBACK_COLORS;
  const name = (p.name as string) || "Messstelle";
  const phaenomen = (p.phaenomen as string) || "";
  const einheit = (p.einheit as string) || "";
  const dateObserved = p.dateObserved as string | undefined;
  const isLive =
    !!dateObserved && Date.now() - new Date(dateObserved).getTime() < LIVE_MS;
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

        {datastreamId !== null && (
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
                {`${dfFull.format(slice.from)} bis ${dfFull.format(slice.to)}`}
                {slice.bucketSize > 1 &&
                  ` · je Punkt ${slice.bucketSize} ${
                    RESOLUTIONS.find((r) => r.key === resolution)?.noun
                  }`}
                {slice.gaps > 0 &&
                  ` · ${slice.gaps.toLocaleString("de-DE")} ${
                    RESOLUTIONS.find((r) => r.key === resolution)?.noun
                  } ohne Messung`}
              </span>
            )}
            {chart && (
              <span
                style={{ fontSize: "85%", color: "#888", flexBasis: "100%" }}
              >
                {ZOOM_HINT}
              </span>
            )}
          </div>
        )}

        <Accordion style={{ marginBottom: 6 }} defaultActiveKey="ganglinie">
          <Panel
            header={`Ganglinie: ${chartLabel}${
              chartUnit && chartUnit !== "-" ? ` (${chartUnit})` : ""
            }${chart?.isSum ? ", Summe je Zeitschritt" : ""}`}
            eventKey="ganglinie"
            bsStyle="success"
          >
            <div style={{ padding: "10px", paddingTop: 0 }}>
              {chart && mountedCharts > 0 ? (
                <ChartWithZoom
                  bars={chart.isSum}
                  data={chart.data}
                  options={chart.options}
                />
              ) : loadFailed ||
                datastreamId === null ||
                (prepared && !chart) ? (
                <div
                  style={{
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#888",
                  }}
                >
                  {texts.hinweise.keineZeitreihe}
                </div>
              ) : (
                <ChartLoadingPlaceholder label="Messreihe wird geladen…" />
              )}
              {slice && Date.now() - slice.to > LIVE_MS && (
                <div style={{ fontSize: "85%", color: "#888", marginTop: 6 }}>
                  {`Seit ${dfFullDay.format(
                    slice.to
                  )} liefert der Server des Wupperverbands für diese Messreihe keine neuen Werte.`}
                </div>
              )}
            </div>
          </Panel>
        </Accordion>

        {doc && Array.isArray(doc.v) && doc.v.length > 0 && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="download">
            <Panel header="Datendownload" eventKey="download" bsStyle="warning">
              <div
                style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    triggerCsvDownload(
                      docToCsv(doc, chartUnit),
                      `Wupperverband_${datastreamId}_${name.replace(
                        /[^\wäöüÄÖÜß-]+/g,
                        "_"
                      )}_${
                        resolution === "hour" ? "Stundenwerte" : "Tageswerte"
                      }.csv`
                    )
                  }
                >
                  <i
                    className="glyphicon glyphicon-download"
                    style={{ marginRight: 6 }}
                  />
                  {`${
                    resolution === "hour" ? "Stundenwerte" : "Tageswerte"
                  } herunterladen (CSV)`}
                </button>
                <span
                  style={{ marginLeft: 10, color: "#666", fontSize: "85%" }}
                >
                  ({doc.v.length.toLocaleString("de-DE")} Zeitschritte)
                </span>
              </div>
            </Panel>
          </Accordion>
        )}

        {messgroesse && (
          <Accordion style={{ marginBottom: 6 }} defaultActiveKey="messgroesse">
            <Panel
              header={`Messgröße: ${
                phaenomen || HEADINGS[gruppe] || "Messwert"
              }`}
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
              <b>Datenquelle</b>
              <p>{texts.allgemeineInformationen.datenquelle}</p>
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
