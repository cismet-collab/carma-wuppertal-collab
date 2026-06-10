import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="objekte-bearbeiten"
      sectionTitle="Objekte erstellen & bearbeiten"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <strong>Entwürfe.</strong> Während Sie etwas erstellen oder
            bearbeiten, wird jedes Objekt als <strong>Entwurf</strong> gehalten
            und im Reiter <strong>Entwürfe</strong> aufgelistet &ndash; Sie können
            mehrere Entwürfe gleichzeitig offen haben.{" "}
            <strong>Speichern</strong> sendet einen einzelnen Entwurf an den
            Server, <strong>Alle speichern</strong> übergibt den ganzen Stapel
            auf einmal. <strong>Abbrechen</strong> verwirft den aktuellen
            Entwurf, <strong>Alle verwerfen</strong> alle. Neu erstellte Objekte
            tragen in der Liste ein grünes <strong>„Neu"</strong>-Abzeichen.
          </p>
          <p>
            <strong>Erstellen</strong> &ndash; klicken Sie die weiße{" "}
            <strong>„+"-Schaltfläche</strong> (mit ▾-Pfeil) in der oberen
            Navigationsleiste und wählen Sie den Typ (Leuchte, Standort-Mast,
            Leitung, Schaltstelle, Mauerlasche, Abzweigdose). Geben Sie dem Objekt
            über eine <strong>Messung</strong> einen Ort (siehe Abschnitt
            „Messungen") und füllen Sie das Formular aus. Ein Entwurf ohne
            Geometrie kann nicht gespeichert werden. Ist ein Standort ausgewählt,
            bietet das Dropdown zusätzlich{" "}
            <strong>Leuchte zu Standort hinzufügen</strong>.
          </p>
          <p>
            <strong>Vorausgefüllte Felder.</strong> BelIS merkt sich die zuletzt
            eingegebenen Werte pro Objekttyp und füllt sie ins nächste neue Objekt
            vor &ndash; gemerkte Felder erscheinen <strong>grün</strong>, von
            Hand geänderte werden <strong>grau</strong>. Die grüne{" "}
            <strong>„+"-Schaltfläche</strong> in der Formularkopfzeile legt einen
            neuen Datensatz mit den aktuellen Werten an. Über{" "}
            <strong>Einstellungen → Gemerkte Felder zurücksetzen</strong> leeren
            Sie den Speicher wieder.
          </p>
          <p>
            <strong>Bearbeiten</strong> &ndash; öffnen Sie das Datenblatt des
            Objekts, schalten Sie den <strong>Bearbeitungsmodus</strong> ein und
            ändern Sie die Felder. Im Bearbeitungsmodus enthält das Formular einen{" "}
            <strong>Dokumentenbereich</strong> zum Anhängen und Entfernen von
            Dateien. Die <strong>Geometrie</strong> verschieben Sie, indem Sie
            einen Punkt-Messpunkt zeichnen und ihn im Dropdown{" "}
            <strong>„Geometrie"</strong> auswählen. Alle Änderungen werden als
            Entwurf gehalten und mit <strong>Speichern</strong> bzw.{" "}
            <strong>Alle speichern</strong> übergeben.
          </p>
        </div>
      }
    />
  );
};
export default Component;
