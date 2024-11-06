import { Link } from "../../helper-overlay/components/Link";

export const LocatorText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Wechselschalter für Aktivierung/Deaktivierung von Standort- und Blickrichtungsanzeige (<b>2D</b>, <b>mobil</b>) | 
        Durchmesser des Standortsymbols visualisiert Unsicherheit der Positionsbestimmung | 
        "Follow me"-Modus (Symbol auf Schaltfläche orange): Standortsymbol zentriert, automatische Kartennachführung | 
        Verschiebung der Karte bewirkt Umstellung auf bewegliche Positionsanzeige (blaues Symbol)<br/> 
        <Link section="standort">weitere Informationen</Link>{" "}
      </div>
    </ul>
  );
};
