import { Link } from "react-scroll";

interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const MenuIntroduction = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
  return (
    <span>
      Über{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="filter"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("settings")}
      >
        Einstellungen
      </Link>{" "}
      können Sie die Darstellung der Hintergrundkarte und der Objekte an Ihre
      Vorlieben anpassen. Im Abschnitt <b>Legende der Fachdaten</b> finden Sie die 
      Zeichenerklärung für diejenigen Fachdaten, die flächendeckend als Bestandteil 
      der Hintergrundkarte angeboten werden (Gewässer- und Kanalnetz, Trinkwasserbrunnen). 
      Wählen Sie{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="settings"
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
      für eine Einordnung der Bäderkarte in das Gesamtsystem des Digitalen Zwillings der Stadt Wuppertal ("DigiTal Zwilling"). 
    </span>
  );
};