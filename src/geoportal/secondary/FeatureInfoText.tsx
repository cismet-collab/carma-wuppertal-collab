import { Link } from "../../helper-overlay/components/Link";

export const FeatureInfoText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Wechselschalter zum An-/Abschalten des Multi-Sachdatenabfragemodus (<b>2D</b>) | 
          blau unterstrichene <Link target="LAYERBUTTONS">Kartensteuerelemente</Link> kennzeichnen abfragbare Kartenebenen | 
          in Karte klicken/tippen für Abfrage aller sichtbaren "blauen" Kartenebenen an dieser Stelle ("thematischer Durchstich") | 
          Ergebnisanzeige in der <Link target="INFOBOX">Info-Box</Link>
        </div>
      </ul>
    );
  };