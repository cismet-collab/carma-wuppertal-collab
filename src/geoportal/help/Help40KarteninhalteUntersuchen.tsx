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
            Für jede Kartenebene, die Sie als Überlagerung der Hintergrundkarte
            hinzugeladen haben (s.{" "} 
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>
            ) wird rechts vom Hintergrund-Steuerelement{" "}
            <FontAwesomeIcon icon={faLayerGroup} /> ein Ebenen-Steuerelement als
            zusätzliches Kartensteuerelement
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
            angezeigt (nicht auf bei sehr kleinen Fenster- oder
            Bildschirmgrößen, s.{" "}
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("standort")}
            >
              Nutzung auf mobilen Geräten
            </Link>
            ). Die Kartensteuerelemente repräsentieren von links (= unten) bis
            rechts (= oben) den angezeigten "Kartenebenen-Stapel". Das
            Hintergrund-Steuerelement bleibt natürlich immer links, den Rest des
            Stapels können Sie aber durch Ziehen mit der linken Maustaste nach
            Ihren Wünschen umsortieren und damit die Darstellungsreihenfolge
            festlegen. Wenn Sie ein Kartensteuerelement anklicken, wird eine 
            Zeile mit Bedienelementen zur Steuerung von Sichtbarkeit{" "}
            <FontAwesomeIcon icon="eye" />{" "}
            und Transparenz der zugehörigen Kartenebene eingeblendet. Mit den 
            Pfeiltasten{" "}<FontAwesomeIcon icon={faChevronLeft} />{" "}und
            {" "}<FontAwesomeIcon icon={faChevronRight} />{" "}können Sie zum 
            jeweils benachbarten Kartensteuerelement wechseln. Mit dem Wechselschalter 
            {" "}<FontAwesomeIcon icon={faChevronDown} />{" "}/{" "}
            <FontAwesomeIcon icon={faChevronUp} />{" "} können Sie einen 
            Bereich mit weiteren Informationen zur Kartenebene auf- bzw. 
            zuklappen. Dort finden Sie dieselben Inhalte, die Ihnen auch schon im 
            Dialog{" "} 
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>
            {" "}angeboten worden sind (Kurzbeschreibung, Legende, Inhaltsverzeichnis 
            des Kartendienstes, ggf. Link zum Open-Data-Angebot). Sofern vorhanden wird 
            Ihnen zusätzlich die Kurzbeschreibung der Datenquelle, auf der die Kartenebene 
            basiert, aus dem Metadatenkatalog{" "}
            <a
              target="_legal"
              href="https://www.geoportal.nrw/?activetab=portal"
            >
              GEOkatalog.NRW
            </a> 
            {" "}angezeigt, zusammen mit einem  Link auf ein PDF-Dokument mit dem 
            vollständigen dort geführten Metadatensatz.
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
