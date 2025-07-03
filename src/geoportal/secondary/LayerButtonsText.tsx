import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LayerButtonsText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>
          Festes Hintergrund-Steuerelement{" "}<FontAwesomeIcon icon={faLayerGroup} />, 
          dazu variabel für jede weitere geladene Kartenebene ein Ebenen-Steuerelement (2D)
        </b>
        <br />
        horizontales Verschieben der Ebenen-Steuerelemente zur Änderung der
        Darstellungsreihenfolge | Klicken auf das Steuerelement zum Öffnen einer
        Zeile für die Steuerung von Transparenz und Sichtbarkeit | Aufklappen
        der Zeile zur Anzeige weiterer Informationen:
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
    </ul>
  );
};
