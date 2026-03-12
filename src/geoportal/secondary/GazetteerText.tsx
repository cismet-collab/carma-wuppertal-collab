import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const GazetteerText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>
          2-stufiges Eingabeelement für Positionierung über Ortsbezeichnungen, umschaltbar 
          zwischen &quot;Adressen und Orte&quot; und &quot;Flurstücke&quot; (2D und 3D)
        </b>
        <br /> 
            bei &quot;Adressen und Orte&quot; (voreingestellter Modus) Text eingeben für unscharfe Suche 
            im Verzeichnis der Ortsnamen | Treffer werden nach Grad der Übereinstimmung mit Suchtext 
            klassifiziert und gruppiert | Eintrag in Trefferliste anklicken zur Zentrierung der Karte 
            auf diesen Ort | Ortsmarkierung in Karte durch Placemark-Symbol oder (bei Flächen) 
            Spotlight-Effekt | bei &quot;Flurstücke&quot; nacheinander Eintrag aus Vorschlagsliste auswählen 
            für Bestandteile des Flurstückskennzeichens, Suchtexte können zur Verkürzung der Listen eingegeben 
            werden (unscharfe Suche hier nur beim Gemarkungsnamen)
        <br />
        <HelpOverlayLink section="positionieren">
          weitere Informationen
        </HelpOverlayLink>{" "}
      </div>
    </ul>
  );
};
