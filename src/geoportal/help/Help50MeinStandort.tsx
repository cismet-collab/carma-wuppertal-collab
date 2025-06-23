import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import meinStandpunktMarkerMitKompass from "./assets/MeinStandpunktMarkerMitKompass.jpg";
import meinStandpunktMarkerDoppel from "./assets/meinStandpunktMarkerDoppel.jpg";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import UAParser from "ua-parser-js";

const Help40MeinStandort = ({ showOverlayFromOutside }) => {
  let parser = new UAParser();
  const isMobile =
    parser.getDevice().type === "mobile" ||
    parser.getDevice().type === "tablet";

  return (
    <GenericModalMenuSection
      sectionKey="standort"
      sectionTitle="Nutzung auf mobilen Geräten"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Der DigiTal Zwilling / Geoportal ist für die Benutzung mit einem Desktop-PC 
            entwickelt worden. An einem solchen Endgerät mit einem großen Bildschirm 
            haben Sie daher die beste Benutzerfreundlichkeit. Die vorliegende Ausbaustufe 1 
            des Geoportals verfügt aber bereits über ein grundlegendes "Responsiv Design", 
            sodass Sie die Anwendung auch auf mobilen Endgeräten mit entsprechend kleineren 
            Bildschirmen nutzen können. Auf einem Tablet-PC werden Ihnen noch alle Elemente 
            der graphischen Oberfläche wie am Desktop-Rechner angeboten, allerdings müssen 
            Sie bei der Nutzung etwas öfter scrollen. Auf einem Smartphone stehen Ihnen 
            dagegen zwei Elemente nicht mehr zur Verfügung: die Hilfefolie entfällt ersatzlos. 
            Außerdem wird nicht mehr für jede Kartenebene ein eigenes Ebenen-Steuerelement
            angezeigt. Es wird nur noch das Hintergrund-Steuerelement ausgeprägt, über das 
            Sie auch die Darstellung und Darstellungsreihenfolge aller hinzugeladenen Kartenebenen 
            steuern können. Das Responsiv Design des Geoportals ist noch nicht perfekt. Wir werden 
            es bis zum Ende des Entwicklungsprozesses kontinuierlich verbessern. 
          </p>
          <p>
            Die 3D-Darstellungen stellen vor allem im Modus "Luftbild" hohe Anforderungen an 
            den Arbeitsspeicher des von Ihnen verwendeten Endgerätes. Insbesondere auf älteren 
            Smartphones mit schwächerer Speicherausstattung kann es daher zu Abstürzen beim Wechsel 
            in die 3D-Betrachtung kommen. Für die folgenden Ausbaustufen untersuchen wir daher die 
            Möglichkeiten, dem Geoportal die 3D-Modelle in einem kompakteren Format zur Verfügung 
            zu stellen. 
          </p>
          <p>
            Auf mobilen Endgeräten wird ihnen auf der linken Seite der zusätzliche Wechselschalter 
            "Mein Standort"{" "}<FontAwesomeIcon icon={faLocationArrow} />{" "}zur Aktivierung bzw. 
            Deaktivierung der Standort- und Blickrichtungsanzeige angeboten. Mit dem ersten Antippen 
            dieses Werkzeugs aktivieren Sie den "Follow me"-Modus (orangefarbiges Werkzeug-Symbol). 
            Ggf. werden Sie zunächst zur Freigabe der Lokalisierung aufgefordert. Die Karte wird auf 
            Ihren aktuellen Standort zentriert, der mit einem blauen Kreissymbol{" "}
            <img
              alt="MeinStandpunktMarker"
              src={meinStandpunktMarkerMitKompass}
            />{" "}
            markiert wird. Das kleine blaue Dreieck am Rand dieses Standortsymbols zeigt ihre 
            Blickrichtung an. Wenn Sie sich mit Ihrem Endgerät bewegen, wird Ihre aktuelle Position 
            in schneller Folge neu bestimmt und stets in der Mitte der Karte angezeigt. Die Karte 
            wird dazu automatisiert nachgeführt. Das Standortsymbol ist umgeben von einem zweiten 
            Kreis mit transparenter, blauer Füllung, dessen Radius die Unsicherheit der 
            Positionsbestimmung angibt{" "}
            <img
              alt="MeinStandpunktMarkerDoppel"
              src={meinStandpunktMarkerDoppel}
            />. 
            Durch Antippen des inneren Kreises können Sie einen Texthinweis mit einer konkreten 
            Angabe der aktuellen Positionsgenauigkeit einblenden. Dieser Hinweis kann durch das 
            ntippen einer beliebigen Stelle außerhalb seines Textfeldes geschlossen werden. Ein 
            weiteres Antippen von "Mein Standort" schaltet die Anzeige Ihrer Position wieder ab 
            (schwarzes Werkzeug-Symbol). 
          </p>
          <p>
            Wenn Sie die Karte im aktivierten &quot;Follow me&quot;-Modus
            manuell verschieben, wird der &quot;Follow me&quot;-Modus
            unterbrochen, erkennbar an einer blauen Darstellung des
            Werkzeug-Symbols. Ihr aktueller Standort wird weiterhin angezeigt
            und in schneller Folge aktualisiert. Der Kartenausschnitt wird jetzt
            aber nicht mehr automatisch an den aktuellen Standort angepasst. Bei
            fortgesetzter Bewegung in eine Richtung wird das Standortsymbol
            daher vom Zentrum zum Rand des Kartenfensters wandern und dann
            verschwinden - Ihr Standort liegt jetzt nicht mehr im aktuell
            eingestellten Kartenausschnitt. In diesem Fall führt ein erneutes
            Antippen von &quot;Mein Standort&quot; dazu, dass wieder in den
            &quot;Follow me&quot;-Modus zurückgewechselt wird. Wenn Ihr
            aktueller Standort dagegen noch in der Karte sichtbar ist, wird
            durch diese Aktion die Anzeige der Position abgeschaltet (schwarzes
            Werkzeug-Symbol).
          </p>
          <p
            style={{
              display: isMobile ? "block" : "none",
            }}
            className="hide-on-small-screens"
          >
            <HelpOverlayLink
              onClick={() => {
                showOverlayFromOutside("MEINE_POSITION");
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
export default Help40MeinStandort;
