import { Link } from "../../helper-overlay/components/Link";

export const BackgroundSelectionText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Wechselschalter für die Auswahl der Hintergrundkarte (<b>2D</b>) bzw. des 3D-Modells (<b>3D</b>) 
        </div>
      </ul>
    );
  };