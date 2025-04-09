import { Link } from "react-scroll";

interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const Introduction = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
  return (
    <span>
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
      können Sie die Darstellung der Hintergrundkarte und der Objekte an Ihre
      Vorlieben anpassen. Im Abschnitt{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="legend"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("legend")}
      >
        Legende der Fachdaten
      </Link>{" "}
      finden Sie die Zeichenerklärung für diejenigen Fachdaten, die
      flächendeckend als Bestandteil der Hintergrundkarte angeboten werden
      (Gewässer- und Kanalnetz, Trinkwasserbrunnen). Wählen Sie{" "}
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
        className="useAClassNameToRenderProperLink"
        to="digiTal"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("digiTal")}
      >
        Urbaner Digitaler Zwilling
      </Link>{" "}
      für eine Einordnung des Umweltalarms in das Gesamtsystem des Digitalen
      Zwillings der Stadt Wuppertal ("DigiTal Zwilling").
    </span>
  );
};
