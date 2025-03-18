import { Attribution } from "../../commons";
// import { scroller } from "react-scroll";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

interface HelpFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
  reactCismapRHMVersion?: string;
}

const HelpFooter: React.FC<HelpFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
  reactCismapRHMVersion = "(Version 2.1 | 10/2022)",
}) => {
  return (
    <div
      style={{
        fontSize: "11px",
        display: "flex",
        lineHeight: "17,5px",
      }}
    >
      <div>
        <b>Hintergrundkarten</b>: True Orthophoto 2024, Amtliche Basiskarte
        (ABK), Hillshade © Stadt Wuppertal | Stadtkarte 2.0 © RVR | basemap.de
        web Vektor © GeoBasis-DE / BKG{" "}
        <a
          className="pleaseRenderAsLink"
          onClick={() => {
            setAppMenuActiveMenuSection("datengrundlage");
          }}
        >
          (Details und Nutzungsbedingungen)
        </a>
        <br />
        <b>Modellierung und Simulationsberechnung</b>{" "}
        <span>{reactCismapRHMVersion}:</span>{" "}
        <a
          className="pleaseRenderAsLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wsw-online.de/energie/"
        >
          WSW Energie und Wasser AG{" "}
        </a>
        |{" "}
        <a
          className="pleaseRenderAsLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pecher.de/"
        >
          Dr. Pecher AG (Erkrath)
        </a>
        <br />
        <Attribution applicationName={title} applicationVersion={version} />
      </div>

      <img
        style={{ marginBottom: 0, marginLeft: 20, float: "right" }}
        alt="Logo DigiTal Zwilling"
        height="60"
        src={Logo_DigiTalZwilling}
      />
    </div>
  );
};

export default HelpFooter;
