import { Link } from "../../helper-overlay/components/Link";

export const BackgroundSelectionText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Wechselschalter für die Auswahl der Hintergrundkarte (<b>2D</b>) bzw. des 3D-Modells (<b>3D</b>) | 
          Voreinstellung der 2D-Karte im <Link target="LAYERBUTTONS">Hintergrund-Steuerelement</Link> | 
          3D: "Karte" basiert auf LoD2-Gebäudemodell der Landesvermessung NRW, "Luftbild" liefert 3D-Mesh
          (berechnet aus Befliegung in 03/24)<br/> 
          <Link section="hintergrundkarte">weitere Informationen</Link>{" "}
        </div>
      </ul>
    );
  };