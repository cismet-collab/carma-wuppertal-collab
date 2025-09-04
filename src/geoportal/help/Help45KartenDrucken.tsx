import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import addLayers from "../secondary/assets/add-layers.png";

const Help45KartenDrucken = ({
  showOverlayFromOutside,
}) => {
  return (
    <GenericModalMenuSection
      sectionKey="drucken"
      sectionTitle="Karten drucken und teilen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            In der{" "}
            <span className="hide-on-small-screens">
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("MENULEISTE");
                }}
              >
                Menüleiste
              </HelpOverlayLink>
            </span>{" "}finden Sie einige Funktionen, mit denen Sie die Ergebnisse ihrer Arbeit mit dem 
            DigiTal Zwilling festhalten oder mit anderen teilen können.
          </p>
          <p>
            Wenn Sie dort auf das Symbol{" "}<FontAwesomeIcon icon="file-export" />{" "}<b>Karte speichern</b> klicken, 
            öffnet sich ein kleiner Dialog zum Speichern der aktuell zusammengestellten Kartenebenen unter einem frei 
            von Ihnen wählbaren Titel. Wenn Sie möchten, können Sie sich im Eingabefeld "<b>Inhalt</b>" notieren, um 
            welche Kartenebenen es sich handelt. Die Karte wird im Cache-Speicher Ihres Browsers abgelegt. Wenn Sie  
            diesen Speicher löschen, verschwinden auch ihre dort zuvor gespeicherten Karten. Die Funktion ist daher 
            zzt. eher zum kurzfristigen Sichern eines Bearbeitungsstandes gedacht als zum langfristigen Aufbau 
            einer Kartensammlung. Laden können Sie eine gespeicherte Karte im Dialog "Karteninhalte hinzufügen" 
            (Symbol{" "}<img src={addLayers} style={{ height: "18px" }} /> in der Menüleiste) unter 
            Favoriten / Meine Karten. Das dort angezeigte Vorschaubild wird automatisch als Collage aus den 
            einzelnen Kartenebenen erzeugt.
          </p>
        </div>
      }
    />
  );
};
export default Help45KartenDrucken;
