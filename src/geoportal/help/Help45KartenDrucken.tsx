import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import addLayers from "../secondary/assets/add-layers.png";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

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
          <p>
            Durch Anklicken des Symbols{" "}<FontAwesomeIcon icon={faShareNodes} />{" "}<b>Teilen</b> öffnen Sie 
            einen Minimaldialog, der nur die Schaltfläche{" "}
            <a className="useAClassNameToRenderProperLink">
              Link kopieren
            </a>{" "}umfasst. Hierüber erzeugen Sie einen kompakten Hyperlink, mit dem das Geoportal genau in dem Zustand 
            geöffnet wird, den Sie in diesem Moment sehen. Dieser Zustand umfasst den Kartenausschnitt, die geladenen 
            Kartenebenen und ggf. auch eine Ortsbezeichnung im Eingabefeld links unten zusammen mit dem Marker auf der 
            Zielposition bzw. dem Spotlight auf der Zielfläche. Damit haben Sie eine elegante Möglichkeit, Lage und 
            Informationen zu einem Treffpunkt oder einer Sehenswürdigkeit in Wuppertal über einen Geoportal-Link zu teilen. 
            Als Beispiel hier ein solcher Link zur{" "} 
            <a
                target="_legal"
                href="https://digital-twin-wuppertal-live.github.io/geoportal/#/?lat=51.2529646&lng=7.1429801&zoom=18&&config=b658e1ea278cf602&appKey=sharedurl"
              >
                Historischen Stadthalle
              </a>. Die dazu berechtigten Mitarbeiter/innen des Wuppertaler Geodatenzentrums benutzen übrigens nach ihrem Login  
              eine erweiterte Variante des Teilen-Dialogs. Damit werden die Karten konfiguriert, die wir Ihnen unter
              Karteninhalte hinzufügen / Entdecken anbieten.              
          </p>
        </div>
      }
    />
  );
};
export default Help45KartenDrucken;
