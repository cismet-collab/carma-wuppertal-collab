import { Link } from "react-scroll";

export const MenuIntroduction = ({ setAppMenuActiveMenuSection }) => {
  return (
    <div>
      Informieren Sie sich mit der Wuppertaler Vorhabenkarte über die Projekte,
      die das Gesicht der Stadt verändern werden! Wählen Sie dazu unter{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="filter"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("filter")}
      >
        Filter
      </Link>{" "}
      die Themen aus, zu denen Sie sich solche Vorhaben anzeigen lassen wollen.
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
      können Sie die Darstellung der Hintergrundkarte und der
      Vorhaben an Ihre Vorlieben anpassen. Wählen Sie{" "}
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
      für eine Einordnung des Online-Stadtplans in das Gesamtsystem des 
      Digitalen Zwillings der Stadt Wuppertal ("DigiTal Zwilling").
    </div>
  );
};
