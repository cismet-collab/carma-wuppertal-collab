import { Link } from "../../helper-overlay/components/Link";

export const FullScreenModeText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Wechselschalter zum Ein-/Ausschalten des Vollbildmodus (2D und 3D)</b><br/>
        Ausblenden der Bedienungselemente des Browsers erzeugt maximalen Platz
        für das Geoportal | Vollbildmodus kombinierbar mit{" "}
        <Link target="MESSUNGEN">Modus Strecke/Fläche messen</Link> oder{" "} 
        <Link target="SACHDATENABFRAGE">Modus Multi-Sachdatenabfrage</Link> | 
        Beenden auch mit esc-Taste
      </div>
    </ul>
  );
};
