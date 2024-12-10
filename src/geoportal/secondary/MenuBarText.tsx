import focusOn from "./assets/focus-on.png";
import focusOff from "./assets/focus-off.png";
import addLayers from "./assets/add-layers.png";
import { Link } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export const MenuBarText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Die Menüleiste umfasst mehrere Aktionen und Dialoge zur Steuerung und
        Weiterverarbeitung der Karteninhalte:
      </div>
      <table>
        <tr>
          <td>
            <FontAwesomeIcon icon={faRotateRight} />
          </td>
          <td>
            <b>Aktualisieren</b> - Erneutes Laden aller nicht ausgeblendeten{" "}
            <Link target="LAYERBUTTONS">Kartenebenen</Link>
          </td>
        </tr>
        <tr>
          <td>            
            <img src={addLayers} style={{ height: "18px" }} />
          </td>
          <td>
            <b>Karteninhalte hinzufügen</b> - Dialog für Suche, Vorschau und Laden von 
            Karteninhalten im DigiTal Zwilling | zum Laden externer Kartendienste Adresse 
            (WMS-Capabilities-URL) markieren und in das Kartenfenster ziehen 
          </td>
        </tr>
        <tr>
          <td>
            <img src={focusOff} style={{ height: "14px" }} />
            <img src={focusOn} style={{ height: "14px" }} />
          </td>
          <td>
            <b>Hintergrundkarte abschwächen / zurücksetzen</b> - Wechselschalter
            zum Abschwächen (starke Transparenz) und Zurücksetzen (keine
            Transparenz) der <Link target="HINTERGRUND">Hintergrundkarte</Link>{" "}
            | zum Auffinden von Fachobjekten bei dünn besetzten Kartenebenen
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="eye" /> <FontAwesomeIcon icon="eye-slash" />
          </td>
          <td>
            <b>Kartensteuerelemente aus-/einblenden</b> - Wechselschalter zum
            Aus- und Einblenden der{" "}
            <Link target="LAYERBUTTONS">Kartensteuerelemente</Link>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="file-export" />
          </td>
          <td>
            <b>Karte speichern</b> - Dialog zum Speichern der aktuell zusammengestellten 
            Kartenebenen mit Beschreibung und Vorschaubild | Laden über Menüleiste / 
            Karteninhalte hinzufügen
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="print" />
          </td>
          <td>
            <b>Drucken</b> - Dialog für einfachen Ausdruck in PDF-Datei mit Auswahl von
            Format, Maßstab und Auflösung | verschiebbarer Druckvorschaurahmen |
            kein Ausdruck von Legenden, Metadaten etc.
          </td>
        </tr>
      </table>
    </ul>
  );
};
