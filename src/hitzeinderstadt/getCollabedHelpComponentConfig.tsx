import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { Footer } from "./Footer";
// import { TopicMapContext } from "react-cismap/contexts/TopicMapContextProvider";
import { Help05Introduction as Introduction } from "./hitze/Help05Introduction";
import { Help10Datengrundlage as Datengrundlage } from "./hitze/Help10Datengrundlage";
import { Help20Karteninhalt as Karteninhalt } from "./hitze/Help20Karteninhalt";
import { Help30InKartePositionieren as InKartePositionieren } from "./hitze/Help30InKartePositionieren";
import { Help40MeinStandort as Standort } from "./hitze/Help40MeinStandort";
import { Help60Modellberechnungen as Modellberechnungen } from "./hitze/Help60Modellberechnungen";
import { Help70Aussagekraft as Aussagekraft } from "./hitze/Help70Aussagekraft";
import { GenericDigitalTwinReferenceSection } from "../commons";

export const getCollabedHelpComponentConfig = ({ versionString }) => {
  const MyFooter = () => {
    const { setAppMenuActiveMenuSection } =
      useContext<typeof UIDispatchContext>(UIDispatchContext);
    return (
      <Footer
        title="Hitzebelastungskarte Wuppertal"
        version={versionString}
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      />
    );
  };

  const menuIntroduction = <Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Datengrundlage />,
    <Karteninhalt />,
    <InKartePositionieren />,
    <Standort />,
    <Modellberechnungen />,
    <Aussagekraft />,
    <GenericDigitalTwinReferenceSection />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter: <MyFooter />,
  };
};
