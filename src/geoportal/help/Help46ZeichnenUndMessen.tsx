import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import MeasureIcon from "../../commons/assets/measure.png";

const Help46ZeichnenUndMessen = ({
  showOverlayFromOutside
}) => {
  return (
    <GenericModalMenuSection
      sectionKey="messen"
      sectionTitle="Zeichnen und Messen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Mit dem Wechselschalter{" "}
            <img alt="Messmodus" height={20} width={20} src={MeasureIcon} />{" "}
            links unten in der Werkzeugleiste können Sie in 2D und 3D den Messungsmodus ein- bzw. 
            ausschalten. Das Messen beginnt immer damit, dass sie einen Punkt, eine Strecke oder 
            eine Fläche "zeichnen". Diese Messgeometrien werden auf einer eigenen Zeichnungsebene 
            angelegt, die Sie über das <b>Zeichnung-Steuerelement</b>, stets ganz rechts in der Reihe der 
            Kartensteuerelemente, ansprechen können. Die 2D- und die 3D-Ansicht verfügen dabei über 
            unabhängige Zeichnungsebenen. Die Messgeometrien werden im Browser-Cache gespeichert, 
            sie sind daher auch nach einem Neustart des Geoportals noch auf der Zeichnungsebene verfügbar. 
            Über die Funktionen auf dem Zeichnung-Steuerelement können Sie den Kartenausschnitt so 
            einstellen, dass alle Messungsgeometrien auf der Zeichnungsebene angezeigt werden. Außerdem 
            können Sie hierüber alle Messungsgeometrien speichern (dazu unten mehr) oder löschen und 
            auch hier den Messungsmodus beenden.  
          </p>  
          <p>
            In der <b>2D-Betrachtung</b> gibt es nur einen Messungsmodus. Mit Ihren Mausklicks erzeugen Sie 
            darin Messgeometrien in Form von Linienzügen oder geschlossenen Flächen. Dabei werden 
            Stützpunkte der Geometrien von Vektor-Kartenebenen eingefangen, eine Funktion, die als 
            "Snapping" bezeichnet wird. Bei einem Gerät mit externer Tastatur können Sie das Snapping 
            unterdrücken, indem Sie beim Anlegen der Messgeometrie die ALT-Taste gedrückt halten. 
            Einen Linienzug beenden Sie durch erneutes Anklicken des letzten Punktes oder einfach durch 
            einen Doppelklick. Eine Fläche schließen Sie, indem Sie wieder auf den Startpunkt klicken. Die 
            Messergebnisse (bei Linienzügen die Streckenlänge, bei Flächen zusätzlich der Flächeninhalt) 
            werden bereits während des Anlegens der Messgeometrie laufend in der Info-Box angezeigt.
          </p>
          <p> 
            Die Messgeometrien werden im Cache-Speicher Ihres Browsers 
            gespeichert. Dadurch können Sie in der Info-Box mit den Pfeiltasten{" "}           
            <a className="useAClassNameToRenderProperLink">
              &lt;&lt;
            </a>{" "}und{" "}
            <a className="useAClassNameToRenderProperLink">
              &gt;&gt;
            </a>{" "}durch die 
            Messgeometrien im aktuellen Kartenausschnitt wandern. Über den Link{" "}  
            <a className="useAClassNameToRenderProperLink">
              n Messungen verfügbar
            </a>{" "}lässt sich der Kartenausschnitt zudem so einstellen, dass alle Messgeometrien sichtbar 
            sind. Wenn Sie den Cache-Speicher löschen, gehen auch die gespeicherten Messungen verloren.
            {" "}<b>Zuletzt noch einige Hinweise zur Genauigkeit der Messungen</b>: Die Dehnungen der Strecken 
            und Flächen, die durch die Abbildung der gekrümmten Erdoberfläche in eine ebene Kartendarstellung entstehen
            (hier durch die in der Webkartographie übliche Abbildung "Web Mercator (Auxiliary Sphere)", EPSG:3857), 
            werden korrigiert. Die Messergebnisse entsprechen daher in sehr guter Annäherung den realen Verhältnissen. 
            Wir geben die auf die Erdoberfläche projizierten Strecken an. Diese können deutlich kürzer sein als die schrägen 
            Strecken, die Sie z. B. entlang der Oberfläche einer der steilen Wuppertaler Straßen messen 
            würden. Wegen einiger kartographischer und rechentechnischer Vereinfachungen und der begrenzten 
            geometrischen Genauigkeit sowohl des Karteninhalts als auch der Messgeometrien sind die Messungsergebnisse 
            nicht perfekt, aber für die meisten Fragestellungen völlig ausreichend. Bei kurzen Segmenten ist die 
            Genauigkeit besser als +/- 50 cm, die auf volle Meter gerundete Streckenlänge ist daher sicher. Bei 
            Segmenten mit einer Länge von mehreren Kilometern wird die Genauigkeit mit +/- 5 m etwas schlechter, 
            hier ist also die auf 10 Meter gerundete Streckenlänge sicher.
            <br/><br/>
            <span className="hide-on-small-screens">
              {" "}
              <HelpOverlayLink
                onClick={() => {
                  showOverlayFromOutside("MESSUNGEN");
                }}
              >
                zur Hilfefolie
              </HelpOverlayLink>
            </span>{" "}
          </p>
        </div>
      }
    />
  );
};
export default Help46ZeichnenUndMessen;
