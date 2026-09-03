import { useEffect } from "react";

// Eigene Keyframes statt der FontAwesome-Animation: die FontAwesome-CSS wird in
// diesem Projekt nirgends eingebunden, fa-spin bliebe also stehen.
const SPIN_STYLE_ID = "carma-sim-spin-keyframes";

function ensureSpinKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SPIN_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = SPIN_STYLE_ID;
  style.textContent =
    "@keyframes carmaSimSpin { to { transform: rotate(360deg); } }";
  document.head.appendChild(style);
}

/** Ladekringel, Groesse und Farbe passend zum jeweiligen Datenblatt. */
export const Spinner = ({
  size = 28,
  color = "#00acc1",
}: {
  size?: number;
  color?: string;
}) => {
  useEffect(ensureSpinKeyframes, []);
  const border = Math.max(2, Math.round(size / 10));
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${border}px solid rgba(0,0,0,0.12)`,
        borderTopColor: color,
        animation: "carmaSimSpin 0.9s linear infinite",
      }}
    />
  );
};

/**
 * Platzhalter fuer ein noch ladendes Diagramm. Die Hoehe entspricht der des
 * spaeteren Diagramms (ChartWithZoom), damit beim Eintreffen der Daten nichts
 * springt.
 */
export const ChartLoadingPlaceholder = ({
  height = 260,
  label = "Daten werden geladen…",
  color,
}: {
  height?: number;
  label?: string;
  color?: string;
}) => (
  <div
    role="status"
    aria-live="polite"
    style={{
      height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      color: "#888",
    }}
  >
    <Spinner color={color} />
    <div style={{ fontSize: "90%" }}>{label}</div>
  </div>
);

export default ChartLoadingPlaceholder;
