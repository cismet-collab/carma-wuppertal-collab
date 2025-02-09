import { Link } from "../../helper-overlay/components/Link";

export const ApplicationMenuText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          <b>Bedienungsanleitung und Hintergrundinformationen (2D und 3D)</b><br/> kompaktes 
          Akkordeon-Design | diverse Verknüpfungen mit <Link target="HILFE_OVERLAY">Hilfefolie</Link>
        </div>
      </ul>
    );
  };