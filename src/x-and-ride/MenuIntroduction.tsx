import { Link } from "react-scroll";

interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuIntroduction: React.FC<MenuIntroductionProps> = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
  return (
    <span>
      Benutzen Sie die Auswahlmöglichkeiten unter{" "}
      <Link
        id="lnkHelp"
        to="help"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("filter")}
        className="renderAsLink"
      >
        Filter
      </Link>
      , um die in der Karte angezeigten Park+Ride- bzw. Bike+Ride-Anlagen auf
      die für Sie relevanten Anlagen zu beschränken. Über{" "}
      <Link
        id="lnkSettings"
        to="settings"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("settings")}
        className="renderAsLink"
      >
        Einstellungen
      </Link>{" "}
      können Sie die Darstellung der Hintergrundkarte und der Anlagen an Ihre
      Vorlieben anpassen. Wählen Sie{" "}
      <Link
        id="lnkHelp"
        to="help"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("help")}
        className="renderAsLink"
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
      für eine Einordnung der Park+Ride-Karte in das Gesamtsystem des Digitalen Zwillings der Stadt Wuppertal ("DigiTal Zwilling"). 
    </span>
  );
};
