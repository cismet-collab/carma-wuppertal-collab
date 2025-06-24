import React from "react";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";

interface Help05IntroductionProps {
  showOverlayFromOutside: () => void;
  isLoginFormVisible?: boolean;
  loginForm?: React.ReactNode;
}

const Help05Introduction = ({
  showOverlayFromOutside,
  isLoginFormVisible,
  loginForm,
}: Help05IntroductionProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {isLoginFormVisible && loginForm && loginForm}
      <span>
        An dieser Stelle entsteht bis Ende 2026 in einem mehrstufigen
        Entwicklungsprozess die Portalkomponente zum Urbanen Digitalen Zwilling
        der Stadt Wuppertal (<strong>DigiTal Zwilling / Geoportal</strong>). Die
        vorliegende Ausbaustufe 1 hat ihren Schwerpunkt noch bei der klassischen
        Aufgabe eines kommunalen Geoportals, einen digitalen Kartenatlas der
        Stadt in Form eines Baukastens kombinierbarer Kartenebenen
        bereitzustellen. Wählen Sie eine der folgenden farbigen Schaltflächen,
        um sich weitere Bedienungs- und Hintergrundinformationen zu dem
        entsprechenden Thema anzeigen zu lassen.{" "}
        <span className="hide-on-small-screens">
          Als alternative Unterstützung steht Ihnen auch eine{" "}
          <HelpOverlayLink
            onClick={() => {
              showOverlayFromOutside();
            }}
          >
            Hilfefolie
          </HelpOverlayLink>{" "}
          zur Verfügung, mit der Sie gezielt die Nutzung und Funktionsweise der
          einzelnen Bedienungselemente des Portals erforschen können.
        </span>
        <br />
        <br />
      </span>
    </div>
  );
};

export default Help05Introduction;
