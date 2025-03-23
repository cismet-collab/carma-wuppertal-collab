import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { InKartePositionierenText } from "../../commons";
import Icon from "react-cismap/commons/Icon";
import { Link } from "../../helper-overlay/components/Link";
import FuzzySearchParagraph from "../../commons/FuzzySearchParagraph";

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
                  Werkzeugleiste im Kartenfenster) zum Vergrößern bzw. Verkleinern des 
                  Ansichtsmaßstabes in festen Zoomstufen verwendet werden. Für solche 
                  Maßstabsveränderungen, zum Verschieben des betrachteten Ausschnittes 
                  sowie zum Drehen und Kippen einer 3D-Ansicht stehen darüber hinaus die 
                  in Web-Kartenanwendungen übliche Mausaktionen bzw. Touchscreen-Gesten 
                  zur Verfügung ( 
                  <Link
                  onClick={() => {
                    showOverlayFromOutside("CENTER");
                  }}
                  >
                    Übersicht auf der Hilfefolie
                  </Link>).
                </p>
                <p>
                  Um eine bestimmte Stelle des Stadtgebietes zu
                  erkunden, geben Sie den Namen eines Stadtteils
                  (Stadtbezirk oder Quartier), einer Adresse,
                  eines Straßennamens oder eines POI im
                  Eingabefeld links unten ein. In der 
                  inkrementellen Auswahlliste werden Ihnen schon 
                  nach der Eingabe des ersten Buchstabens passende 
                  Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, 
                  wird der Inhalt der Auswahlliste angepasst.) Durch
                  das vorangestellte Symbol erkennen Sie, ob es sich dabei um
                  einen <Icon name="circle" /> Stadtbezirk, ein{" "}
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
              <p>
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
