import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { InKartePositionierenText } from "../../commons";
import Icon from "react-cismap/commons/Icon";
import { Link } from "../../helper-overlay/components/Link";

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
                  Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben
                  Sie den Anfang eines Stadtteils (Stadtbezirk oder Quartier),
                  einer Adresse, eines Straßennamens oder eines POI im
                  Eingabefeld links unten ein (mindestens 2 Zeichen). In der
                  inkrementellen Auswahlliste werden Ihnen passende Treffer
                  angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt
                  der Auswahlliste angepasst.) Durch das vorangestellte Symbol
                  erkennen Sie, ob es sich dabei um einen <Icon name="circle" />{" "}
                  Stadtbezirk, ein <Icon name="pie-chart" /> Quartier, eine{" "}
                  <Icon name="home" /> Adresse, eine <Icon name="road" /> Straße
                  ohne zugeordnete Hausnummern, einen <Icon name="tag" /> POI,
                  die <Icon name="tags" /> alternative Bezeichnung eines POI,
                  eine <Icon name="child" /> Kindertageseinrichtung oder eine{" "}
                  <Icon name="graduation-cap" /> Schule handelt.
                </p>
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
