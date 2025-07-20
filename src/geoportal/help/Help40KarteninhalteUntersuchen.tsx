import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { Link } from "react-scroll";
import Icon from "react-cismap/commons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FeatureInfoIcon from "../../commons/FeatureInfoIcon";


const Help40KarteninhalteUntersuchen = ({
  showOverlayFromOutside,
  setAppMenuActiveMenuSection,
}) => {
  return (
    <GenericModalMenuSection
      sectionKey="untersuchen"
      sectionTitle="Karteninhalte untersuchen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Für jede Kartenebene, die Sie zusätzlich zur Hintergrundkarte geladen haben (s.{" "} 
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>
            ), wird rechts neben dem Hintergrund-Steuerelement{" "}
            <FontAwesomeIcon icon={faLayerGroup} /> ein eigenes Ebenen-Steuerelement 
            als zusätzliches Kartensteuerelement
            <span className="hide-on-small-screens">
              {" "}
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("LAYERBUTTONS");
                }}
              >
                (s. Hilfefolie)
              </HelpOverlayLink>
            </span>{" "}
            eingeblendet. Dies gilt allerdings nicht bei sehr kleinen Fenster- oder 
            Bildschirmgrößen (s.{" "}
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("standort")}
            >
              Nutzung auf mobilen Geräten
            </Link>
            ). Die Kartensteuerelemente stellen von links nach rechts den angezeigten
            "Kartenebenen-Stapel" dar: links (= unten) die Hintergrundkarte, 
            rechts (= oben) die darüberliegenden Ebenen. Während das Hintergrund-Steuerelement 
            fest an erster Stelle bleibt, können Sie die Reihenfolge der übrigen Ebenen individuell 
            anpassen – ziehen Sie dazu das entsprechende Steuerelement mit der linken Maustaste 
            an die gewünschte Position. So beeinflussen Sie die Reihenfolge, in der die Ebenen 
            in der Karte dargestellt werden. Ein Klick auf ein Kartensteuerelement öffnet eine 
            Bedienzeile zur Steuerung von Sichtbarkeit{" "}<FontAwesomeIcon icon="eye" />{" "} 
            und Transparenz der zugehörigen Kartenebene. Mit den Pfeiltasten{" "}
            <FontAwesomeIcon icon={faChevronLeft} />{" "}und{" "}<FontAwesomeIcon icon={faChevronRight} />{" "}
            wechseln Sie schnell zwischen benachbarten Steuerelementen. Der Wechselschalter 
            {" "}<FontAwesomeIcon icon={faChevronDown} />{" "}/{" "}
            <FontAwesomeIcon icon={faChevronUp} />{" "} ermöglicht es Ihnen, einen Informationsbereich 
            zur gewählten Ebene auf- bzw. wieder zuzuklappen. Dieser Bereich enthält dieselben Angaben, 
            die Ihnen auch im Dialog{" "} 
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>
            {" "}angeboten werden: eine Kurzbeschreibung, die Legende, 
            das Inhaltsverzeichnis des zugrundeliegenden Kartendienstes sowie 
            – falls verfügbar – einen Link zum zugehörigen Open-Data-Angebot.
            Ergänzend wird, sofern vorhanden, die Kurzbeschreibung der Datenquelle, 
            auf der die Kartenebene basiert, aus dem Metadatenkatalog{" "}
            <a
              target="_legal"
              href="https://www.geoportal.nrw/?activetab=portal"
            >
              GEOkatalog.NRW
            </a> 
            {" "}angezeigt, inklusive eines Links zu einem PDF-Dokument mit dem 
            vollständigen Metadatensatz.
          </p>
          <p>
            Viele unserer Kartenebenen stellen wir nicht nur über einen
            normierten Rasterdatendienst (Web Map Service - WMS) zur Verfügung,
            sondern auch als Vektor-Kartenebene. Technisch geschieht das über
            Mapbox-konforme Vector-Tiles-Services. Sofern verfügbar, verwendet
            das Geoportal für die Kartendarstellung immer die Vektordaten. Bei
            einer vollständig konfigurierten Vektor-Kartenebene können Sie die
            Objekte in der Karte per Mausklick direkt selektieren, jedoch immer
            nur genau ein Objekt. Die Darstellung des selektierten Objektes wird
            dann betont, i. d. R. durch eine blaue Umrandung. Probieren Sie das
            einmal mit den Kartenebenen "Kindertagesstätten" (Punkte) und
            "Wohnlagen 2025" (Flächen) aus! Wenn Sie mehrere Vektor-Kartenebenen
            geladen haben und selektierbare Objekte übereinander liegen, können
            Sie an diesen Stellen nur die Objekte der obersten Kartenebene
            anklicken. Schieben Sie sofern erforderlich einfach das
            Kartensteuerelement der Ebene, deren Objekte Sie abfragen wollen,
            ganz nach rechts. Sollten für das selektierte Objekt weitere
            Sachinformationen verfügbar sein, werden diese sofort rechts unten
            in der Info-Box
            <span className="hide-on-small-screens">
              {" "}
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("INFOBOX");
                }}
              >
                (s. Hilfefolie)
              </HelpOverlayLink>
            </span>{" "}
            angezeigt. In der Info-Box gibt es wenig Platz, deswegen beschränken
            wir uns dort auf die wichtigsten Informationen und bieten Ihnen über
            das Symbol <Icon name="info" /> eine graphisch gestaltete
            Datenblattansicht oder über <FeatureInfoIcon /> eine tabellarische
            Darstellung der vollständigen Objektinformationen an. In der
            Info-Box finden Sie außerdem weitere nützliche Funktionen und Links:
            Mit dem Lupensymbol <FontAwesomeIcon icon={faSearchLocation} /> wird
            die Karte auf das selektierte Objekt zentriert und gleichzeitig ein
            großer Betrachtungsmaßstab eingestellt. Zusätzlich werden Ihnen ggf.
            weiterführende (Kommunikations-) Links angezeigt (
            <Icon name="phone" /> Telefon, <Icon name="envelope-square" />{" "}
            E-Mail und <Icon name="external-link-square" /> Internet).
          </p>
        </div>
      }
    />
  );
};
export default Help40KarteninhalteUntersuchen;
