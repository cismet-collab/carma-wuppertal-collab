import { Link } from "../../helper-overlay/components/Link";

const Help05Introduction = ({ showOverlayFromOutside }) => {
  return (
    <span>
      An dieser Stelle entsteht bis Ende 2026 in einem mehrstufigen
      Entwicklungsprozess die Portalkomponente zum Urbanen Digitalen Zwilling
      der Stadt Wuppertal (<strong>DigiTal Zwilling / Geoportal</strong>). Die
      vorliegende Ausbaustufe 1 hat ihren Schwerpunkt noch bei der klassischen
      Aufgabe eines kommunalen Geoportals, einen digitalen Kartenatlas der Stadt
      in Form eines Baukastens kombinierbarer Kartenebenen bereitzustellen.
      Wählen Sie eine der folgenden farbigen Schaltflächen, um sich weitere
      Bedienungs- und Hintergrundinformationen zu dem entsprechenden Thema
      anzeigen zu lassen.{" "}
      <span className="hide-on-small-screens">
        Als alternative Unterstützung steht Ihnen auch eine{" "}
        <Link
          onClick={() => {
            showOverlayFromOutside();
          }}
        >
          Hilfefolie
        </Link>{" "}
        zur Verfügung, mit der Sie gezielt die Nutzung und Funktionsweise der
        einzelnen Bedienungselemente des Portals erforschen können.
      </span>
    </span>
    <br/>
  );
};

export default Help05Introduction;
