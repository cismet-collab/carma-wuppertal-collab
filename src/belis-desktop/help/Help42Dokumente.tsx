import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="dokumente"
      sectionTitle="Dokumente"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <strong>Dokumente</strong> hängen Sie an Fachobjekte (im
            Bearbeitungsmodus) und an bestimmte Schlüsseltabellen-Einträge an.
            Hängen Sie Dateien per <strong>Drag &amp; Drop</strong> oder per Klick
            an; <strong>Herunterladen</strong> und <strong>Entfernen</strong>{" "}
            erfolgen über die Schaltflächen in der Dokumentenzeile. Dateiänderungen
            sind Teil des Entwurfs und werden beim Speichern übergeben.
          </p>
          <p>
            <strong>Lightbox.</strong> Wo Dokumente als{" "}
            <strong>Vorschaukacheln</strong> erscheinen, öffnet ein Klick auf ein
            Bild oder PDF die <strong>Lightbox</strong> im Vollbild. Mit den Pfeilen
            blättern Sie durch alle Dokumente des Formulars (jede Folie zeigt oben
            links Abschnittsname und Dateibeschreibung). <strong>PDFs</strong>{" "}
            erscheinen als Vorschaubild mit dem Link{" "}
            <strong>„PDF extern öffnen"</strong>, der das vollständige PDF in einem
            neuen Browser-Tab zum Lesen oder Herunterladen öffnet.
          </p>
        </div>
      }
    />
  );
};
export default Component;
