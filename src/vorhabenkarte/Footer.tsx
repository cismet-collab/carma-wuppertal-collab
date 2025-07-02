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
      title="Vorhabenkarte Wuppertal"
      version={version}
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
    />
  );
};
