import Help05Introduction from "./help/Help05Introduction";
import Help10UeberBelis from "./help/Help10UeberBelis";
import Help15AnmeldenNavigation from "./help/Help15AnmeldenNavigation";
import Help20Karte from "./help/Help20Karte";
import Help25ObjekteFinden from "./help/Help25ObjekteFinden";
import Help27LayerFilter from "./help/Help27LayerFilter";
import Help30ObjekteAnsehen from "./help/Help30ObjekteAnsehen";
import Help35ObjekteBearbeiten from "./help/Help35ObjekteBearbeiten";
import Help40Messungen from "./help/Help40Messungen";
import Help42Dokumente from "./help/Help42Dokumente";
import Help45Arbeitsauftraege from "./help/Help45Arbeitsauftraege";
import Help50Schluesseltabellen from "./help/Help50Schluesseltabellen";
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
    <Help27LayerFilter key="layer-filter" />,
    <Help30ObjekteAnsehen key="objekte-ansehen" />,
    <Help35ObjekteBearbeiten key="objekte-bearbeiten" />,
    <Help40Messungen key="messungen" />,
    <Help42Dokumente key="dokumente" />,
    <Help45Arbeitsauftraege key="arbeitsauftraege" />,
    <Help50Schluesseltabellen key="schluesseltabellen" />,
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
