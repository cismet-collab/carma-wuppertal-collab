import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const ApplicationMenuText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Bedienungsanleitung und An-/Abmeldung (2D und 3D)</b>
        <br /> kompaktes Akkordeon-Design für Bedienungs- und Hintergrundinformationen 
        | diverse Verknüpfungen mit{" "}
        <HelpOverlayLink target="HILFE_OVERLAY">Hilfefolie</HelpOverlayLink>{" "}| An- und Abmeldung 
        für Nutzer/innen mit erweiterten Rechten (Funktionen und Inhalte)
      </div>
    </ul>
  );
};
