import { useContext } from "react";
import Help05Introduction from "./help/Help05Introduction";
import Help10DigitalerZwilling from "./help/Help10DigitalerZwilling";
import Help20HintergrundkarteAuswaehlen from "./help/Help20HintergrundkarteAuswaehlen";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help35KarteninhalteHinzufuegen from "./help/Help35KarteninhalteHinzufuegen";
import Help40KarteninhalteUntersuchen from "./help/Help40KarteninhalteUntersuchen";
import Help45KartenDrucken from "./help/Help45KartenDrucken";
import Help50MeinStandort from "./help/Help50MeinStandort";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { Footer } from "./Footer";
export { tooltipText } from "./tooltips";
export { searchTextPlaceholder } from "./searchTextPlaceholder";
export { elements as geoElements } from "./elements";
export { demoElements } from "./demoElements";
export { backgroundSettings } from "./backgroundSettings";
export { additionalInfoFactory } from "./sachdatenabfrage-modals/helper/factory";

interface CollabedHelpComponentProps {
  versionString: string;
  showOverlayFromOutside?: (key: string) => void;
}

const getCollabedHelpComponentConfig = ({
  versionString,
  showOverlayFromOutside = () => {},
}: CollabedHelpComponentProps) => {
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

  const menuIntroduction = (
    <Help05Introduction showOverlayFromOutside={showOverlayFromOutside} />
  );
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help10DigitalerZwilling key="zwilling" />,
    <Help20HintergrundkarteAuswaehlen key="HintergrundkarteAuswaehlen" />,
    <Help30InKartePositionieren showOverlayFromOutside={showOverlayFromOutside} key="InKartePositionieren" />,
    <Help35KarteninhalteHinzufuegen key="KarteninhalteHinzufuegen" />,
    <Help40KarteninhalteUntersuchen key="KarteninhalteUntersuchen" />,
    <Help45KartenDrucken key="KartenDrucken" />,
    <Help50MeinStandort showOverlayFromOutside={showOverlayFromOutside} key="MeinStandort" />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
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
