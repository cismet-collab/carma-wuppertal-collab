import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const ObliqueText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Wechselschalter zum Ein-/Ausschalten des Schrägluftbildmodus (3D)</b><br/>
        Fußabdruck des für die Mitte des eingestellten Kartenausschnitts besten 
        aktuellen Schrägluftbilds  wird markiert | Anzeige spezieller Steuerelemente | 
        "Flug zum Bild" wechselt in die Aufnahmeperspektive für unverzerrte Bildvorschau | 
        Bild im Browser öffnen oder herunterladen (ca. 4,7 MB) | Pfeiltasten zur Drehung 
        oder für den Wechsel zum benachbarten Bild (Fußabdruck oder Vorschau)
        <br />
        <HelpOverlayLink section="3D-Funktionen">
          weitere Informationen
        </HelpOverlayLink>{" "} 
      </div>
    </ul>
  );
};
