import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { TopicMapContext } from "react-cismap/contexts/TopicMapContextProvider";
import {
  Footer,
  Introduction,
  Datengrundlage,
  Karteninhalt,
  InKartePositionieren,
  Standort,
  Modellberechnungen,
  Aussagekraft,
} from ".";

const getCollabedHelpComponentConfig = ({
  version,
  versionString,
  reactCismapRHMVersion,
  footerLogoUrl,
  email,
}) => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);
  const MyFooter = () => {
    return (
      <Footer
        version={versionString}
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      />
    );
  };

  const menuIntroduction = <Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Datengrundlage
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
    />,
    <Karteninhalt setAppMenuActiveMenuSection={setAppMenuActiveMenuSection} />,
    <InKartePositionieren />,
    <Standort />,
    <Modellberechnungen
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
    />,
    <Aussagekraft />,
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
