import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { HelpOverlayLink } from "../../helper-overlay/components/Link";
import MeasureIcon from "../../commons/assets/measure.png";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Help46ZeichnenUndMessen = ({ showOverlayFromOutside }) => {
  return (
    <GenericModalMenuSection
      sectionKey="messen"
      sectionTitle="Zeichnen und Messen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <b>Ein Hinweis vorab: Die Messfunktionen werden in der aktuellen Version
            des Geoportals nicht auf Geräten mit Touch-Bildschirm wie Smartphones 
            oder Tablet-PC's angeboten.</b> 
          </p>
          <p>
            Mit dem Wechselschalter{" "}
            <img alt="Messmodus" height={20} width={20} src={MeasureIcon} />{" "}
            links unten in der Werkzeugleiste können Sie in 2D und 3D den
            Messungsmodus ein- bzw. ausschalten. Das Messen beginnt immer damit,
            dass sie einen Punkt, eine Strecke oder eine Fläche "zeichnen".
            Diese Messgeometrien werden auf einer eigenen Zeichnungsebene
            angelegt, die Sie über das <b>Zeichnung-Steuerelement</b>, stets
            ganz rechts in der Reihe der Kartensteuerelemente, ansprechen
            können. Die 2D- und die 3D-Ansicht verfügen dabei über unabhängige
            Zeichnungsebenen. Die Messgeometrien werden im Browser-Cache
            gespeichert, sie sind daher auch nach einem Neustart des Geoportals
            noch auf der Zeichnungsebene verfügbar. Über die Funktionen auf dem
            Zeichnung-Steuerelement können Sie den Kartenausschnitt so
            einstellen, dass alle Messungsgeometrien auf der Zeichnungsebene
            angezeigt werden. Außerdem können Sie hierüber alle
            Messungsgeometrien speichern (dazu unten mehr) oder löschen und auch
            hier den Messungsmodus beenden.
          </p>
          <p>
            In der <b>2D-Betrachtung</b> gibt es nur einen allgemeinen Modus für
            das Messen. Mit Ihren Mausklicks erzeugen Sie darin Messgeometrien
            in Form von Linienzügen oder geschlossenen Flächen. Dabei werden
            Stützpunkte der Geometrien von Vektor-Kartenebenen eingefangen, eine
            Funktion, die als "Snapping" bezeichnet wird. Bei einem Gerät mit
            externer Tastatur können Sie das Snapping unterdrücken, indem Sie
            beim Anlegen der Messgeometrie die ALT-Taste gedrückt halten. Einen
            Linienzug beenden Sie durch erneutes Anklicken des letzten Punktes
            oder einfach durch einen Doppelklick. Eine Fläche schließen Sie,
            indem Sie wieder auf den Startpunkt klicken. Die Messergebnisse zu
            einer einzelnen selektierten Messgeometrie (bei Linienzügen die
            Streckenlänge, bei Flächen zusätzlich der Flächeninhalt) werden in
            der Info-Box angezeigt, auch schon fortlaufend während des Anlegens
            der Messgeometrie. Dort können sie außerdem mit den Pfeiltasten{" "}
            <a className="useAClassNameToRenderProperLink">&lt;&lt;</a> und{" "}
            <a className="useAClassNameToRenderProperLink">&gt;&gt;</a> durch
            die Messgeometrien im aktuellen Kartenausschnitt wandern. Über den
            Link{" "}
            <a className="useAClassNameToRenderProperLink">
              n Messungen verfügbar
            </a>{" "}
            lässt sich der Kartenausschnitt zuvor so einstellen, dass alle
            Messgeometrien sichtbar sind.
          </p>
          <p>
            In der <b>3D-Betrachtung</b> gibt es unterschiedliche Messmodi. Wenn Sie
            auf den weißen Hintergrund des Zeichnung-Steuerelements klicken, wird 
            ihnen dazu ein Auswahlmenü angeboten. Mit der Funktion "Punkt messen" 
            können Sie Punkte auf der Oberfläche des 3D-Modells anlegen und deren 
            dreidimensionale Koordinaten einschließlich der Höhe ermitteln. Wechseln
            Sie in den Modus "Messung auswählen" und klicken Sie auf die Beschriftung 
            eines Messpunktes in der Karte, um zwischen der Anzeige seiner absoluten und
            seiner relativen Höhe hin- und herzuschalten. Mit der Funktion "Als Referenzhöhe 
            setzen" in der Info-Box eines Messpunktes können Sie diesen als Bezugspunkt für
            die relativen Höhenangaben festlegen. Im Modus "Distanz messen" könne Sie schräge 
            Strecken auf der Geländeoberfläche messen. Dabei wird automatisch ein rechtwinkliges 
            Hilfsdreieck konstruiert, das Ihnen neben der schrägen Strecke auch den Höherunterschied
            und die ebene (projizierte) Strecke anzeigt. So können Sie z. B. eine Gebäudefassade 
            ausmessen, indem Sie einfach die Diagonale bestimmen. Das Hilfsdreieck gibt dann 
            sofort Höhe und Breite der Fassade an.
          </p>
          <p>
            Zum <b>Speichern</b> aller Messungen auf der Zeichnungsebene klicken
            Sie im Zeichnung-Steuerelement auf das Diskettensymbol. Sie öffnen 
            darüber einen Dialog, in dem Sie die abzuspeichernden Messungen kurz 
            mit Titel und Inhalt beschreiben können. Danach haben Sie 2 Möglichkeiten: 
            Entweder speichern Sie die Messungen über "Datei Speichern" im GeoJSON-Format 
            in Ihrem Download-Verzeichnis ab. Oder Sie wählen "Im Portal Speichern", um
            die Messungen als Objekt unter "Objekte / Meine Messungen"
            abzuspeichern. Nach dem Speichern als Objekt wird automatisch ein
            spezifisches Objekt-Steuerelement für die Messungen angezeigt, das
            wir auch als "Messung-Steuerelement" bezeichnen. Ihre gespeicherten
            Messungen erreichen Sie über den Dialog "Karteninhalte hinzufügen".
            Messungen, die Sie als Objekt gespeichert und dann wieder zur
            Kartenansicht hinzugefügt haben, können Sie über die{" "}
            <FontAwesomeIcon icon={faShareNodes} /> Teilen-Funktion auch anderen
            Personen zur Verfügung stellen. Um eine gespeicherte Datei mit
            Messungen zu laden, können Sie diese mit der Maus in das
            Kartenfenster ziehen. Dadurch wird wie beim Speichern als Objekt ein
            entsprechendes Messung-Steuerelement erzeugt.
          </p>
          <p>
            <b>Zuletzt noch einige Hinweise zur Genauigkeit der Messungen</b>:
            In der <b>2D-Betrachtung</b> werden die Dehnungen der Strecken und Flächen 
            korrigiert, die durch die Abbildung der gekrümmten Erdoberfläche in 
            eine ebene Kartendarstellung entstehen (hier durch die in der Webkartographie 
            übliche Abbildung "Web Mercator (Auxiliary Sphere)", EPSG:3857). Die
            Messergebnisse entsprechen daher in sehr guter Annäherung den realen
            Verhältnissen. Wir geben die auf die Erdoberfläche projizierten
            Strecken an. Diese können deutlich kürzer sein als die schrägen
            Strecken, die Sie z. B. entlang der Oberfläche einer der steilen
            Wuppertaler Straßen messen würden. (Schräge <b>und</b> projizierte 
            Strecken können Sie in der 3D-Betrachtung messen.) Wegen einiger 
            kartographischer und rechentechnischer Vereinfachungen und der begrenzten
            geometrischen Genauigkeit sowohl des Karteninhalts als auch der
            Messgeometrien sind die Messungsergebnisse nicht perfekt, aber für
            die meisten Fragestellungen völlig ausreichend. Bei kurzen Segmenten
            ist die Genauigkeit besser als +/- 50 cm, die auf volle Meter
            gerundete Streckenlänge ist daher sicher. Bei Segmenten mit einer
            Länge von mehreren Kilometern wird die Genauigkeit mit +/- 5 m etwas
            schlechter, hier ist also die auf 10 Meter gerundete Streckenlänge
            sicher. In der <b>3D-Betrachtung</b> ist die Genauigkeit noch etwas 
            geringer, insbesondere wenn die Messungen auf der Grundlage des 
            3D-Mesh durchgeführt werden. Hier setzt man die Messmarke auf ein 
            zwangsläufig etwas vereinfachtes Dreiecksmodell des Geländes auf, 
            was die Messgenauigkeit beeinträchtigt.     
            <br />
            <br />
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
