import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { InKartePositionierenText } from "../../commons";
import Icon from "react-cismap/commons/Icon";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import FuzzySearchParagraph from "../../commons/FuzzySearchParagraph";
import CompassNeedle from "../../commons/CompassNeedle";

const Help30InKartePositionieren = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="positionieren"
      sectionTitle="In Karte positionieren"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <InKartePositionierenText
            pretext={
              <>
                <p>
                  In der 2D-Ansicht und im 3D-Modus können Sie die Ansicht 
                  mithilfe der Symbole "<b>+</b>" und "<b>-</b>" oben links 
                  in der Werkzeugleiste in festen Zoomstufen vergrößern oder 
                  verkleinern. Zusätzlich stehen Ihnen die in Webkarten üblichen 
                  Steuerungsmöglichkeiten zur Verfügung: Mit der Maus (z. B. Klicken 
                  und Ziehen, Scrollen) oder durch Touch-Gesten auf dem Bildschirm 
                  können Sie den Kartenausschnitt verschieben oder die Ansicht 
                  verändern, z. B. eine 3D-Ansicht drehen und kippen{" "}
                  <span className="hide-on-small-screens">
                    <HelpOverlayLink
                      onClick={() => {
                        showOverlayFromOutside("CENTER");
                      }}
                    >
                      (s. Hilfefolie)
                    </HelpOverlayLink>
                  </span>.{" "}
                  Im 3D-Modus wird außerdem ein spezielles Steuerwerkzeug eingeblendet: 
                  eine Kompassnadel{" "}<CompassNeedle /> oberhalb des Schalters zum 
                  Wechsel zwischen 2D- und 3D-Ansicht. Wenn Sie auf dieses Symbol mit 
                  der linken Maustaste klicken und diese gedrückt halten, können Sie 
                  durch Bewegung der Maus die Ansicht kippen oder drehen – eine sogenannte 
                  Einhandsteuerung. Auf einem Touchscreen ist diese Funktion nicht verfügbar.   
                  Ein einfacher Klick auf die Kompassnadel richtet die Ansicht nach Norden 
                  aus. Ein Doppelklick stellt die senkrechte Draufsicht wieder her. Ein 
                  weiterer Klick kippt die Ansicht zurück in die zuvor verwendete Perspektive.
                </p>
                <p>
                  Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben
                  Sie den Namen eines Stadtteils (Stadtbezirk oder Quartier),
                  einer Adresse, eines Straßennamens oder eines POI im
                  Eingabefeld links unten ein. In der inkrementellen
                  Auswahlliste werden Ihnen schon nach der Eingabe des ersten
                  Buchstabens passende Treffer angeboten. (Wenn Sie weitere
                  Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) 
                  Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei
                  um einen <Icon name="circle" /> Stadtbezirk, ein{" "}
                  <Icon name="pie-chart" /> Quartier, eine <Icon name="home" />{" "}
                  Adresse, eine <Icon name="road" /> Straße ohne zugeordnete
                  Hausnummern, einen <Icon name="tag" /> Interessanten Ort
                  ("Point of Interest", kurz POI), die <Icon name="tags" />{" "}
                  alternative Bezeichnung eines POI, eine <Icon name="child" />{" "}
                  Kindertageseinrichtung oder eine{" "}
                  <Icon name="graduation-cap" /> Schule handelt.
                </p>
                <FuzzySearchParagraph />
              </>
            }
            posttext={
              <p className="hide-on-small-screens">
                <HelpOverlayLink
                  onClick={() => {
                    showOverlayFromOutside("GAZETTEER_SUCHE");
                  }}
                >
                  zur Hilfefolie
                </HelpOverlayLink>
              </p>
            }
          />
        </div>
      }
    />
  );
};
export default Help30InKartePositionieren;
