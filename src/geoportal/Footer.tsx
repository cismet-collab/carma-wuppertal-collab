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
      title="DigiTal Zwilling / Geoportal"
      version={version}
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      skipTeilzwilling={true}
    />
  );
};
