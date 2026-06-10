import Help05Introduction from "./help/Help05Introduction";
import Help10UeberBelis from "./help/Help10UeberBelis";
import Help15AnmeldenNavigation from "./help/Help15AnmeldenNavigation";
import Help20Karte from "./help/Help20Karte";
import Help25ObjekteFinden from "./help/Help25ObjekteFinden";
import Help30ObjekteAnsehen from "./help/Help30ObjekteAnsehen";
import Help35ObjekteBearbeiten from "./help/Help35ObjekteBearbeiten";
import Help40MessungenDokumente from "./help/Help40MessungenDokumente";
import Help45Arbeitsauftraege from "./help/Help45Arbeitsauftraege";
import Help50Schluesseltabellen from "./help/Help50Schluesseltabellen";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import Footer from "./help/HelpFooter";

interface CollabedHelpComponentProps {
  versionString: string;
}

export const getCollabedHelpComponentConfig = ({
  versionString,
}: CollabedHelpComponentProps) => {
  const MyFooter = () => <Footer version={versionString} />;

  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";

  const MenuSections = () => [
    <Help10UeberBelis key="ueber-belis" />,
    <Help15AnmeldenNavigation key="anmelden-navigation" />,
    <Help20Karte key="karte" />,
    <Help25ObjekteFinden key="objekte-finden" />,
    <Help30ObjekteAnsehen key="objekte-ansehen" />,
    <Help35ObjekteBearbeiten key="objekte-bearbeiten" />,
    <Help40MessungenDokumente key="messungen-dokumente" />,
    <Help45Arbeitsauftraege key="arbeitsauftraege" />,
    <Help50Schluesseltabellen key="schluesseltabellen" />,
    <Help90Haftungsausschluss key="haftungsausschluss" />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections: <MenuSections />,
    menuFooter: <MyFooter />,
    modalTitleStyle: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: "4px",
    },
  };
};
