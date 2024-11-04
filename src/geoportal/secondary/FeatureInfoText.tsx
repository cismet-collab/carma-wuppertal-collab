import { Link } from "../../helper-overlay/components/Link";

export const FeatureInfoText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Wechselschalter zum An-/Abschalten des Sachdatenabfrage-Modus (<b>2D</b>) | 
          blau unterstrichene <Link target="LAYERBUTTONS">Kartensteuerelemente</Link> kennzeichnen abfragbare Kartenebenen | 
          zum Abfragen in Karte (Placemark-Symbol) oder auf Objekt (Hervorhebung mit Highlight-Stil) klicken/tippen | 
          mehrere Kartenebenen mit einem Klick abfragen | Ergebnisanzeige in der <Link target="INFOBOX">Info-Box</Link>
        </div>
      </ul>
    );
  };