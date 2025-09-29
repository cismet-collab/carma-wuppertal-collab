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
      title="Teilzwilling Baumbewirtschaftung Wuppertal"
      version={version}
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
    />
  );
};
