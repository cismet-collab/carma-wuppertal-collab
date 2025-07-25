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
import extServiceBackgroundImage from "./assets/extServiceBackground.jpg";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { Footer } from "./Footer";
export { tooltipText } from "./tooltips";
export { extServiceText } from "./ExtService";
export { extServiceBackgroundImage };
export { searchTextPlaceholder } from "./searchTextPlaceholder";
export { mobileInfo } from "./mobileInfo";
export { elements as geoElements } from "./elements";
export { demoElements } from "./demoElements";
export { backgroundSettings } from "./backgroundSettings";
export { additionalInfoFactory } from "./sachdatenabfrage-modals/helper/factory";
import "./geoportal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

interface CollabedHelpComponentProps {
  versionString: string;
  showOverlayFromOutside?: (key?: string) => void;
  loginFormToggle?: () => void;
  isLoginFormVisible?: boolean;
  loginForm?: React.ReactNode;
  loginFormTrigger?: React.ReactNode;
}

const getCollabedHelpComponentConfig = ({
  versionString,
  showOverlayFromOutside = () => {},
  loginFormToggle = () => {},
  isLoginFormVisible = false,
  loginForm,
  loginFormTrigger,
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
    <Help05Introduction
      showOverlayFromOutside={showOverlayFromOutside}
      isLoginFormVisible={isLoginFormVisible}
      loginForm={loginForm}
    />
  );
  const menuIcon = "info";
  const menuTitle = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>Kompaktanleitung und Hintergrundinformationen</span>
      {loginForm && loginFormTrigger
        ? loginFormTrigger
        : loginForm && (
            <Button type="text" onClick={loginFormToggle}>
              <FontAwesomeIcon icon={faKey} size="lg" />
            </Button>
          )}
    </div>
  );
  const MenuSections = () => {
    const { setAppMenuActiveMenuSection } =
      useContext<typeof UIDispatchContext>(UIDispatchContext);

    return [
      <Help10DigitalerZwilling
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
        key="zwilling"
      />,
      <Help20HintergrundkarteAuswaehlen
        showOverlayFromOutside={showOverlayFromOutside}
        key="HintergrundkarteAuswaehlen"
      />,
      <Help30InKartePositionieren
        showOverlayFromOutside={showOverlayFromOutside}
        key="InKartePositionieren"
      />,
      <Help35KarteninhalteHinzufuegen
        showOverlayFromOutside={showOverlayFromOutside}
        key="KarteninhalteHinzufuegen"
      />,
      <Help40KarteninhalteUntersuchen
        showOverlayFromOutside={showOverlayFromOutside}
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
        key="KarteninhalteUntersuchen"
      />,
      <Help45KartenDrucken key="KartenDrucken" />,
      <Help50MeinStandort
        showOverlayFromOutside={showOverlayFromOutside}
        key="MeinStandort"
      />,
      <Help90Haftungsausschluss key="Haftungsausschluss" />,
    ];
  };

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

export { getCollabedHelpComponentConfig };
