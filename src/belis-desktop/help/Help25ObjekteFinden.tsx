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
            <strong>Straßensuche</strong> &ndash; geben Sie in der Straßensuche
            einen Straßennamen ein und wählen Sie den passenden Eintrag aus der
            Liste. Die Karte zoomt bzw. schwenkt zu dieser Straße, und die
            gesamte zugehörige Infrastruktur wird <strong>hervorgehoben</strong>:
            die Objekte der Straße bleiben in voller Stärke, während alles andere
            gedimmt wird. Über die <strong>Löschen-Schaltfläche (×)</strong> in
            der Suchleiste entfernen Sie die Hervorhebung wieder. Sie bleibt
            bestehen, bis Sie sie löschen.
          </p>
          <p>
            <strong>Erweiterte Suche</strong> &ndash; über das{" "}
            <strong>Filter-Symbol</strong> geöffnet, arbeitet sie je nach Bereich
            unterschiedlich:
          </p>
          <ul>
            <li>
              <strong>In der Fachobjekte-Ansicht</strong> (Tooltip „Erweiterte
              Suche") wählen Sie den Objekttyp-Reiter (Leuchten, Standorte,
              Schaltstellen, Mauerlaschen) und füllen die typeigenen Kriterien
              aus, gruppiert in <strong>Zeitraum</strong> und{" "}
              <strong>Eigenschaften</strong>. Ein Klick auf{" "}
              <strong>Suchen</strong> hebt die Treffer auf der Karte hervor,
              zoomt passend dazu und listet sie in der Seitenleiste auf.
            </li>
            <li>
              <strong>In der Arbeitsaufträge-Ansicht</strong> (Tooltip
              „Arbeitsaufträge suchen") filtern Sie nach Bearbeitungsstand,
              Auftragsnummer, zugewiesenem Team sowie Anlegedatum und
              -benutzer. Die Treffer füllen die Arbeitsauftragsliste.
            </li>
          </ul>
          <p>
            <strong>Layer-Filter</strong> &ndash; schalten Sie die Layer
            Standorte, Leuchten, Leitungen, Schaltstellen, Abzweigdosen und
            Mauerlaschen einzeln um. Bei aktivierten <strong>Leitungen</strong>{" "}
            lässt sich zusätzlich nach <strong>Leitungstyp</strong> eingrenzen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
