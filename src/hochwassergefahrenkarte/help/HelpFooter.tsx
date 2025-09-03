import { Attribution } from "../../commons";
// import { scroller } from "react-scroll";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

interface HelpFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}

const HelpFooter: React.FC<HelpFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
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
        <b>Hintergrundkarten</b>: True Orthophoto und 3D-Mesh 2024, Amtliche Basiskarte
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
        <b>Modellierung</b>:{" "}
        <a
          className="pleaseRenderAsLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.gis-rest.nrw.de/atomFeed/rest/atom/182925c1-879f-4054-bd69-b6f28e05b270.html"
        >
          Land NRW{" "}
        </a>
        (2. Umsetzungszyklus der EU-HWRM-RL 12/2019)
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
