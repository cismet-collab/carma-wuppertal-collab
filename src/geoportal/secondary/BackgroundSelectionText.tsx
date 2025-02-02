import { Link } from "../../helper-overlay/components/Link";

export const BackgroundSelectionText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          <b>Wechselschalter für Auswahl von Hintergrundkarte (2D) bzw. 3D-Modell (3D)</b><br/> 
          Voreinstellung der 2D-Karte im <Link target="LAYERBUTTONS">Hintergrund-Steuerelement</Link>, wird dazu
          auch direkt rechts neben dem Wechselschalter angeboten | 
          3D: "Karte" basiert auf LoD2-Gebäudemodell der Landesvermessung NRW, "Luftbild" liefert 3D-Mesh
          (berechnet aus Befliegung in 03/24)<br/> 
          <Link section="hintergrundkarte">weitere Informationen</Link>{" "}
        </div>
      </ul>
    );
  };