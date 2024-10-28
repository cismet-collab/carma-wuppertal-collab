import { Link } from "../../helper-overlay/components/Link";

export const GazetteerText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        2-stufiges Eingabeelement für Positionierung über Adresse oder andere Ortsbezeichnung 
        (<b>2D</b> und <b>3D</b>) | Text eingeben (min. 2 Zeichen) für unscharfe Suche im Verzeichnis der Ortsnamen | 
        Treffer werden nach Grad der Übereinstimmung mit Suchtext klassifiziert und gruppiert | 
        Eintrag in Trefferliste anklicken/antippen zur Zentrierung der Karte auf diesen Ort | 
        Ortsmarkierung in Karte durch Placemark-Symbol oder (bei Flächen) Spotlight-Effekt 
        <Link section="positionieren">weitere Informationen</Link>{" "}
      </div>
    </ul>
  );
};
