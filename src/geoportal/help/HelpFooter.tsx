import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

interface HelpFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}

const HelpFooter: React.FC<HelpFooterProps> = ({
  title = "DigiTal Zwilling / Geoportal",
  version,
}) => {
  return (
    <div
      style={{
        fontSize: "11px",
        display: "flex",
        alignItems: "center",
        lineHeight: "17.5px",
      }}
    >
      <div>
        <b>
          {title} {version}
        </b>{" "}
        powered by{" "}
        <a href="https://cismet.de/" target="_cismet">
          cismet GmbH
        </a>{" "}
        auf Basis von{" "}
        <a href="http://leafletjs.com/" target="_cismet">
          Leaflet
        </a>{" "}
        und{" "}
        <a href="https://github.com/cismet/carma" target="_cismet">
          carma
        </a>{" "}
        <br />
        <b>Herausgeber Stadt Wuppertal:</b>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://digital-twin-wuppertal-live.github.io/legals/#/Datenschutzerklaerung_DigiTal-Zwilling_Geoportal"
        >
          Datenschutzerklärung
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://digital-twin-wuppertal-live.github.io/legals/#/Impressum_DigiTal-Zwilling_Geoportal"
        >
          Impressum
        </a>{" "}
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
