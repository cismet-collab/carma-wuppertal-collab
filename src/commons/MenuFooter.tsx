import { Attribution } from "../commons/Attribution";
import { scroller } from "react-scroll";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

interface MenuFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection?: (arg: string) => void;
  hintergrundkarten?: string | JSX.Element;
  sectionKey?: string;
  skipHintergrundkarten?: boolean;
  skipTeilzwilling?: boolean;
  isTopicMap?: boolean;
}
const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
  hintergrundkarten = "Stadtkarte 2.0 © RVR | True Orthophoto 2024 © Stadt Wuppertal",
  sectionKey = "help",
  skipHintergrundkarten = false,
  skipTeilzwilling = false,
  isTopicMap = true,
}: MenuFooterProps) => {
  return (
    <div
      style={{
        fontSize: "11px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        {!skipHintergrundkarten && (
          <>
            <b>Hintergrundkarten</b>: {hintergrundkarten}{" "}
            <a
              className="pleaseRenderAsLink"
              onClick={() => {
                if (setAppMenuActiveMenuSection) {
                  setAppMenuActiveMenuSection(sectionKey);
                  setTimeout(() => {
                    scroller.scrollTo("Datengrundlage", {
                      containerId: "myMenu",
                    });
                  }, 0);
                }
              }}
            >
              (Details und Nutzungsbedingungen)
            </a>
            <br />
          </>
        )}
        <Attribution
          skipTeilzwilling={skipTeilzwilling}
          applicationName={title}
          applicationVersion={version}
          isTopicMap={isTopicMap}
        />
      </div>

      <a
        href="https://smart.wuppertal.de/projekte/digital-zwilling.php"
        target="_blank"
        style={{ flexShrink: "0" }}
        rel="noopener noreferrer"
      >
        <img
          style={{
            marginBottom: 0,
            marginLeft: 20,
            float: "right",
            height: "60px",
          }}
          alt="Logo DigiTal Zwilling"
          height="60"
          src={Logo_DigiTalZwilling}
        />
      </a>
    </div>
  );
};

export default MenuFooter;
