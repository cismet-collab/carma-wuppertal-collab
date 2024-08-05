import { Attribution } from "../commons/Attribution";
import { scroller } from "react-scroll";
interface MenuFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
}: MenuFooterProps) => {
  return (
    <div style={{ fontSize: "11px" }}>
      <b>Hintergrundkarten</b>: Stadtkarte 2.0 © RVR | True Orthophoto 2022 ©
      Stadt Wuppertal{" "}
      <a
        className="pleaseRenderAsLink"
        onClick={() => {
          setAppMenuActiveMenuSection("help");
          scroller.scrollTo("Datengrundlage", { containerId: "myMenu" });
        }}
      >
        (Details und Nutzungsbedingungen)
      </a>
      <br />
      <Attribution applicationName={title} applicationVersion={version} />
    </div>
  );
};
