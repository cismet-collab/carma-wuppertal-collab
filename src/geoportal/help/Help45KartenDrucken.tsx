import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import addLayers from "../secondary/assets/add-layers.png";
import { faShareNodes, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const Help45KartenDrucken = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="drucken"
      sectionTitle="Karten drucken und teilen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            In der Menüleiste{" "}
            <span className="hide-on-small-screens">
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("MENULEISTE");
                }}
              >
                (s. Hilfefolie)
              </HelpOverlayLink>
            </span>{" "}
            finden Sie verschiedene Funktionen, mit denen Sie Ihre Arbeitsergebnisse
            im DigiTal Zwilling festhalten oder mit anderen teilen können.
          </p>
          <p>
            Wenn Sie dort auf das Symbol <FontAwesomeIcon icon="file-export" />{" "}
            <b>Karte speichern</b> klicken, öffnet sich ein kleiner Dialog. Hier können 
            Sie die aktuell zusammengestellten Kartenebenen unter einem frei von Ihnen 
            wählbaren Titel speichern. Optional können Sie im Feld "<b>Inhalt</b>" eine 
            Notiz anlegen, um diese Kartenebenen zu beschreiben. Die Karte 
            wird im Cache-Speicher Ihres Browsers abgelegt. Beachten Sie: Wenn Sie den 
            Cache löschen, gehen auch Ihre gespeicherten Karten verloren. Die Funktion 
            eignet sich daher zurzeit vor allem für die kurzfristige Sicherung eines 
            Bearbeitungsstandes, nicht für den langfristigen Aufbau einer Kartensammlung.
            Gespeicherte Karten können Sie im Dialog "Karteninhalte hinzufügen" (Symbol{" "}
            <img src={addLayers} style={{ height: "18px" }} /> in der Menüleiste) im Bereich 
            Favoriten / Meine Karten wieder aufrufen. Das dort angezeigte Vorschaubild wird 
            automatisch als Collage aus den enthaltenen Kartenebenen erzeugt.
          </p>
          <p>
            Über das Symbol <FontAwesomeIcon icon="print" /> <b>Drucken</b>{" "}
            öffnen Sie einen kompakten Dialog für den Ausdruck ihrer aktuell
            zusammengestellten Kartenebenen als PDF-Datei mit dem Druckformat
            DIN A4. Sie können hier die Ausrichtung (Hochkant- oder Querformat),
            den Maßstab und die Auflösung festlegen. Klicken Sie dann auf die
            Schaltfläche <b>Vorschau</b>, um sich im Kartenfenster den
            entsprechenden Druckvorschaubereich anzeigen zu lassen, den Sie mit
            gedrückter Maustaste noch verschieben können. Mit dem Symbol{" "}
            <FontAwesomeIcon
              style={{ transform: "rotate(45deg)" }}
              icon={faArrowsAlt}
            />
            , je nach Betrachtungsmaßstab links oben oder in der Mitte des
            Druckvorschaubereichs, können Sie auf den Druckvorschaubereich
            zoomen. Klicken Sie abschließend auf die Schaltfläche <b>Drucken</b>{" "}
            rechts unten in der Druckvorschau, um die PDF-Datei zu erzeugen, die
            in einem separaten Fenster geöffnet wird. In dieser Ausbaustufe des
            Geoportals ist die Druckfunktion recht einfach gehalten, die
            PDF-Druckdatei umfasst daher weder Legenden noch weiterführende
            Informationen zu den Kartenebenen. Noch ein Hinweis zur Auflösung:
            Die Zeichenvorschriften für die meisten Kartenebenen sind für die
            Bildschirmpräsentation gemacht, die Größen von Symbolen und
            Schriften sowie die Breite von Linien sind daher in Bildschirmpixeln
            definiert. Je höher die von Ihnen gewählte Auflösung ist, desto
            kleiner werden die Symbole und Schriften im Ausdruck. Die Linien
            werden entsprechend immer dünner. In diesen Fällen führt deswegen
            eine eher niedrige Auflösung von 100 dpi zum besten Druckergebnis.
          </p>
          <p>
            Durch Anklicken des Symbols <FontAwesomeIcon icon={faShareNodes} />{" "}
            <b>Teilen</b> öffnen Sie einen Minimaldialog, der nur die
            Schaltfläche{" "}
            <a className="useAClassNameToRenderProperLink">Link kopieren</a>{" "}
            umfasst. Hierüber erzeugen Sie einen kompakten Hyperlink, mit dem
            das Geoportal genau in dem Zustand geöffnet wird, den Sie in diesem
            Moment sehen. Dieser Zustand umfasst den Kartenausschnitt, die
            geladenen Kartenebenen und ggf. auch eine Ortsbezeichnung im
            Eingabefeld links unten zusammen mit dem Marker auf der Zielposition
            bzw. dem Spotlight auf der Zielfläche. Damit haben Sie eine elegante
            Möglichkeit, Lage und Informationen zu einem Treffpunkt oder einer
            Sehenswürdigkeit in Wuppertal über einen Geoportal-Link zu teilen.
            Als Beispiel hier ein solcher Link zur{" "}
            <a
              target="_legal"
              href="https://digital-twin-wuppertal-live.github.io/geoportal/#/?lat=51.2529646&lng=7.1429801&zoom=18&&config=b658e1ea278cf602&appKey=sharedurl"
            >
              Historischen Stadthalle
            </a>
            . Die dazu berechtigten Mitarbeiter/innen des Wuppertaler
            Geodatenzentrums benutzen übrigens nach ihrem Login eine erweiterte
            Variante des Teilen-Dialogs. Damit werden die Karten konfiguriert,
            die wir Ihnen unter Karteninhalte hinzufügen / Entdecken anbieten.
          </p>
        </div>
      }
    />
  );
};
export default Help45KartenDrucken;
