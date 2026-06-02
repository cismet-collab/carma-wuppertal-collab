import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faFilter } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const LayerButtonsText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>
          Festes Hintergrund-Steuerelement{" "}
          <FontAwesomeIcon icon={faLayerGroup} />{" "}, dazu 
          variabel für jeden weiteren Karteninhalt ein Ebenen-Steuerelement 
          (nur 2D) oder Objekt-Steuerelement | im Messungsmodus 
          zusätzlich Zeichnungs-Steuerelement   
        </b>
        <br />
        horizontales Verschieben der Ebenen- und Objektsteuerelemente zur Änderung der
        Darstellungsreihenfolge | Optional: öffnen/schließen einer 
        Kartenstil-Auswahlliste mit{" "}<FontAwesomeIcon icon={faChevronDown} />{" "}/
        {" "}<FontAwesomeIcon icon={faChevronUp} />,{" "}<FontAwesomeIcon icon={faFilter} />{" "}
        zum Ein-/Ausblenden von Filteroptionen | Klicken auf das Steuerelement 
        zum Öffnen einer Zeile für die Steuerung von Transparenz und Sichtbarkeit | 
        Aufklappen der Zeile zur Anzeige weiterer Informationen:
      </div>
      <li>
        <b>Hintergrund-Steuerelement</b>: Auswahl/Voreinstellung der{" "}
        <HelpOverlayLink target="HINTERGRUND">Hintergrundkarte</HelpOverlayLink>{" "}
        | Informationen zur ausgewählten Hintergrundkarte | "Stapel" mit den
        Bedienungszeilen aller Kartenebenen (zentrale Steuerung für kleine
        Bildschirme)
      </li>
      <li>
        <b>Ebenen-Steuerelemente</b>: Kurzbeschreibung | Legende | Verknüpfungen
        mit Metadaten, Open Data etc.
      </li>
      <li>
        <b>Objekt-Steuerelemente</b>: Beschreibung und ggf. Links bei 3D-Objekten und Planungsarealen | 
        Inhalt, Datenquelle und Legende bei als Objekt abgelegten Messungen ("Messungs-Steuerelemente")
      </li>
    </ul>
  );
};
