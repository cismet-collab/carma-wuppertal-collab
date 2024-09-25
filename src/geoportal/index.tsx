import { useContext } from "react";
import Help05Introduction from "./help/Help05Introduction";
import Help15Datengrundlage from "./help/Help15Datengrundlage";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import Help98DigitalerZwilling from "./help/Help98DigitalerZwilling";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { Footer } from "./Footer";
export { tooltipText } from "./tooltips";
export { searchTextPlaceholder } from "./searchTextPlaceholder";
export { elements as geoElements } from "./elements";
export { demoElements } from "./demoElements";
export { backgroundSettings } from "./backgroundSettings";
export { additionalInfoFactory } from "./sachdatenabfrage-modals/helper/factory";

const getCollabedHelpComponentConfig = ({ versionString }) => {
  const MyFooter = () => {
    const { setAppMenuActiveMenuSection } =
      useContext<typeof UIDispatchContext>(UIDispatchContext);
    return (
      <Footer
        version={versionString}
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      />
    );
  };

  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help15Datengrundlage key="Datengrundlage" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
    <Help98DigitalerZwilling key="zwilling" />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter: <MyFooter />,
  };
};

export { getCollabedHelpComponentConfig };
