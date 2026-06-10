interface HelpFooterProps {
  title?: string;
  version: string;
}

const HelpFooter: React.FC<HelpFooterProps> = ({
  title = "BelIS Desktop",
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
        <a href="https://github.com/cismet/carma" target="_cismet">
          carma
        </a>
        <br />
        <b>Herausgeber Stadt Wuppertal</b>
      </div>
    </div>
  );
};

export default HelpFooter;
