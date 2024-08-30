import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
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

  const menuIntroduction = <Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Datengrundlage
      setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
    />,
    <Karteninhalt />,
    <InKartePositionieren />,
    <Standort />,
    <Modellberechnungen />,
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
