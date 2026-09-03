import type { ChartOptions } from "chart.js";

/** Hoechstzahl der Abschnitte zwischen den Achsenstrichen. */
const MAX_TICK_STEPS = 7;
/** Hoechstzahl der Abschnitte fuer die Feinrasterung der Achsengrenzen. */
const MAX_BOUND_STEPS = 20;

const nfAxis = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 });

/**
 * Kleinster glatter Schritt (1, 2, 2,5, 5, 10 ...), mit dem die Spanne in
 * hoechstens maxSteps Abschnitte passt.
 */
export function stepFor(span: number, maxSteps: number): number {
  const exponent = Math.floor(Math.log10(span || 1)) - 1;
  for (let e = exponent; e <= exponent + 3; e++) {
    const magnitude = Math.pow(10, e);
    for (const factor of [1, 2, 2.5, 5]) {
      const step = factor * magnitude;
      if (Math.ceil(span / step) <= maxSteps) return step;
    }
  }
  return span / maxSteps;
}

/** Kleinster und groesster Zahlenwert einer Reihe, null uebersprungen. */
export function valueRange(
  values: (number | null | undefined)[]
): { min: number; max: number } | null {
  let min = Infinity;
  let max = -Infinity;
  for (const v of values) {
    if (typeof v !== "number" || Number.isNaN(v)) continue;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return min === Infinity ? null : { min, max };
}

export interface YAxisOptions {
  /**
   * true beschriftet die Achse erst ab null und haelt den Rand darunter knapp.
   * Gedacht fuer Groessen, die physikalisch nicht negativ werden und deren
   * negative Messwerte nur Rauschen der Sensoren um den Nullpunkt sind
   * (Schadstoffkonzentrationen). Bei echten negativen Groessen wie Temperaturen
   * bleibt es bei false, sonst fehlen dem Diagramm die Frostwerte an der Achse.
   */
  zeroFloorLabels?: boolean;
  /**
   * true zieht die Achse bis zur Null herunter, auch wenn die Daten weiter
   * oben liegen. Pflicht fuer Balken, deren Laenge sonst nicht mehr zum Wert
   * passt, und sinnvoll fuer Zaehlungen.
   */
  beginAtZero?: boolean;
}

/**
 * Grenzen und Striche der Werteachse aus den Daten einer Reihe.
 *
 * Ohne feste Grenzen rundet Chart.js auf den Schritt der Beschriftung: eine
 * Reihe von -1,2 bis 243,6 bekommt dann eine Achse ab -100 und ein Drittel der
 * Flaeche bleibt leer. Die Grenzen liegen hier eng an den Daten, die Striche
 * dazwischen auf Vielfachen eines glatten Schritts, nie auf der Grenze selbst,
 * sonst steht am Rand eine krumme Zahl.
 */
export function buildYScale(
  rawMin: number,
  rawMax: number,
  { zeroFloorLabels = false, beginAtZero = false }: YAxisOptions = {}
) {
  const min = beginAtZero ? Math.min(0, rawMin) : rawMin;
  // Eine Reihe aus lauter gleichen Werten (etwa ein Sensor, der durchgehend 0
  // liefert) hat keine Spanne. Ohne Aufschlag blieben Grenzen und Striche
  // aufeinander liegen und das Diagramm bliebe leer.
  const max = rawMax > min ? rawMax : min + (Math.abs(min) * 0.1 || 1);
  const fromZero = zeroFloorLabels && min < 0;
  const bound = stepFor(max - min, MAX_BOUND_STEPS);
  const lower = fromZero ? min * 1.1 : Math.floor(min / bound) * bound;
  const upper = Math.ceil(max / bound) * bound;
  const step = fromZero
    ? stepFor(max, MAX_TICK_STEPS)
    : stepFor(upper - lower, MAX_TICK_STEPS);

  const ticks: { value: number }[] = [];
  const first = fromZero
    ? Math.max(0, Math.ceil(lower / step) * step)
    : Math.ceil(lower / step) * step;
  for (let v = first; v <= upper + step * 1e-6; v += step) {
    ticks.push({ value: v });
  }

  return {
    min: lower,
    max: upper,
    ticks: {
      callback: (value: string | number) => {
        const n = Number(value);
        return fromZero && n < 0 ? "" : nfAxis.format(n);
      },
    },
    afterBuildTicks: (axis: { ticks: { value: number }[] }) => {
      axis.ticks = ticks;
    },
  };
}

/**
 * Basisoptionen mit der Werteachse aus buildYScale. Das Ergebnis muss ueber
 * Rerender hinweg dasselbe Objekt bleiben (einmal je Datensatz bauen, nicht im
 * Render): ein frisches Optionsobjekt laesst react-chartjs-2 die Skalen neu
 * setzen, womit ein gerade gesetzter Zoom verloren waere.
 */
export function withYScale(
  base: ChartOptions<"line" | "bar">,
  min: number,
  max: number,
  options?: YAxisOptions
): ChartOptions<"line" | "bar"> {
  const scale = buildYScale(min, max, options);
  const baseY = (base.scales?.y ?? {}) as Record<string, unknown>;
  const baseTicks = (baseY.ticks ?? {}) as Record<string, unknown>;
  return {
    ...base,
    scales: {
      ...base.scales,
      y: {
        ...baseY,
        ...scale,
        ticks: { ...baseTicks, ...scale.ticks },
      } as NonNullable<ChartOptions<"line" | "bar">["scales"]>["y"],
    },
  };
}
