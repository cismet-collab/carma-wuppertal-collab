import { Link } from "react-scroll";

interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
  appMode: string;
}
export const MenuIntroduction: React.FC<MenuIntroductionProps> = ({
  setAppMenuActiveMenuSection,
  appMode,
}: MenuIntroductionProps) => {
  return (
    <span>
      <span>
        {appMode === "ORTE" && (
          <span>
            Benutzen Sie die Auswahlmöglichkeiten unter{" "}
            <Link
              className="useAClassNameToRenderProperLink"
              to="filter"
              containerId="myMenu"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("filter")}
            >
              Meine Klimaorte
            </Link>
            , um die in der Karte angezeigten vorbildlichen Klimaorte auf die
            für Sie relevanten Themen zu beschränken.
          </span>
        )}
        Über{" "}
        <Link
          className="useAClassNameToRenderProperLink"
          to="settings"
          containerId="myMenu"
          smooth={true}
          delay={100}
          onClick={() => setAppMenuActiveMenuSection("settings")}
        >
          Einstellungen
        </Link>{" "}
        können Sie die Darstellung der Hintergrundkarte und der klimarelevanten
        Themen an Ihre Interesse anpassen. Wählen Sie die{" "}
        <Link
          className="useAClassNameToRenderProperLink"
          to="help"
          containerId="myMenu"
          smooth={true}
          delay={100}
          onClick={() => setAppMenuActiveMenuSection("help")}
        >
          Kompaktanleitung
        </Link>{" "}
        für detailliertere Bedienungsinformationen und{" "}
      <Link
        id="lnkUDZ"
        to="digiTal"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("digiTal")}
        className="renderAsLink"
      >
        Urbaner Digitaler Zwilling
      </Link>{" "}
      für eine Einordnung der Klimaortkarte in das Gesamtsystem des Digitalen Zwillings der Stadt Wuppertal ("DigiTal Zwilling").
      </span>
    </span>
  );
};
