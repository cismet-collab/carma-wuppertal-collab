import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import meinStandpunktMarkerDoppel from "../../commons/assets/MeinStandpunktMarkerDoppel.jpg";
import meinStandpunktMarkerMitKompass from "../../commons/assets/MeinStandpunktMarkerMitKompass.jpg";

export const GenericHelpTextForMyLocation = () => {
  return (
    <>
      <p>
      Das Werkzeug &quot;Mein Standort&quot;{" "}
        <FontAwesomeIcon icon={faLocationArrow} />{" "}      
        wird nur auf mobilen Endgeräten wie Smartphones 
        und Tablet-PC&#39;s angeboten, denn nur diese sind 
        regelmäßig mit einem GNSS-Empfänger als Positionssensor 
        ausgestattet (GNSS steht für Global Navigation
        Satellite Systems, z.B.{" "}
        <a
          target="_info"
          href="https://dvw.de/sites/default/files/landesverein-bayern/VeroeffentlichungenMitteilungen1996_4/DVW_1996_4_Schlie%C3%9Fer_GPS_Systemgrundlagen.pdf"
        >
          GPS
        </a>
        ). Mit dem ersten Antippen dieses Werkzeugs aktivieren Sie den
        &quot;Follow me&quot;-Modus, erkennbar an der orangefarbigen Darstellung
        des Werkzeug-Symbols. Ggf. werden Sie vom Browser bzw. dem
        Betriebssystem Ihres Endgerätes zur Freigabe der Lokalisierung
        aufgefordert. Die Karte wird auf Ihren aktuellen Standort zentriert, der
        mit einem blauen Kreissymbol{" "}
        <img alt="MeinStandpunktMarker" src={meinStandpunktMarkerMitKompass} />{" "}
        markiert wird. Das kleine blaue Dreieck am Rand dieses Standortsymbols
        zeigt Ihre aktuelle Blickrichtung an (genauer: die Richtung, in die Ihr
        Endgerät zeigt). Das Standortsymbol ist umgeben von einem zweiten Kreis
        mit transparenter, blauer Füllung, dessen Radius die Unsicherheit der
        Positionsbestimmung angibt{" "}
        <img
          alt="MeinStandpunktMarkerDoppel"
          src={meinStandpunktMarkerDoppel}
        />
        . Durch Antippen des inneren Kreises können Sie einen Texthinweis mit 
        einer konkreten Angabe der aktuellen Positionsgenauigkeit einblenden. 
        Dieser Hinweis kann durch das Antippen einer beliebigen Stelle außerhalb seines 
        Textfeldes geschlossen werden. Wenn Sie sich mit Ihrem Endgerät bewegen
        (z. B. bei einer Wanderung), wird Ihre aktuelle Position im &quot;Follow
        me&quot;-Modus in schneller Folge neu bestimmt und stets in der Mitte
        der Karte angezeigt. Die Karte wird dazu automatisiert nachgeführt. Ein
        weiteres Antippen von &quot;Mein Standort&quot; schaltet die Anzeige
        Ihrer Position wieder ab (schwarzes Werkzeug-Symbol).{" "}
      </p>
      <p>
        Wenn Sie die Karte im aktivierten &quot;Follow me&quot;-Modus manuell
        verschieben, wird der &quot;Follow me&quot;-Modus unterbrochen,
        erkennbar an einer blauen Darstellung des Werkzeug-Symbols. Ihr
        aktueller Standort wird weiterhin angezeigt und in schneller Folge
        aktualisiert. Der Kartenausschnitt wird jetzt aber nicht mehr
        automatisch an den aktuellen Standort angepasst. Bei fortgesetzter
        Bewegung in eine Richtung wird das Standortsymbol daher vom Zentrum zum
        Rand des Kartenfensters wandern und dann verschwinden - Ihr Standort
        liegt jetzt nicht mehr im aktuell eingestellten Kartenausschnitt! In
        diesem Fall führt ein erneutes Antippen von &quot;Mein Standort&quot;
        dazu, dass wieder in den &quot;Follow me&quot;-Modus zurückgewechselt
        wird. Wenn Ihr aktueller Standort dagegen noch in der Karte sichtbar
        ist, wird durch diese Aktion die Anzeige der Position abgeschaltet
        (schwarzes Werkzeug-Symbol). Sie können die Unterbrechung des
        &quot;Follow me&quot;-Modus bei einer Wanderung o. ä. nutzen, wenn Sie
        sich die vor Ihnen liegende Strecke in der Karte anschauen wollen.
        Verschieben Sie dazu den Kartenausschnitt manuell auf den Abschnitt
        Ihres Interesses. Ihr aktueller Standort wird dann zumeist nicht mehr
        dargestellt werden können. Der &quot;Follow me&quot;-Modus wird
        unterbrochen (blaues Werkzeug-Symbol). Wenn Sie sich ausreichend über
        den weiteren Streckenverlauf informiert haben, reaktivieren Sie durch
        erneutes Antippen von &quot;Mein Standort&quot; den &quot;Follow
        me&quot;-Modus und setzen die Karte damit wieder auf Ihren aktuellen
        Standort zurück.{" "}
      </p>
      <p>
        Noch ein Hinweis zur Genauigkeit: Die Richtigkeit der Positionsanzeige
        ist nicht garantiert. Ihre Genauigkeit hängt von verschiedenen Faktoren
        ab, u. a. von der Qualität des GNSS-Empfängers in Ihrem Endgerät, der
        Umgebungssituation (z. B. hohe Gebäude oder spiegelnde Oberflächen in
        der Nachbarschaft) sowie der Methode, mit der Ihr Endgerät und der von
        Ihnen verwendete Browser die Position bestimmen.
      </p>
    </>
  );
};
