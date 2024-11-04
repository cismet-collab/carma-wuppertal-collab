import { Link } from "../../helper-overlay/components/Link";

const Help05Introduction = ({ showOverlayFromOutside }) => {
  return (
    <span>
      Wählen Sie eine der folgenden farbigen Schaltflächen, um sich weitere 
      Bedienungs- und Hintergrundinformationen zu dem entsprechenden Thema 
      anzeigen zu lassen. Als alternative Unterstützung steht Ihnen auch eine{" "}
      <Link
        onClick={() => {
          showOverlayFromOutside();
        }}
      >
        Hilfefolie
      </Link>
      {" "}zur Verfügung, mit der Sie gezielt die Nutzung und Funktionsweise der
      einzelnen Bedienelemente des Portals erforschen können. 
    </span>
  );
};

export default Help05Introduction;
