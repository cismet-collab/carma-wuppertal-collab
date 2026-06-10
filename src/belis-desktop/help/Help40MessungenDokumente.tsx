import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="messungen-dokumente"
      sectionTitle="Messungen & Dokumente"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <strong>Messungen</strong> legen den Ort eines Objekts fest. Wählen
            Sie ein Werkzeug &ndash; <strong>Punkt</strong> für Punktobjekte
            (Leuchte, Standort, Schaltstelle, Mauerlasche, Abzweigdose) oder{" "}
            <strong>Linie</strong> für eine Leitung &ndash; und zeichnen Sie auf
            der Karte. Eine einzelne Messung entfernen Sie über das
            Papierkorb-Symbol in ihrer Infobox, alle über{" "}
            <strong>Alle Messungen löschen</strong>. Mit der{" "}
            <strong>Magnet-Schaltfläche</strong> (<strong>Snapping</strong>)
            rasten gezeichnete Punkte an die Ecken und Kanten naher Objekte ein,
            sodass eine Messung exakt auf einem Objekt landet.
          </p>
          <p>
            Sobald mindestens eine Messung vorliegt, erscheint im Reiter{" "}
            <strong>Fachobjekte</strong> ein zusammenklappbarer Abschnitt{" "}
            <strong>„Messungen"</strong>. Jede Messung ist pro Typ nummeriert
            (Punkt 1, Linie 1, …) und zeigt Koordinaten bzw. Länge. Beim Erstellen
            eines Objekts wird die passende Messung automatisch angehängt, sofern
            es eine eindeutige gibt; andernfalls wählen Sie sie im Abschnitt{" "}
            <strong>„Neue Geometrien"</strong> über das Dropdown{" "}
            <strong>„Messung wählen"</strong>. Das Speichern verbraucht die
            Messung.
          </p>
          <p>
            <strong>Dokumente</strong> hängen Sie per Drag &amp; Drop oder per
            Klick an. Ein Klick auf eine Vorschaukachel öffnet Bild oder PDF im
            Vollbild in einer <strong>Lightbox</strong>, durch die Sie mit den
            Pfeilen blättern. PDFs lassen sich über{" "}
            <strong>„PDF extern öffnen"</strong> in einem neuen Browser-Tab lesen
            und herunterladen. Schaltflächen in der Dokumentenzeile dienen zum{" "}
            <strong>Herunterladen</strong> und <strong>Entfernen</strong>.
          </p>
        </div>
      }
    />
  );
};
export default Component;
