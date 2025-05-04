import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { InKartePositionierenText } from "../../commons";
import Icon from "react-cismap/commons/Icon";
import { Link } from "../../helper-overlay/components/Link";
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
                  Sowohl in der 2D-Kartenbetrachtung wie auch im 3D-Modus können
                  die Werkzeuge "<b>+</b>" und "<b>-</b>" (links oben in der
                  Werkzeugleiste im Kartenfenster) zum Vergrößern bzw.
                  Verkleinern des Ansichtsmaßstabes in festen Zoomstufen
                  verwendet werden. Für solche Maßstabsveränderungen, zum
                  Verschieben des betrachteten Ausschnittes sowie zum Drehen und
                  Kippen einer 3D-Ansicht stehen darüber hinaus die in
                  Web-Kartenanwendungen übliche Mausaktionen bzw.
                  Touchscreen-Gesten zur Verfügung.{" "}
                  <span className="hide-on-small-screens">
                    (
                    <Link
                      onClick={() => {
                        showOverlayFromOutside("CENTER");
                      }}
                    >
                      Übersicht auf der Hilfefolie
                    </Link>
                    )
                  </span>
                  Im 3D-Modus wird zusätzlich ein Spezialwerkzeug zur
                  Steuerung der 3D-Ansicht aktiviert, nämlich die Kompassnadel{" "}
                  <CompassNeedle /> über dem 3D/2D-Wechselschalter. Wenn Sie das
                  Werkzeug mit der linken Maustaste anklicken und diese gedrückt
                  halten, können Sie durch Bewegung der Maus die Ansicht kippen
                  und drehen (Bedienung mit einer Hand). Auf einem Touchscreen
                  steht diese Steuerungsmöglichkeit nicht zur Verfügung. Ein
                  einfacher Klick auf das Kompasswerkzeug richtet die
                  Darstellung nach Norden aus. Ein Doppelklick kippt die Ansicht
                  zusätzlich in die Senkrechtperspektive. Ein weiterer Klick
                  kippt die Ansicht wieder in die zuletzt verwendete
                  Bildneigung.
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
                <Link
                  onClick={() => {
                    showOverlayFromOutside("GAZETTEER_SUCHE");
                  }}
                >
                  zur Hilfefolie
                </Link>
              </p>
            }
          />
        </div>
      }
    />
  );
};
export default Help30InKartePositionieren;
