import { MenuFooter } from "../commons";

interface FooterProps {
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const Footer = ({
  version,
  setAppMenuActiveMenuSection,
}: FooterProps) => {
  return (
    <MenuFooter
      title="B-Plan-Auskunft Wuppertal"
      version={version}
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      sectionKey="hintergrundkarte"
      hintergrundkarten={
        <span>
          <a
            target="_rvrReference"
            rel="noopener noreferrer"
            href="https://www.rvr.ruhr/?id=1002#c179626"
          >
            Stadtkarte 2.0 © RVR
          </a>{" "}
          | Amtliche Basiskarte (ABK), B-Plan-Geltungsbereiche (
          <a
            className="pleaseRenderAsLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://offenedaten-wuppertal.de/dataset/rechtsverbindliche-bebauungspl%C3%A4ne-wuppertal"
          > 
            rechtswirksam
          </a>{" "}
          | laufende Verfahren) © Stadt Wuppertal |
          basemap.de web Vektor © GeoBasis-DE / BKG
        </span>
      }
    />
  );
};


