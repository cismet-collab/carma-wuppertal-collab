import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { Link } from "../../helper-overlay/components/Link";
import addLayers from "../secondary/assets/add-layers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Component = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="karteninhalte"
      sectionTitle="Karteninhalte hinzufügen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Das Herzstück des Geoportals ist der Dialog "Karteninhalte hinzufügen" 
            (Symbol {" "}<img src={addLayers} style={{ height: "18px" }} />{" "} 
            in der Menüleiste), mit dem Sie das gesamte Datenangebot des DigiTal 
            Zwillings durchsuchen und für Sie interessante Inhalte als Kartenebene 
            hinzufügen können. Um Ihnen die Orientierung in dem umfangreichen Angebot 
            zu erleichtern, sind die Karteninhalte in vertikaler Richtung nach Art 
            und in horizontaler Richtung nach Thema geordnet. Wenn Sie also im 
            Navigationsbereich auf der linken Seite z. B. auf 
            {" "}<FontAwesomeIcon icon={faMap} />{" "} <strong>Kartenebenen</strong>{" "} 
            klicken, werden Vorschaubilder zu allen Kartenebenen in den Hauptbereich 
            des Dialogs geladen. Wenn Sie dann in der horizontalen Navigationsleiste 
            im Kopfbereich z. B. auf "Planung" klicken, wird im Hauptbereich auf den 
            Beginn des Blocks der Kartenebenen zum Thema "Planung" positioniert.
            Ausgehend von einem Vorschaubild können Sie entweder durch Anklicken des 
            Wechselschalters {" "}<FontAwesomeIcon icon={faChevronDown} />{" "} bzw. 
            {" "}<FontAwesomeIcon icon={faChevronUp} />{" "} einen Bereich mit 
            Informationen zu der Kartenebene auf- bzw. zuklappen, der auch Schaltflächen 
            zum Hinzufügen und Favorisieren dieser Kartenebene enthält. Oder Sie benutzen 
            hierfür direkt die Symbole {" "}<FontAwesomeIcon icon={faPlus} />{" "} 
            und {" "}<FontAwesomeIcon icon={faStar} />{" "} im Vorschaubild. 
            "Hinzufügen" bewirkt, dass diese Kartenebene im Geoportal direkt geladen 
            und angezeigt wird. Außerdem wird für sie ein weiteres Ebenen-Steuerelement 
            rechts neben dem Hintergrund-Steuerelement ergänzt. Durch "Favorisieren" wird 
            die Kartenebene in Ihrem Favoriten-Bereich unter "Meine Kartenebenen" 
            gespeichert. Zu Ihren Favoriten gelangen Sie, indem Sie oben im Navigationsbereich 
            auf {" "}<FontAwesomeIcon icon={faStar} />{" "} <strong>Favoriten</strong>{" "} klicken. 
            Das Speichen der Favoriten benutzt den Cache-Speicher Ihres Browsers. Wenn Sie diesen 
            Speicher löschen, verschwinden auch die dort gespeicherten Karteninhalte.
          </p>
          <p>
            Wenn Sie im Navigationsbereich auf {" "}<FontAwesomeIcon icon={faBook} />{" "} 
            <strong>Teilzwillinge</strong>{" "} klicken, werden im Hauptbereich Vorschaubilder 
            für Kartenanwendungen angezeigt, die jeweils einen themenspezifischen 
            Ausschnitt aus den Daten und Methoden des DigiTal Zwillings für einen konkreten Anwendungsfall 
            umfassen. (Im Konzept des DigiTal Zwillings werden solche Anwendungen als "Teilzwillinge" 
            bezeichnet.) Im Unterschied zu den Kartenebenen werden die Teilzwillinge nicht der 
            Kartenansicht des Geoportals hinzugefügt, sondern in einer neuen Karteikarte Ihres 
            Browsers geöffnet. Der Bereich {" "}<FontAwesomeIcon icon={faMapPin} />{" "} 
            <strong>Sensoren</strong>{" "} befindet sich im Aufbau, er ist daher noch deaktiviert. 
            Hier werden Sie zukünftig die Smart-City-Sensoren der Stadt Wuppertal 
            finden, die Sie als dynamischen Kartenebenen in das Geoportal integrieren können.  
          </p>
          <p className="hide-on-small-screens">
            <Link
              onClick={() => {
                showOverlayFromOutside("MENULEISTE");
              }}
            >
              zur Hilfefolie
            </Link>
          </p>
        </div>
      }
    />
  );
};
export default Component;
