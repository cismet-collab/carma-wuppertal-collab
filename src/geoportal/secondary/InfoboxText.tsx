import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const InfoboxText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Modusabhängige Anzeige von Objektinformationen (2D)</b>
        <br />
        <HelpOverlayLink target="MESSUNGEN">
          Modus Strecke/Fläche messen
        </HelpOverlayLink>
        : Navigation in zuvor angelegten Messgeometrien, Anzeige der
        Messergebnisse, Löschen von Messgeometrien |{" "}
        <b>Modus Sachdatenabfrage</b>: Anzeige der wichtigsten
        Informationen/Links zum selektierten Objekt oder bei{" "}
        <HelpOverlayLink target="SACHDATENABFRAGE">
          Multi-Sachdatenabfrage
        </HelpOverlayLink>{" "}
        zu Objekten an ausgewählter Position, jeweils mit Link zu vollständigen
        Sachinformationen; Informationen zu mehreren Objekten in überlappenden
        Info-Boxen, Info-Box in den Vordergrund holen durch Klicken auf den
        Titelbalken
      </div>
    </ul>
  );
};
