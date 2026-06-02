import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const MeasurementsText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Wechselschalter zum Ein-/Ausschalten des Messungsmodus</b>
        <br />
        <HelpOverlayLink target="LAYERBUTTONS">Zeichnung-Steuerelement</HelpOverlayLink>{" "} 
        zur Arbeit mit allen im Browser gespeicherten 
        Messungsgeometrien (Zoom, Speichern, Löschen) sowie in 3D zur Auswahl 
        spezieller Messmodi | in Karte klicken zum Zeichnen von 
        Messgeometrien | Stützpunkte von Vektorlayern werden eingefangen 
        ("Snapping") | Linienzüge beenden mit Doppelklick, Flächen schließen 
        durch erneutes Anklicken des Startpunktes | Anzeige einer einzelnen 
        selektierten Messung und Durchwandern aller Messungen in der{" "} 
        <HelpOverlayLink target="INFOBOX">Info-Box</HelpOverlayLink> | Speichern
        über Zeichnung-Steuerelement als GeoJSON-Datei oder (nur 2D) im Geoportal
        unter Objekte/Meine Messungen  
      </div>
    </ul>
  );
};
