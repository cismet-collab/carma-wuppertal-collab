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
            <strong>Messungen</strong> legen den Ort eines Objekts fest und sind
            der Weg, einem neuen oder verschobenen Objekt eine Geometrie zu geben.
          </p>
          <ul>
            <li>
              Ein Werkzeug wählen &ndash; <strong>Punkt</strong> für Punktobjekte
              oder <strong>Linie</strong> für eine Leitung &ndash; und auf der
              Karte zeichnen.
            </li>
            <li>
              Eine einzelne Messung über das <strong>Papierkorb-Symbol</strong> in
              ihrer Infobox entfernen, alle über{" "}
              <strong>Alle Messungen löschen</strong>.
            </li>
            <li>
              <strong>Snapping</strong> &ndash; die{" "}
              <strong>Magnet-Schaltfläche</strong> („Snapping an" / „Snapping aus")
              umschalten, damit gezeichnete Punkte an die Ecken und Kanten naher
              bestehender Objekte einrasten, sodass eine Messung exakt auf einem
              Objekt landet statt knapp daneben.
            </li>
          </ul>
          <p>
            <strong>In der Seitenleiste</strong> erscheint im Reiter{" "}
            <strong>Fachobjekte</strong> ein zusammenklappbarer Abschnitt{" "}
            <strong>„Messungen"</strong>, sobald mindestens eine Messung vorliegt
            (mit Anzahl-Abzeichen und Papierkorb für „Alle Messungen löschen").
            Jede Messung ist pro Typ nummeriert (Punkt 1, Linie 1 …); der
            Untertitel zeigt <strong>Koordinaten</strong> für einen Punkt bzw. die{" "}
            <strong>Länge</strong> für eine Linie (z. B. „156 m" / „1,23 km"). Eine
            Zeile anklicken wählt die Messung aus; mit den{" "}
            <strong>↑ / ↓</strong>-Tasten blättern Sie durch.
          </p>
          <p>
            <strong>In der Infobox</strong> (auf der Karte) öffnet eine ausgewählte
            Messung den Titel „Messung" (z. B. „Punkt P2", „Linie L3") mit{" "}
            <strong>Zoom-zu</strong>, <strong>„Entwurf öffnen"</strong> (nur wenn
            die Messung an ein in Erstellung befindliches Objekt gebunden ist) und{" "}
            <strong>„Messung löschen"</strong>.
          </p>
          <p>
            <strong>Dokumente.</strong> Hängen Sie Dateien per Drag &amp; Drop oder
            per Klick an; <strong>Herunterladen</strong> und{" "}
            <strong>Entfernen</strong> erfolgen über die Schaltflächen in der
            Dokumentenzeile. Dateiänderungen sind Teil des Entwurfs und werden beim
            Speichern übergeben.
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
