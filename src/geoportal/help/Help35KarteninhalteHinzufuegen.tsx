import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
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

const Component = ({ showOverlayFromOutside }) => {
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
            <FontAwesomeIcon icon={faStar} /> im Vorschaubild auslösen. "Hinzufügen"
            bewirkt, dass diese Kartenebene im Geoportal direkt geladen und
            angezeigt wird. Außerdem wird für sie ein weiteres
            Ebenen-Steuerelement rechts neben dem Hintergrund-Steuerelement
            ergänzt. Durch "Favorisieren" wird die Kartenebene in Ihrem
            Favoriten-Bereich unter "Meine Kartenebenen" gespeichert. Zu Ihren
            Favoriten gelangen Sie, indem Sie oben im Navigationsbereich auf{" "}
            <FontAwesomeIcon icon={faStar} /> <strong>Favoriten</strong>{" "}
            klicken. Das Speichen der Favoriten benutzt den Cache-Speicher Ihres
            Browsers. Wenn Sie diesen Speicher löschen, verschwinden auch die
            dort gespeicherten Karteninhalte.
          </p>
          <p>
            In der erweiterten Info-Ansicht einer Kartenebene finden Sie auch
            eine Vorschau-Schaltfläche, mit der Sie schnell überprüfen können,
            welche Inhalte diese Kartenebene im aktuell eingestellten
            Kartenausschnitt liefert. Der Dialog "Karteninhalte hinzufügen" wird
            dazu so weit nach unten geschoben, dass Sie das Kartenfenster fast
            vollständig sehen können. Wenn Sie den Dialog durch Anklicken von
            "x" schließen, wird die Kartenebene geladen und angezeigt. Mit einem
            Klick irgendwo in das Kartenfeld oder mit der Taste "esc" beenden
            Sie die Vorschau.
          </p>
          <p>
            Wenn Sie im Navigationsbereich auf <FontAwesomeIcon icon={faBook} />{" "}
            <strong>Teilzwillinge</strong> klicken, werden im Hauptbereich
            Vorschaubilder für Kartenanwendungen angezeigt, die jeweils einen
            themenspezifischen Ausschnitt aus den Daten und Methoden des DigiTal
            Zwillings für einen konkreten Anwendungsfall umfassen. (Im Konzept
            des DigiTal Zwillings werden solche Anwendungen als "Teilzwillinge"
            bezeichnet.) Im Unterschied zu den Kartenebenen werden die
            Teilzwillinge nicht der Kartenansicht des Geoportals hinzugefügt,
            sondern in einer neuen Karteikarte Ihres Browsers geöffnet. Der
            Bereich <FontAwesomeIcon icon={faMapPin} />{" "}
            <strong>Sensoren</strong> befindet sich im Aufbau, er ist daher noch
            deaktiviert. Hier werden Sie zukünftig die Smart-City-Sensoren der
            Stadt Wuppertal finden, die Sie als dynamische Kartenebenen in das
            Geoportal integrieren können. Unter{" "}
            <FontAwesomeIcon icon={faList} /> <strong>Entdecken</strong> stellen
            wir Ihnen Karten (Kombinationen von Kartenebenen) mit konkreten
            Verwendungszwecken zur Verfügung, die sich zur Beantwortung
            wiederkehrender Fragen bewährt haben. <strong>Profi-Tipp</strong>:
            Es gibt zwar noch keinen Dialog zum Hinzufügen von
            WMS-Kartendiensten, die nicht von der Stadt Wuppertal bereitgestellt
            werden (Realisierung in Folgestufe). Die Funktionalität ist aber
            schon vorhanden. Markieren Sie dazu einfach einen
            WMS-Capabilities-Link z. B. in der Adresszeile Ihres Browsers und
            ziehen Sie ihn mit gedrückter linker Maustaste in das Kartenfeld.
            Der Dialog "Karteninhalte hinzufügen" öffnet sich dann mit den
            Kartenebenen dieses Dienstes in der zusätzlichen thematischen
            Kategorie "Externe Dienste". Sie können diese Kartenebenen genau wie
            die von der Stadt Wuppertal bereitgestellten Ihrer aktuellen
            Kartenansicht hinzufügen oder favorisieren.
          </p>
          <p>
            Der schnellste Weg zur Recherche nach Karteninhalten ist die
            Verwendung der Suche. Wenn Sie oben in der Eingabezeile "Suchbegriff
            eingeben" einen Text eingeben (probieren Sie es mal mit "Kita"),
            wird auf alle vertikalen und horizontalen Kategorien eine Filterung
            nach diesem Begriff angewendet. Dabei werden nicht nur die
            Bezeichnungen der Karteninhalte ausgewertet, sondern auch die
            beschreibenden Textelemente aus der erweiterten Info-Ansicht und die
            Schlüsselwörter aus der Fußzeile dieser Ansicht. Neben den
            Kategorie-Symbolen werden unmittelbar Zahlen eingeblendet, welche
            die Anzahl der Treffer in der jeweiligen Kategorie anzeigen. Sobald
            Ihre Suche Treffer ergibt, wird unten in der vertikalen Gliederung
            das Symbol <FontAwesomeIcon icon={faSearch} />{" "}
            <strong>Suchergebnisse</strong> aktiviert. Hier werden Ihnen alle
            Treffer Ihrer Suche auf einer Seite zusammengestellt. Die
            Kategoriekombinationen, in denen die Karteninhalte gefunden wurden,
            finden Sie hier in den jeweiligen Überschriften. Wenn Sie Ihre
            Texteingabe im Suchfeld mit der Eingabetaste ("return") abschließen,
            wird automatisch zu den Suchergebnissen gewechselt.
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
