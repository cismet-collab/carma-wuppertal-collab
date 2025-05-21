import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const HelpOverlayText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>
          Deckfolie mit positionsgetreuen Benennungen für alle Schaltflächen und
          Eingabefelder (2D und 3D)
        </b>
        <br /> auf Benennungen klicken für Text- und Bildinformationen zur
        Funktion und Bedienung ("Sekundärinformationen") | z. T. wechselseitige
        Verknüpfungen zwischen den Sekundärinformationen sowie mit der
        Bedienungsanleitung im{" "}
        <HelpOverlayLink target="MENU">Anwendungsmenü</HelpOverlayLink>
      </div>
    </ul>
  );
};
