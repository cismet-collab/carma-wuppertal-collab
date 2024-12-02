import focus-on from "./assets/focus-on.png";
import focus-off from "./assets/focus-off.png";
import { Link } from "../../helper-overlay/components/Link";

export const MenuBarText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Die Menüleiste umfasst mehrere Aktionen und Dialoge zur Steuerung und Weiterverarbeitung der Karteninhalte:
        </div>
        <table>
          <tr>
            <td><img src={focus-on} style={{ height: "18px" }} /></td>
            <td>
              <b>Hintergrundkarte abschwächen / zurücksetzen</b> - Wechselschalter zum Abschwächen (starke Transparenz) 
              und Zurücksetzen (keine Transparenz) der <Link target="HINTERGRUND">Hintergrundkarte</Link> | zum Auffinden 
              von Fachobjekten bei dünn besetzten Kartenebenen
            </td>
          </tr>
          <tr>
            <td>Icons</td>
            <td>
              <b>Kartensteuerelemente aus-/einblenden</b> - Wechselschalter zum Aus- und 
              Einblenden der <Link target="LAYERBUTTONS">Kartensteuerelemente</Link>
            </td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>
              <b>Drucken</b> - Einfacher Ausdruck in PDF-Datei mit Auswahl von Format, Maßstab und Auflösung | 
              verschiebbarer Druckvorschaurahmen | kein Ausdruck von Legenden, Metadaten etc.
            </td>
          </tr>
        </table>
      </ul>
    );
  };