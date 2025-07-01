import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import Icon from "react-cismap/commons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="untersuchen"
      sectionTitle="Karteninhalte untersuchen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          Viele unserer Kartenebenen stellen wir nicht nur über einen normierten 
          Rasterdatendienst (Web Map Service - WMS) zur Verfügung, sondern auch als 
          Vektor-Kartenebene. Technisch geschieht das  über Mapbox-konforme Vector-Tiles-Services. 
          Sofern verfügbar, verwendet das Geoportal für die Kartendarstellung immer die Vektordaten. 
          Bei einer vollständig konfigurierten Vektor-Kartenebene können Sie die Objekte in der 
          Karte per Mausklick direkt selektieren, jedoch immer nur genau ein Objekt. Die 
          Darstellung des selektierten Objektes wird dann betont, i. d. R. durch eine blaue Umrandung. 
          Probieren Sie das einmal mit den Kartenebenen "Kindertagesstätten" (Punkte) und "Wohnlagen 2025" 
          (Flächen) aus! Wenn Sie mehrere Vektor-Kartenebenen geladen haben und selektierbare Objekte 
          übereinander liegen, können Sie an diesen Stellen nur die Objekte der obersten Kartenebene 
          anklicken. Schieben Sie sofern erforderlich einfach das Kartensteuerelement der Ebene, 
          deren Objekte Sie abfragen wollen, ganz nach rechts. Sollten für das selektierte Objekt weitere 
          Sachinformationen verfügbar sein, werden diese sofort rechts unten in der Info-Box
          <span className="hide-on-small-screens">
            {" "}
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("INFOBOX");
              }}
            >
              (s. Hilfefolie)
            </HelpOverlayLink>
          </span>.{" "} angezeigt. In der Info-Box gibt es wenig Platz, deswegen beschränken wir 
          uns dort auf die wichtigsten Informationen und bieten Ihnen über das Symbol (i-icon rund) 
          eine graphisch gestaltete Datenblattansicht oder über (i-icon eckig) eine tabellarische 
          Darstellung der vollständigen Objektinformationen an. In der Info-Box finden Sie außerdem 
          weitere nützliche Funktionen und Links: Mit dem Lupensymbol 
          {" "}<FontAwesomeIcon icon={faSearchLocation} />{" "}wird die 
          Karte auf das selektierte Objekt zentriert und gleichzeitig ein großer Betrachtungsmaßstab 
          eingestellt. Zusätzlich werden Ihnen ggf. weiterführende (Kommunikations-) Links angezeigt 
          (<Icon name="phone" />{" "}Telefon, {" "}<Icon name="envelope-square" />{" "}E-Mail und 
          {" "}<Icon name="external-link-square" />{" "}Internet).
        </div>
      }
    />
  );
};
export default Component;
