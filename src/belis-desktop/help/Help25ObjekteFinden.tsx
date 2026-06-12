import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="objekte-finden"
      sectionTitle="Objekte finden"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <strong>Straßensuche.</strong> Geben Sie in der Straßensuche einen
            Straßennamen ein und wählen Sie den passenden Eintrag aus der Liste.
          </p>
          <ul>
            <li>
              Die Karte <strong>zoomt bzw. schwenkt zu dieser Straße</strong> &ndash;
              sie passt sich der Ausdehnung der Straße an oder zoomt auf deren
              Mittelpunkt.
            </li>
            <li>
              Die gesamte zur Straße gehörende Infrastruktur wird{" "}
              <strong>hervorgehoben</strong>: ihre Objekte bleiben in voller
              Stärke, während alles andere gedimmt wird, sodass die Straße
              hervorsticht.
            </li>
            <li>
              In der Suchleiste erscheint eine{" "}
              <strong>Löschen-Schaltfläche (×)</strong>; ein Klick darauf entfernt
              die Hervorhebung und setzt die Karte zurück. Die Hervorhebung bleibt
              bestehen, bis Sie sie löschen &ndash; es gibt keine Zeitbegrenzung.
            </li>
          </ul>
          <p>
            <strong>Erweiterte Suche.</strong> Über das{" "}
            <strong>Filter-Symbol</strong> geöffnet, arbeitet sie je nach Bereich
            unterschiedlich:
          </p>
          <p>
            <strong>A) In der Fachobjekte-Ansicht</strong> (Tooltip „Erweiterte
            Suche") suchen Sie nach Objekten. Wählen Sie den Objekttyp-Reiter und
            füllen Sie die typeigenen Kriterien aus, gruppiert in{" "}
            <strong>Zeitraum</strong> und <strong>Eigenschaften</strong>:
          </p>
          <ul>
            <li>
              <strong>Leuchten</strong> &ndash; Datumsangaben (Inbetriebnahme,
              Wechseldatum, Nächster Wechsel) sowie Leuchtentyp, Schaltstelle,
              Rundsteuerempfänger, Bezirk und Doppelkommando (DK 1 / DK 2).
            </li>
            <li>
              <strong>Standorte</strong> &ndash; Datumsangaben (Inbetriebnahme
              Mast, Mastschutz, Mastanstrich, Elektrische Prüfung,
              Standsicherheitsprüfung) sowie Mastart, Masttyp, Klassifizierung,
              Anlagengruppe, Unterhaltspflicht und Bezirk.
            </li>
            <li>
              <strong>Schaltstellen</strong> &ndash; Datumsangaben
              (Erstellungsjahr, Einbaudatum, Prüfung) sowie Bauart und
              Rundsteuerempfänger.
            </li>
            <li>
              <strong>Mauerlaschen</strong> &ndash; Datumsangaben (Montage,
              Prüfung) sowie Material.
            </li>
          </ul>
          <p>
            Ein Klick auf <strong>Suchen</strong> hebt die Treffer auf der Karte
            hervor, zoomt passend dazu und listet sie in der Seitenleiste zur
            Durchsicht auf.
          </p>
          <p>
            <strong>B) In der Arbeitsaufträge-Ansicht</strong> (Tooltip
            „Arbeitsaufträge suchen") suchen Sie nach Aufträgen &ndash; nach{" "}
            <strong>Bearbeitungsstand</strong> (alle / nur offene / nur
            abgearbeitete), <strong>Auftragsnummer</strong>,{" "}
            <strong>zugewiesenem Team</strong> sowie{" "}
            <strong>Angelegt am</strong> und <strong>Angelegt von</strong>. Die
            Treffer füllen die Arbeitsauftragsliste (ohne Karten-Hervorhebung).
          </p>
        </div>
      }
    />
  );
};
export default Component;
