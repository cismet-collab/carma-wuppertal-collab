import { useMemo, useRef, useState } from "react";
import type { ChartOptions } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import type { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import zoomPlugin from "chartjs-plugin-zoom";

// Zoom in den Diagrammen der Datenblaetter, siehe cismet/wupp#4117. Einmal
// global registriert, aber nur dort aktiv, wo options.plugins.zoom gesetzt ist -
// Diagramme ohne diese Option bleiben unveraendert.
ChartJS.register(zoomPlugin);

/**
 * Zoomoptionen fuer options.plugins.zoom. Mausrad bewusst nur mit Strg, sonst
 * kapert das Diagramm das Scrollen im Modal.
 */
export const ZOOM_PLUGIN_OPTIONS = {
  zoom: {
    drag: { enabled: true, backgroundColor: "rgba(0,0,0,0.1)" },
    wheel: { enabled: true, modifierKey: "ctrl" as const },
    pinch: { enabled: true },
    mode: "x" as const,
  },
  pan: { enabled: true, mode: "x" as const, modifierKey: "shift" as const },
  limits: { x: { minRange: 3 } },
};

/** Erklaerung der Bedienung, einheitlich ueber alle Datenblaetter. */
export const ZOOM_HINT =
  "Zum Zoomen einen Bereich mit der Maus aufziehen, Strg und Mausrad zoomen " +
  "ebenfalls, Umschalt und Ziehen verschiebt den Ausschnitt.";

/**
 * Diagramm samt Schaltflaeche, die den Zoom wieder aufhebt (#4117).
 *
 * Wichtig fuer die Aufrufer: `options` muss ueber Rerender hinweg dasselbe
 * Objekt bleiben, also aus einem useMemo oder einer Modulkonstante stammen. Ein
 * frisch gebautes Optionsobjekt laesst react-chartjs-2 die Skalen neu setzen,
 * womit der gerade gesetzte Zoom sofort wieder verloren waere.
 */
export const ChartWithZoom = ({
  bars = false,
  data,
  options,
  height = 260,
}: {
  /** true zeichnet Balken, sonst eine Linie. */
  bars?: boolean;
  /** Chart.js-Datenobjekt, Aufbau je nach Datenblatt verschieden. */
  data: unknown;
  options: ChartOptions<"line" | "bar">;
  height?: number;
}) => {
  const ref = useRef<ChartJSOrUndefined<"line" | "bar">>(null);
  const [zoomed, setZoomed] = useState(false);

  // Der Rueckmeldung der Schaltflaeche wegen wird onZoomComplete hier
  // angehaengt. Der useMemo haelt die Zusammenfuehrung stabil, solange der
  // Aufrufer stabile Optionen liefert.
  const mergedOptions = useMemo(
    () => ({
      ...options,
      plugins: {
        ...options.plugins,
        zoom: {
          ...options.plugins?.zoom,
          zoom: {
            ...options.plugins?.zoom?.zoom,
            onZoomComplete: () => setZoomed(true),
          },
        },
      },
    }),
    [options],
  );

  const commonProps = {
    ref: ref as never,
    data: data as never,
    options: mergedOptions as never,
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ height, width: "100%" }}>
        {bars ? <Bar {...commonProps} /> : <Line {...commonProps} />}
      </div>
      {zoomed && (
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => {
            ref.current?.resetZoom();
            setZoomed(false);
          }}
        >
          Zoom zurücksetzen
        </button>
      )}
    </div>
  );
};

export default ChartWithZoom;
