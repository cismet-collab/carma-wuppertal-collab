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
                  Um eine bestimmte Stelle des Stadtgebietes zu erkunden, 
                  geben Sie den Namen dieses Ortes im Eingabefeld links unten 
                  ein (mindestens 2 Zeichen). In der Auswahlliste werden Ihnen 
                  passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, 
                  wird der Inhalt der Auswahlliste angepasst.) Durch das 
                  vorangestellte Symbol erkennen Sie, ob es sich dabei um einen{" "} 
                  <Icon name="circle" />{" "} Stadtbezirk, ein <Icon name="pie-chart" />{" "} 
                  Quartier, eine{" "} <Icon name="home" /> Adresse, eine <Icon name="road" />{" "} 
                  Straße ohne zugeordnete Hausnummern, einen <Icon name="tag" />{" "} 
                  Interessanten Ort ("Point of Interest", kurz POI),
                  die <Icon name="tags" /> alternative Bezeichnung eines POI,
                  eine <Icon name="child" /> Kindertageseinrichtung oder eine{" "}
                  <Icon name="graduation-cap" /> Schule handelt.
                </p>
                <p>
                  Die Suche im Verzeichnis der Ortsnamen erfolgt "unscharf". Sie müssen 
                  den Ortsnamen also nicht exakt so schreiben, wie wir ihn in unserer Datenbank 
                  führen. Wenn Sie z. B. "Weierbush" oder "buscht" eintippen, wird trotzdem der 
                  Weyerbuschturm gefunden und als bester Treffer angeboten. Bei der unscharfen 
                  Suche wird für jeden Ort ein individueller Zahlenwert berechnet, der die 
                  Übereinstimmung mit dem Suchtext beschreibt. Wir bilden daraus Trefferklassen 
                  (Perfekte, Sehr gute, Gute, Befriedigende und Ausreichende Treffer), die als 
                  Überschriften in der Trefferliste angezeigt werden. <b>Achtung</b>: Bei sehr 
                  langen Texteingaben mit vielen Leerzeichen liefert die unscharfe Suche bisweilen 
                  unplausible Treffer. Wir versuchen dieses Problem bei der Weiterentwicklung des 
                  DigiTal Zwillings abzustellen.
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
