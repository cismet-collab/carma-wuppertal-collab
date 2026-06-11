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
            <strong>Fachobjekte</strong> (die Objekte im aktuellen Ausschnitt),{" "}
            <strong>Highlights</strong> (die aktuell hervorgehobene Menge) und{" "}
            <strong>Entwürfe</strong> (Ihre ungespeicherten Änderungen).
          </p>
          <p>
            <strong>Auswählen und ansehen.</strong> Ein Objekt in der Liste oder
            auf der Karte anklicken &ndash; die <strong>Infobox</strong> öffnet
            sich mit den Details und einer <strong>Zoom-zu</strong>-Schaltfläche,
            die die Karte darauf zentriert. Das{" "}
            <strong>Datenblatt</strong>-Symbol (ℹ️, Tooltip „Datenblatt") öffnet
            das vollständige Formular mit allen Feldern des Objekts. Solange das
            Datenblatt geöffnet bleibt, <strong>wechselt das Formular mit</strong>,
            wenn Sie ein anderes Objekt wählen &ndash; per Klick auf eine
            Listenzeile oder mit den <strong>↑ / ↓</strong>-Tasten &ndash; sodass
            Sie das Blatt offen lassen und sich nacheinander durch die Objekte
            lesen können.
          </p>
          <p>
            <strong>In der Liste navigieren.</strong> Gruppenüberschriften
            (Standorte/Leuchten, Leitungen, Schaltstellen, Mauerlaschen)
            anklicken, um sie <strong>auf- und zuzuklappen</strong>; mit den{" "}
            <strong>↑ / ↓</strong>-Pfeiltasten durch die Liste bewegen.
          </p>
          <p>
            <strong>Lasso-Flächenauswahl.</strong> Es gibt zwei Wege:
          </p>
          <ul>
            <li>
              Die <strong>Lasso-Schaltfläche</strong> (Polygon-Symbol) in der
              Karten-Werkzeugleiste anklicken (Tooltip „Lasso-Auswahl starten").
              Sie wird <strong>blau</strong>; nun können Sie zeichnen, ohne eine
              Taste zu halten. Erneut anklicken oder <strong>Esc</strong> beendet
              den Lasso-Modus.
            </li>
            <li>
              Ohne die Schaltfläche zu aktivieren, einfach <strong>Alt</strong>{" "}
              halten und zeichnen.
            </li>
          </ul>
          <p>
            In beiden Fällen eine Freihandform um die Objekte ziehen (linke
            Maustaste gedrückt halten und den Cursor wie einen Stift bewegen) und
            loslassen, um abzuschließen &ndash; die Form schließt sich automatisch
            und alle darin oder daran liegenden Objekte werden ausgewählt.{" "}
            <strong>Esc</strong> bricht ab.
          </p>
          <p>
            <strong>Highlights</strong> betonen eine ausgewählte Menge von
            Objekten visuell und dimmen den Rest, sodass sie leicht zu finden
            sind. Sie entstehen, wenn Sie eine{" "}
            <strong>erweiterte Fachobjekt-Suche</strong> ausführen oder eine{" "}
            <strong>Straße</strong> wählen; der Reiter <strong>Highlights</strong>{" "}
            listet alles aktuell Hervorgehobene auf, und ein Klick auf einen
            Eintrag springt zum Objekt. Um <strong>ein einzelnes Element</strong>{" "}
            zu entfernen, <strong>Alt</strong> halten und über eine Zeile in der
            Seitenleiste fahren &ndash; eine <strong>×</strong>-Schaltfläche
            erscheint, die nur dieses Objekt aus den Highlights nimmt.
          </p>
          <p>
            <strong>Auswahl-Block.</strong> Sind Highlights aktiv und Sie klicken
            einen noch nicht hervorgehobenen <strong>Standort</strong> oder eine{" "}
            <strong>Leuchte</strong> an, erscheint ein „Auswahl"-Block mit diesem
            Objekt und den zugehörigen (ein Standort mit allen seinen Leuchten
            bzw. eine Leuchte mit ihrem Standort und den Geschwister-Leuchten).{" "}
            <strong>Alt</strong> halten blendet Schnell-Hinzufügen-Schaltflächen
            ein: in der Standort-Zeile <strong>+</strong> („Standort hinzufügen")
            und <strong>++</strong> („Standort mit allen Leuchten hinzufügen"), in
            jeder Leuchten-Zeile <strong>+</strong> („Leuchte hinzufügen").
          </p>
        </div>
      }
    />
  );
};
export default Component;
