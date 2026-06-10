import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="objekte-ansehen"
      sectionTitle="Objekte ansehen, auswählen & hervorheben"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Die Seitenleiste der Fachobjekte-Ansicht hat drei Reiter:{" "}
            <strong>Fachobjekte</strong>, <strong>Highlights</strong> und{" "}
            <strong>Entwürfe</strong>.
          </p>
          <p>
            <strong>Auswählen und ansehen</strong> &ndash; ein Objekt in der
            Liste oder auf der Karte anklicken, woraufhin sich die{" "}
            <strong>Infobox</strong> mit den Details öffnet. Über die{" "}
            <strong>Zoom-zu</strong>-Schaltfläche zentrieren Sie die Karte darauf.
            Das <strong>Datenblatt</strong>-Symbol (ℹ️) in der Infobox öffnet das
            vollständige Formular mit allen Feldern des Objekts. Solange das
            Datenblatt geöffnet ist, wechselt das Auswählen eines anderen Objekts
            &ndash; per Klick oder mit den <strong>↑ / ↓</strong>-Tasten &ndash;
            das Formular mit, sodass Sie sich Blatt für Blatt durch die Objekte
            lesen können.
          </p>
          <p>
            <strong>Highlights</strong> betonen eine ausgewählte Menge von
            Objekten und dimmen den Rest. Sie entstehen, wenn Sie eine erweiterte
            Fachobjekt-Suche ausführen oder eine Straße wählen; der Reiter{" "}
            <strong>Highlights</strong> listet alles aktuell Hervorgehobene auf.
            Halten Sie <strong>Alt</strong> und fahren Sie über eine Zeile in der
            Seitenleiste, erscheint eine <strong>×</strong>-Schaltfläche, um ein
            einzelnes Objekt aus der Hervorhebung zu entfernen.
          </p>
          <p>
            <strong>Lasso-Flächenauswahl</strong> &ndash; aktivieren Sie die{" "}
            <strong>Lasso-Schaltfläche</strong> (Polygon-Symbol) in der
            Karten-Werkzeugleiste (sie wird blau) oder halten Sie einfach{" "}
            <strong>Alt</strong>, und zeichnen Sie eine Freihandform um die
            gewünschten Objekte. Beim Loslassen schließt sich die Form, und alle
            darin liegenden Objekte werden ausgewählt. <strong>Esc</strong> bricht
            ab bzw. beendet den Lasso-Modus.
          </p>
        </div>
      }
    />
  );
};
export default Component;
