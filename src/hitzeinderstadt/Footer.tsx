import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";
import { Attribution } from "../commons";

interface FooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const Footer = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
}: FooterProps) => {
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
        <b>Modellberechnungen</b>:{" "}
        <a
          className="pleaseRenderAsLink"
          target="_blank"
          href="https://www.stadtklima.ruhr/"
        >
          K.PLAN Klima.Umwelt & Planung GmbH{" "}
        </a>
        im Auftrag der{" "}
        <a
          className="pleaseRenderAsLink"
          target="_blank"
          href="https://www.wuppertal.de/microsite/klimaschutz/index.php"
        >
          Stadt Wuppertal / Klimaschutz
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
