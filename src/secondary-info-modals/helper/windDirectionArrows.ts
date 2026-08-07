import { Chart as ChartJS } from "chart.js";
import type { Chart, ChartType, Plugin } from "chart.js";

/**
 * Windrichtung als Pfeilreihe am unteren Rand eines Liniendiagramms (#4126).
 *
 * Ein Verlauf ueber der Gradachse ist fuer Richtungen unbrauchbar, weil die
 * Linie an jedem Nulldurchgang von 359 auf 1 quer durch das Bild springt. Die
 * Pfeile zeigen dieselbe Groesse ohne diesen Bruch und liegen auf derselben
 * Zeitachse wie die Windgeschwindigkeit.
 */
export interface WindDirectionArrowsOptions {
  directions: (number | null)[];
  speeds?: (number | null)[];
  color?: string;
  size?: number;
  minSpacing?: number;
  bottomOffset?: number;
}

declare module "chart.js" {
  interface PluginOptionsByType<TType extends ChartType> {
    windDirectionArrows?: WindDirectionArrowsOptions;
  }
}

const DEFAULTS = {
  color: "#6b6b6b",
  size: 13,
  minSpacing: 16,
  bottomOffset: 16,
};

/**
 * Zeichnet einen Pfeil, der in die Richtung zeigt, in die der Wind weht. Die
 * Angabe kommt meteorologisch als Herkunftsrichtung herein, deshalb die
 * Drehung um 180 Grad: Nordwind (0 Grad) zeigt nach unten.
 */
function drawArrow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  fromDegrees: number,
  size: number
) {
  const rad = ((fromDegrees + 180) * Math.PI) / 180;
  // Bildschirmkoordinaten: y waechst nach unten, deshalb das Minus.
  const dx = Math.sin(rad);
  const dy = -Math.cos(rad);
  const half = size / 2;
  const tipX = x + dx * half;
  const tipY = y + dy * half;
  const headLength = size * 0.42;
  const headWidth = size * 0.26;
  // Fusspunkt der Spitze und die Senkrechte zur Pfeilrichtung.
  const baseX = tipX - dx * headLength;
  const baseY = tipY - dy * headLength;

  ctx.beginPath();
  ctx.moveTo(x - dx * half, y - dy * half);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(baseX - dy * headWidth, baseY + dx * headWidth);
  ctx.lineTo(baseX + dy * headWidth, baseY - dx * headWidth);
  ctx.closePath();
  ctx.fill();
}

function drawNoDirection(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  measured: boolean
) {
  ctx.beginPath();
  if (measured) {
    ctx.arc(x, y, size * 0.22, 0, Math.PI * 2);
    ctx.stroke();
    return;
  }
  ctx.globalAlpha = 0.4;
  ctx.arc(x, y, 1.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function meanDirection(
  values: (number | null)[],
  from: number,
  to: number
): number | null {
  let sin = 0;
  let cos = 0;
  let count = 0;
  for (let i = from; i < to; i++) {
    const v = values[i];
    if (typeof v !== "number" || !isFinite(v)) continue;
    const rad = (v * Math.PI) / 180;
    sin += Math.sin(rad);
    cos += Math.cos(rad);
    count++;
  }
  if (count === 0) return null;
  // Gegenlaeufige Richtungen loeschen sich zu einem Vektor ohne Laenge aus.
  if (Math.hypot(sin, cos) < 1e-8 * count) return null;
  return ((Math.atan2(sin, cos) * 180) / Math.PI + 360) % 360;
}

function hasValue(
  values: (number | null)[] | undefined,
  from: number,
  to: number
): boolean {
  if (!Array.isArray(values)) return false;
  for (let i = from; i < to; i++) {
    const v = values[i];
    if (typeof v === "number" && isFinite(v)) return true;
  }
  return false;
}

export const windDirectionArrowsPlugin: Plugin<"line" | "bar"> = {
  id: "windDirectionArrows",
  afterDatasetsDraw(chart: Chart, _args, pluginOptions) {
    const options = pluginOptions as WindDirectionArrowsOptions | undefined;
    const directions = options?.directions;
    if (!Array.isArray(directions) || directions.length === 0) return;

    const xScale = chart.scales.x;
    const area = chart.chartArea;
    if (!xScale || !area) return;

    const color = options?.color ?? DEFAULTS.color;
    const size = options?.size ?? DEFAULTS.size;
    const minSpacing = options?.minSpacing ?? DEFAULTS.minSpacing;
    const bottomOffset = options?.bottomOffset ?? DEFAULTS.bottomOffset;

    // Ausduennung aus dem aktuellen Massstab, damit ein Zoom mehr Pfeile
    // freigibt statt sie enger zu stapeln.
    const perPoint = Math.abs(
      xScale.getPixelForValue(1) - xScale.getPixelForValue(0)
    );
    const step =
      perPoint > 0 ? Math.max(1, Math.ceil(minSpacing / perPoint)) : 1;

    const y = area.bottom - bottomOffset;
    const ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    const speeds = options?.speeds;
    for (let i = 0; i < directions.length; i += step) {
      const x = xScale.getPixelForValue(i);
      // Ausserhalb des sichtbaren Ausschnitts (Zoom, Pan) nichts zeichnen.
      if (x < area.left + size / 2 || x > area.right - size / 2) continue;
      // Jedes Zeichen beschreibt die Spanne bis zum naechsten Zeichen.
      const to = Math.min(i + step, directions.length);
      const value = meanDirection(directions, i, to);
      if (value !== null) {
        drawArrow(ctx, x, y, value, size);
        continue;
      }
      // Keine Richtung in der ganzen Spanne: Kreis, wenn dennoch gemessen
      // wurde, sonst der blasse Punkt fuer den fehlenden Messwert.
      drawNoDirection(ctx, x, y, size, hasValue(speeds, i, to));
    }
    ctx.restore();
  },
};

ChartJS.register(windDirectionArrowsPlugin);

export default windDirectionArrowsPlugin;
