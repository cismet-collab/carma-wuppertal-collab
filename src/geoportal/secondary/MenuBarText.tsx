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