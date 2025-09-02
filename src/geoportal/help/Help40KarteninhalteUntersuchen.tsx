import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { Link } from "react-scroll";
import Icon from "react-cismap/commons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FeatureInfoIcon from "../../commons/FeatureInfoIcon";
import MeasureIcon from "../../commons/assets/measure.png";

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
            Für jede Kartenebene, die Sie zusätzlich zur Hintergrundkarte
            geladen haben (s.{" "}
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>
            ), wird rechts neben dem Hintergrund-Steuerelement{" "}
            <FontAwesomeIcon icon={faLayerGroup} /> ein eigenes
            Ebenen-Steuerelement als zusätzliches Kartensteuerelement
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
            eingeblendet. Dies gilt allerdings nicht bei sehr kleinen Fenster-
            oder Bildschirmgrößen (s.{" "}
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("standort")}
            >
              Nutzung auf mobilen Geräten
            </Link>
            ). Die Kartensteuerelemente stellen von links nach rechts den
            angezeigten "Kartenebenen-Stapel" dar: links (= unten) die
            Hintergrundkarte, rechts (= oben) die darüberliegenden Ebenen.
            Während das Hintergrund-Steuerelement fest an erster Stelle bleibt,
            können Sie die Reihenfolge der übrigen Ebenen individuell anpassen –
            ziehen Sie dazu das entsprechende Steuerelement mit der linken
            Maustaste an die gewünschte Position. So beeinflussen Sie die
            Reihenfolge, in der die Ebenen in der Karte dargestellt werden. Ein
            Klick auf ein Kartensteuerelement öffnet eine Bedienzeile zur
            Steuerung von Sichtbarkeit <FontAwesomeIcon icon="eye" /> und
            Transparenz der zugehörigen Kartenebene. Mit den Pfeiltasten{" "}
            <FontAwesomeIcon icon={faChevronLeft} /> und{" "}
            <FontAwesomeIcon icon={faChevronRight} /> wechseln Sie schnell
            zwischen benachbarten Steuerelementen. Der Wechselschalter{" "}
            <FontAwesomeIcon icon={faChevronDown} /> /{" "}
            <FontAwesomeIcon icon={faChevronUp} /> ermöglicht es Ihnen, einen
            Informationsbereich zur gewählten Ebene auf- bzw. wieder
            zuzuklappen. Dieser Bereich enthält dieselben Angaben, die Ihnen
            auch im Dialog{" "}
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("karteninhalte")}
            >
              Karteninhalte hinzufügen
            </Link>{" "}
            angeboten werden: eine Kurzbeschreibung, die Legende, das
            Inhaltsverzeichnis des zugrundeliegenden Kartendienstes sowie –
            falls verfügbar – einen Link zum zugehörigen Open-Data-Angebot.
            Ergänzend wird, sofern vorhanden, die Kurzbeschreibung der
            Datenquelle, auf der die Kartenebene basiert, aus dem
            Metadatenkatalog{" "}
            <a
              target="_legal"
              href="https://www.geoportal.nrw/?activetab=portal"
            >
              GEOkatalog.NRW
            </a>{" "}
            angezeigt, inklusive eines Links zu einem PDF-Dokument mit dem
            vollständigen Metadatensatz.
          </p>
          <p>
            Viele unserer Kartenebenen stehen nicht nur als Rasterdaten über
            einen Web Map Service (WMS) zur Verfügung, sondern auch als
            Vektor-Kartenebenen. Diese basieren technisch auf Mapbox-konformen
            Vector-Tiles-Services. Wenn für eine Ebene Vektordaten vorhanden
            sind, nutzt das Geoportal bevorzugt diese, da sie interaktiver und
            schneller darstellbar sind. Bei vollständig konfigurierten
            Vektor-Kartenebenen können Sie einzelne Objekte direkt per Mausklick
            in der Karte selektieren – allerdings jeweils nur ein Objekt zur
            gleichen Zeit. Das gewählte Objekt wird dabei deutlich
            hervorgehoben, in der Regel durch eine blaue Umrandung. Probieren
            Sie diese Funktion zum Beispiel mit den Kartenebenen
            "Kindertagesstätten" (Punkte) oder "Wohnlagen 2025" (Flächen) aus!
            Wenn mehrere Vektor-Kartenebenen gleichzeitig aktiv sind und sich
            selektierbare Objekte überlagern, lässt sich an diesen Stellen immer
            nur das Objekt der obersten Kartenebene auswählen. Falls Sie ein
            Objekt aus einer anderen Ebene untersuchen möchten, schieben Sie
            einfach das zugehörige Kartensteuerelement ganz nach rechts, um es
            in der Darstellung nach oben zu holen. Wenn zum gewählten Objekt
            zusätzliche Informationen vorliegen, werden diese rechts unten in
            der Info-Box
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
            angezeigt. Da dort nur begrenzt Platz zur Verfügung steht, werden
            dort nur die wichtigsten Angaben eingeblendet. Falls darüber hinaus
            weitere Informationen verfügbar sind, können Sie über das Symbol{" "}
            <Icon name="info" /> eine graphisch gestaltete Datenblattansicht
            oder über <FeatureInfoIcon /> eine tabellarische Darstellung der
            vollständigen Objektinformationen öffnen. Die Info-Box bietet
            darüber hinaus weitere nützliche Funktionen: Ein Klick auf das
            Lupensymbol <FontAwesomeIcon icon={faSearchLocation} /> zentriert
            die Karte auf das ausgewählte Objekt und stellt automatisch einen
            großen Ansichtsmaßstab ein. Falls vorhanden, werden zudem
            weiterführende Kommunikationslinks eingeblendet (
            <Icon name="phone" /> Telefon, <Icon name="envelope-square" />{" "}
            E-Mail und <Icon name="external-link-square" /> Internet).
          </p>
          <p>
            Mit dem Wechselschalter <FontAwesomeIcon icon={faInfo} /> im unteren
            Bereich der Werkzeugleiste auf der linken Seite können Sie den
            Multi-Sachdatenabfragemodus ein- bzw. ausschalten. In diesem Modus
            verwandelt ein Mausklick den Mauszeiger in ein Fadenkreuz und es
            wird eine Sachdatenabfrage auf allen aktuell sichtbaren Kartenebenen
            durchgeführt, die solche Abfragen grundsätzlich entgegennehmen
            ("thematischer Durchstich"). Diese "abfragbaren Kartenebenen"
            erkennt man an einem blauen Strich unter dem zugehörigen
            Ebenen-Steuerelement. Im Multi-Sachdatenabfragemodus können Sie auch
            solche Kartenebenen abfragen, die als Rasterdaten über einen WMS
            bereitgestellt werden und deren Objekte nicht per Mausklick
            selektierbar sind. Zu jedem Ergebnis einer Multi-Sachdatenabfrage
            wird eine separate Info-Box angezeigt. Einige Kartenebenen liefern
            mehrere Ergebnisse, z. B. erhält man über die Kartenebenen "ALKIS
            Flurstücke / Gebäude (schwarz bzw. gelb)" Sachdaten sowohl für die
            Flurstücke als auch die Gebäude. Zusätzlich wird in diesem Modus
            auch immer eine Info-Box "Position" mit den Koordinaten des
            Fadenkreuz-Zentrums ausgeprägt (geographische Breite und Länge in
            Dezimalgrad im Bezugssystem ETRS89). Mehrfache Info-Boxen werden
            überlappend in Form eines Stapels von Info-Boxen dargestellt. Mit
            einem Klick auf den Titelbalken einer hinteren Info-Box wird diese
            in den Vordergrund geholt und damit aktiviert. Dazu werden einfach
            die Positionen der angeklickten und der bisher oben liegenden
            Info-Box getauscht. Nach Möglichkeit wird das Objekt, das zu der
            aktiven Info-Box gehört, in der Karte durch eine blaue Umrandung
            hervorgehoben (setzt eine vollständig konfigurierte
            Vektor-Kartenebenen mit Zeichenvorschrift für die betonte
            Darstellung voraus) .
            <span className="hide-on-small-screens">
              {" "}
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("SACHDATENABFRAGE");
                }}
              >
                (s. Hilfefolie)
              </HelpOverlayLink>
            </span>{" "}
          </p>
          <p>
            Mit dem Wechselschalter{" "}
            <img alt="Messmodus" height={20} width={20} src={MeasureIcon} />{" "}
            links unten in der Werkzeugleiste können Sie den Messungsmodus ein- bzw. 
            ausschalten. In diesem Modus legen Sie durch Ihre Mausklicks Messgeometrien 
            in Form von Linienzügen oder geschlossenen Flächen an. Einen Linienzug beenden 
            Sie durch erneutes Anklicken des letzten Punktes oder einfach durch einen Doppelklick. 
            Eine Fläche schließen Sie durch erneutes Anklicken des Startpunktes. Die 
            Messungsergebnisse (Strecken bei den Linienzügen, Strecken und Flächeninhalte bei den 
            geschlossenen Flächen) werden bereits während des Anlegens der Messgeometrie laufend 
            in der Info-Box angezeigt.
          </p>
        </div>
      }
    />
  );
};
export default Help40KarteninhalteUntersuchen;
