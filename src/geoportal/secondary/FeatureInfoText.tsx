import { HelpOverlayLink } from "../../helper-overlay/components/Link";

export const FeatureInfoText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>
          Wechselschalter zum Ein-/Ausschalten des Multi-Sachdatenabfragemodus
          (2D)
        </b>
        <br />
        blau unterstrichene{" "}
        <HelpOverlayLink target="LAYERBUTTONS">
          Kartensteuerelemente
        </HelpOverlayLink>{" "}
        kennzeichnen abfragbare Kartenebenen | in Karte klicken für Abfrage
        aller sichtbaren "blauen" Kartenebenen an dieser Stelle ("thematischer
        Durchstich") | Ergebnis- und zusätzliche Koordinatenanzeige in der{" "}
        <HelpOverlayLink target="INFOBOX">Info-Box</HelpOverlayLink>
      </div>
    </ul>
  );
};
