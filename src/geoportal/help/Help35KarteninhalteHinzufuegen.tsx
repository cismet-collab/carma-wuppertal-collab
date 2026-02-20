import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { Link } from "react-scroll";
import addLayers from "../secondary/assets/add-layers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Component = ({ 
  showOverlayFromOutside,
  setAppMenuActiveMenuSection,
}) => {
  return (
    <GenericModalMenuSection
      sectionKey="karteninhalte"
      sectionTitle="Karteninhalte hinzufügen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Das Herzstück des Geoportals ist der Dialog "Karteninhalte
            hinzufügen" (erreichbar über das Symbol{" "}
            <img src={addLayers} style={{ height: "18px" }} /> in der
            Menüleiste). Hier können Sie das gesamte Datenangebot des 
            DigiTal Zwillings durchsuchen und die für Sie interessanten Inhalte 
            als weitere Kartenebenen zur Kartenansicht hinzufügen. Damit Sie sich 
            im umfangreichen Angebot besser zurechtfinden, sind die Inhalte 
            übersichtlich sortiert: vertikal nach ihrer Art (z. B. Kartenebenen, 
            Teilzwillinge) und horizontal nach Themen (z. B. Planung, Umwelt, Verkehr). 
            Wenn Sie im linken Navigationsbereich z. B. auf <FontAwesomeIcon icon={faMap} />{" "}
            <strong>Kartenebenen</strong> klicken, erscheinen im Hauptbereich Vorschaubilder 
            aller verfügbaren Kartenebenen. Klicken Sie zusätzlich oben auf ein Thema wie z. B.
            "Planung", wird zum entsprechenden Themenblock innerhalb der Kartenebenen 
            gesprungen. Jedes Vorschaubild enthält nützliche Funktionen: Mit einem Klick auf den 
            Wechselschalter <FontAwesomeIcon icon={faChevronDown} /> bzw.{" "}
            <FontAwesomeIcon icon={faChevronUp} /> können Sie weitere Informationen zur 
            jeweiligen Kartenebenebene auf- bzw. zuklappen. Im Informationsbereich finden 
            Sie auch Schaltflächen zum Hinzufügen und Favorisieren der Kartenebene.  
            Alternativ können Sie diese Funktionen auch direkt über die Symbole{" "}
            <FontAwesomeIcon icon={faPlus} /> und{" "}
            <FontAwesomeIcon icon={faStar} /> im Vorschaubild auslösen. Mit "Hinzufügen"
            wird die gewählte Kartenebene sofort in die aktuelle Kartenansicht geladen und 
            rechts neben dem Hintergrund-Steuerelement als neues Ebenen-Steuerelement 
            angezeigt. Mit "Favorisieren" speichern Sie die Kartenebene in Ihrem persönlichen
            Bereich "Favoriten" unter "Meine Kartenebenen". Zu Ihren Favoriten gelangen Sie, 
            indem Sie im linken Navigationsbereich auf das oberste Symbol{" "}
            <FontAwesomeIcon icon={faStar} /> <strong>Favoriten</strong>{" "}klicken.
            Das Speichern der Favoriten benutzt den Cache-Speicher Ihres
            Browsers. Beachten Sie dabei: Ihre Favoriten werden im Zwischenspeicher 
            (Cache) Ihres Browsers gespeichert. Wenn Sie diesen Speicher leeren, 
            gehen auch Ihre Favoriten verloren.
          </p>
          <p>
            In der erweiterten Infoansicht einer Kartenebene finden Sie zusätzlich 
            eine Vorschau-Schaltfläche. Damit können Sie schnell sehen, welche 
            Inhalte diese Kartenebene im aktuellen Kartenausschnitt bietet. Der 
            Dialog "Karteninhalte hinzufügen" wird dafür so weit nach unten geschoben, 
            dass der Kartenausschnitt fast vollständig sichtbar ist. Wenn Sie die Vorschau 
            beenden möchten, genügt ein Klick ins Kartenfenster oder das Drücken der Esc-Taste. 
            Wenn Sie hingegen den Dialog mit "x" schließen, wird die Kartenebene übernommen und 
            angezeigt.
          </p>
          <p>
            Ein weiterer Bereich im Dialog "Karteninhalte hinzufügen" ist{" "}
            <FontAwesomeIcon icon={faBook} />{" "}<strong>Teilzwillinge</strong>.
            Hier werden im Hauptbereich Vorschaubilder für die themenspezifischen 
            Kartenanwendungen angezeigt, die zum DigiTal Zwilling gehören. Diese 
            sogenannten Teilzwillinge stellen jeweils einen bestimmten Ausschnitt 
            aus den Daten und Methoden des DigiTal Zwillings für spezielle 
            Anwendungsfälle bereit. Sie öffnen sich nicht innerhalb des Geoportals, 
            sondern in einem neuen Browser-Tab. Im Bereich{" "}
            <FontAwesomeIcon icon={faMapPin} />{" "}<strong>Sensoren</strong> finden 
            Sie dynamische Kartenebenen, die die Position und ggf. aktuelle Messwerte 
            der Wuppertaler Smart-City-Sensoren visualisieren. Das Sensordatenangebot 
            befindet sich noch in der Aufbauphase. Informationen zu den aktuellen 
            Messwerten eines Sensors erhalten Sie rechts unten in der Infobox
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
            und vollständig in der Datenblattansicht, s. 
            <Link
              className="renderAsLink"
              smooth={true}
              delay={100}
              onClick={() => setAppMenuActiveMenuSection("untersuchen")}
            >
              Karteninhalte untersuchen
            </Link>
            .{" "} 
            Unter{" "}<FontAwesomeIcon icon={faList} />{" "}<strong>Entdecken</strong> 
            {" "}stehen Ihnen vordefinierte Karten (Kombinationen von Kartenebenen) für typische 
            Fragestellungen zur Verfügung, die sich in der Praxis bewährt haben.
            {" "}<strong>Profi-Tipp</strong>: Zwar gibt es aktuell noch keinen eigenen Dialog zum 
            Hinzufügen externer WMS-Dienste (also Kartendienste, die nicht von der Stadt 
            Wuppertal stammen), die Funktion dafür ist aber bereits integriert. Wenn Sie 
            einen WMS-Capabilities-Link z. B. in der Adresszeile Ihres Browsers markieren 
            und mit gedrückter linker Maustaste ins Kartenfenster ziehen, öffnet sich 
            automatisch der Dialog "Karteninhalte hinzufügen" – diesmal mit den Kartenebenen 
            dieses Dienstes unter der zusätzlichen thematischen Kategorie "Externe Dienste". 
            Diese Kartenebenen können Sie wie gewohnt zur Karte hinzufügen oder favorisieren.
          </p>
          <p>
            Der schnellste Weg, passende Karteninhalte zu finden, ist die Suchfunktion ganz 
            oben im Dialog. Geben Sie einfach einen Begriff ein (z. B. "Kita") und das System 
            filtert alle Kategorien gleichzeitig nach diesem Begriff. Dabei werden nicht nur die 
            Titel der Karteninhalte durchsucht, sondern auch die Beschreibungstexte in der 
            erweiterten Info-Ansicht und die Schlüsselwörter in deren Fußzeile. Neben den 
            Kategorie-Symbolen erscheinen dabei Zahlen, die angeben, wie viele Treffer es 
            in den jeweiligen Kategorien gibt. Sobald Treffer gefunden wurden, wird im linken 
            Navigationsbereich das Symbol{" "}<FontAwesomeIcon icon={faSearch} />{" "}
            <strong>Suchergebnisse</strong> aktiviert. Dort finden Sie alle gefundenen 
            Karteninhalte auf einen Blick, nach Themen gruppiert. Wenn Sie Ihre Eingabe mit 
            der Enter-Taste abschließen, gelangen Sie automatisch zu den Suchergebnissen. 
          </p>
          <p className="hide-on-small-screens">
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("MENULEISTE");
              }}
            >
              zur Hilfefolie
            </HelpOverlayLink>
          </p>
        </div>
      }
    />
  );
};
export default Component;
