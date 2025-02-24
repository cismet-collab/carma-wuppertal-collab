import { Link } from "../../helper-overlay/components/Link";

export const LayerButtonsText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          <b>Festes Hintergrund-Steuerelement, dazu variabel 
          für jede weitere geladene Kartenebene ein Ebenen-Steuerelement (2D)</b><br/>  
          horizontales Verschieben der Ebenen-Steuerelemente zur Änderung der Darstellungsreihenfolge | 
          Klicken auf das Steuerelement zum Öffnen einer Zeile für die Steuerung von 
          Transparenz und Sichtbarkeit | Aufklappen der Zeile zur Anzeige weiterer Informationen:
        </div>
        <li>
          <b>Hintergrund-Steuerelement</b>: Auswahl/Voreinstellung der <Link target="HINTERGRUND">Hintergrundkarte</Link> | 
          Informationen zur ausgewählten Hintergrundkarte | "Stapel" mit den Bedienungszeilen 
          aller Kartenebenen (zentrale Steuerung für kleine Bildschirme)
        </li>
        <li>
          <b>Ebenen-Steuerelemente</b>: Kurzbeschreibung | Legende | Verknüpfungen mit Metadaten, Open Data etc.
        </li>
      </ul>
    );
  };
  