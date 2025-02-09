import { Link } from "../../helper-overlay/components/Link";

export const NorthOrientationText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>3D-Darstellung nach Norden ausrichten und zurück in die Senkrechtperspektive kippen</b><br/>  
        kartenartige Darstellung im 3D-Modus | automatische Ausführung beim{" "}  
        <Link target="2D_3D_TOGGLE">Wechsel von 3D auf 2D</Link>
      </div>
    </ul>
  );
};
