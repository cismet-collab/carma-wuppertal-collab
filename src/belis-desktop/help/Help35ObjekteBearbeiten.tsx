import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="objekte-bearbeiten"
      sectionTitle="Objekte erstellen & bearbeiten"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Während Sie etwas erstellen oder bearbeiten, wird jedes Objekt als{" "}
            <strong>Entwurf</strong> gehalten und im Reiter{" "}
            <strong>Entwürfe</strong> aufgelistet &ndash; Sie können mehrere
            gleichzeitig offen haben.
          </p>
          <ul>
            <li>
              <strong>Speichern</strong> sendet diesen einen Entwurf an den Server
              und entfernt ihn aus der Liste (Sie sehen „Gespeichert").
            </li>
            <li>
              <strong>Alle speichern</strong> sendet alle aktuellen Entwürfe auf
              einmal und leert die Liste &ndash; sinnvoll, wenn Sie in einer
              Sitzung viele zusammenhängende Änderungen erst erfassen und dann in
              einem Zug senden möchten.
            </li>
            <li>
              <strong>Abbrechen</strong> verwirft den aktuellen Entwurf,{" "}
              <strong>Alle verwerfen</strong> jeden Entwurf ohne zu speichern.
            </li>
            <li>
              Neu erstellte Objekte tragen ein grünes{" "}
              <strong>„Neu"</strong>-Abzeichen, sodass Sie ungespeicherte
              Erstellungen von bearbeiteten bestehenden Objekten unterscheiden.
            </li>
          </ul>
          <p>
            <strong>Ein Objekt erstellen.</strong> Die weiße{" "}
            <strong>„+"-Schaltfläche</strong> (mit ▾-Pfeil) in der oberen
            Navigationsleiste anklicken und den Typ wählen (Leuchte, Standort-Mast,
            Leitung, Schaltstelle, Mauerlasche, Abzweigdose). Geben Sie dem Objekt
            über eine <strong>Messung</strong> einen Ort und füllen Sie das
            Formular aus. Ein Entwurf <strong>ohne Geometrie</strong> kann nicht
            gespeichert werden (Sie sehen „Geometrie fehlt").
          </p>
          <p>
            <strong>Geometrie mit einer Messung festlegen.</strong> Zeichnen Sie
            zuerst die passende Messung &ndash; einen <strong>Punkt</strong> für
            Punktobjekte (Leuchte, Standort, Schaltstelle, Mauerlasche,
            Abzweigdose) oder eine <strong>Linie</strong> für eine Leitung. Beim
            Erstellen wird die passende Messung <strong>automatisch angehängt</strong>,
            sofern es eine eindeutige gibt; andernfalls wählen Sie sie im Abschnitt{" "}
            <strong>„Neue Geometrien"</strong> über das Dropdown{" "}
            <strong>„Messung wählen"</strong>. Das Speichern{" "}
            <strong>verbraucht die Messung</strong>. Ist ein Standort ausgewählt,
            bietet das Dropdown zusätzlich{" "}
            <strong>Leuchte zu Standort hinzufügen</strong>, das eine neue, an
            diesen Standort gebundene Leuchte anlegt.
          </p>
          <p>
            <strong>Vorausgefüllte Felder (gemerkte Werte).</strong> BelIS merkt
            sich die zuletzt eingegebenen Werte <strong>pro Objekttyp</strong> und
            füllt sie ins nächste neue Objekt vor. Gemerkte Felder erscheinen{" "}
            <strong>grün</strong>; ändern Sie ein Feld vom gemerkten Wert ab, wird
            es <strong>grau</strong> &ndash; so sehen Sie stets, was automatisch
            ausgefüllt wurde und was bearbeitet ist. Gemerkt werden u. a. fast alle
            Leuchten-Felder, die meisten Standort-Felder (außer ortsspezifischen)
            sowie Kernfelder von Leitung und Mauerlasche; Schaltstelle und
            Abzweigdose beginnen stets leer. Die grüne{" "}
            <strong>„+"-Schaltfläche</strong> in der Formularkopfzeile legt einen
            neuen Datensatz mit den aktuellen Werten an (bei einer Leuchte samt
            ihrem Standort). Über <strong>Einstellungen → Gemerkte Felder
            zurücksetzen</strong> leeren Sie den Speicher.
          </p>
          <p>
            <strong>Ein Objekt bearbeiten.</strong> Zuerst das{" "}
            <strong>Datenblatt</strong> öffnen, dann den{" "}
            <strong>Bearbeitungsmodus</strong> einschalten und die Felder ändern (je
            Typ unterschiedlich). Im Bearbeitungsmodus enthält das Formular einen{" "}
            <strong>Dokumentenbereich</strong> zum Anhängen (Drag &amp; Drop oder
            Klick) und Entfernen von Dateien. Die <strong>Geometrie</strong>{" "}
            verschieben Sie, indem Sie einen Punkt-Messpunkt am Zielort zeichnen
            und ihn im Dropdown <strong>„Geometrie"</strong> auswählen; die
            momentane Position ist als „Momentane Geometrie" aufgeführt. Alle
            Änderungen werden als Entwurf gehalten und mit{" "}
            <strong>Speichern</strong> bzw. <strong>Alle speichern</strong>{" "}
            übergeben.
          </p>
        </div>
      }
    />
  );
};
export default Component;
