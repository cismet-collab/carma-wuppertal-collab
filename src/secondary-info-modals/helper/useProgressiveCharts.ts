import { useEffect, useRef, useState } from "react";

/** Pause zwischen Aufbereitung und den einzelnen Diagrammen. */
const STEP_DELAY = 50;

/**
 * Bereitet die Diagrammdaten ausserhalb des Renderpfads auf und haengt die
 * Diagramme danach einzeln in die Seite.
 *
 * Beides gegen denselben Effekt: die Datenblaetter laden mehrere Megabyte
 * Messreihen, und sowohl das Umrechnen als auch das erste Zeichnen jedes
 * Diagramms blockiert den Hauptthread mehrere hundert Millisekunden. Passiert
 * das im Render, verschwindet der Ladezustand, sobald die Daten da sind, und
 * der Betrachter sieht sekundenlang leere Zeichenflaechen. Hier bleibt der
 * Ladezustand stehen, bis das jeweilige Diagramm wirklich gezeichnet ist.
 *
 * Timer statt requestAnimationFrame, weil rAF in einem Hintergrundtab nicht
 * laeuft und die Diagramme dann nie kaemen.
 *
 * @param source Rohdaten, null solange nichts geladen ist. Jede neue Identitaet
 *   startet die Aufbereitung neu.
 * @param prepare Wandelt die Rohdaten in die Diagramme um. Wird ueber eine Ref
 *   gehalten, muss also nicht stabil sein.
 */
export function useProgressiveCharts<
  S,
  P extends { panels: readonly unknown[] }
>(
  source: S | null | undefined,
  prepare: (source: S) => P
): { prepared: P | null; mountedCharts: number } {
  const [prepared, setPrepared] = useState<P | null>(null);
  const [mountedCharts, setMountedCharts] = useState(0);

  const prepareRef = useRef(prepare);
  prepareRef.current = prepare;

  useEffect(() => {
    setPrepared(null);
    setMountedCharts(0);
    if (source === null || source === undefined) return;
    let cancelled = false;
    const timer = setTimeout(() => {
      if (cancelled) return;
      setPrepared(prepareRef.current(source));
    }, STEP_DELAY);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [source]);

  useEffect(() => {
    if (!prepared) return;
    if (mountedCharts >= prepared.panels.length) return;
    const timer = setTimeout(
      () => setMountedCharts((count) => count + 1),
      STEP_DELAY
    );
    return () => clearTimeout(timer);
  }, [prepared, mountedCharts]);

  return { prepared, mountedCharts };
}
