import { useContext } from "react";
import {
  Help05Introduction,
  //   Help20Karteninhalt,
  //   Help80ModellfehlerMelden,
  //   Help90Haftungsausschluss,
  //   Help99Footer,
} from "@cismet-collab/rainhazardmaps-base-texts";

import Help10Datengrundlage from "./help/Help10Datengrundlage";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help35KoppelungMitHochwassergefahrenkarte from "./help/Help35KoppelungMitHochwassergefahrenkarte";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help50WasserstandAbfragen from "./help/Help50WasserstandAbfragen";
import Help60SimulierteSzenarien from "./help/Help60SimulierteSzenarien";
import Help70AussagekraftDerSimulationen from "./help/Help70AussagekraftDerSimulationen";
import Help80ModellfehlerMelden from "./help/Help80ModellfehlerMelden";
import Help90Haftungsausschluss from "./help/Help90HaftungsausschlussWupp";
import Help98DigitalerZwilling from "./help/Help98DigitalerZwilling";
// import DigiTalLogo from "./help/assets/Logo_DigiTalZwilling.png";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import HelpFooter from "./help/HelpFooter";

interface HelpComponentConfigProps {
  version?: string;
  versionString: string;
  reactCismapRHMVersion: string;
  footerLogoUrl?: string;
  email?: string;
}

export const getCollabedHelpComponentConfig = ({
  versionString,
  //footerLogoUrl = DigiTalLogo,
  email,
}: HelpComponentConfigProps) => {
  const MyFooter = () => {
    const { setAppMenuActiveMenuSection } = useContext<typeof UIDispatchContext>(
      UIDispatchContext
    );
    return (
      <HelpFooter
        version={versionString}
        title="Starkregengefahrenkarte Wuppertal"
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      />
    );
  };

  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help10Datengrundlage key="Datengrundlage" />,
    <Help20Karteninhalt key="Karteninhalt" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help35KoppelungMitHochwassergefahrenkarte key="Koppelung" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help50WasserstandAbfragen key="WasserstandAbfragen" />,
    <Help60SimulierteSzenarien key="SimulierteSzenarien" />,
    <Help70AussagekraftDerSimulationen key="AussagekraftDerSimulationen" />,
    <Help80ModellfehlerMelden key="ModellfehlerMelden" email={email} />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
    <Help98DigitalerZwilling key="zwilling" email={email} />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter: <MyFooter />,
  };
};

export default { getCollabedHelpComponentConfig };
