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
      title="FNP-Inspektor Wuppertal"
      version={version}
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      hintergrundkarten={
        <span>
          <a
            target="_rvrReference"
            rel="noopener noreferrer"
            href="https://www.rvr.ruhr/?id=1002#c179626"
          >
            Stadtkarte 2.0 © RVR
          </a>{" "}
          | Deutsche Grundkarte (DGK 5) Stand 1996 © Geobasis NRW |
          Flächennutzungsplan vom 17.01.2005 © Stadt Wuppertal
        </span>
      }
    />
  );
};
