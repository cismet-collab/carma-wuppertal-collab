import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="arbeitsauftraege"
      sectionTitle="Arbeitsaufträge"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Ein <strong>Arbeitsauftrag</strong> bündelt Außendiensttätigkeiten an
            mehreren Fachobjekten. Jedes hervorgehobene Objekt wird darin zu einem{" "}
            <strong>Protokoll</strong>.
          </p>
          <p>
            <strong>Neu anlegen</strong> &ndash; heben Sie zunächst die nötigen
            Fachobjekte hervor (siehe „Objekte ansehen, auswählen &amp;
            hervorheben") und drücken Sie die <strong>+-Schaltfläche</strong> in
            der oberen Leiste. Ein gelbes Abzeichen zeigt die Zahl der Protokolle.
            Füllen Sie <strong>Bezeichnung</strong>, <strong>Beschreibung</strong>{" "}
            und das zugewiesene <strong>Team</strong> aus und klicken Sie auf{" "}
            <strong>Speichern</strong>. Um Objekte einem bestehenden Auftrag
            hinzuzufügen, wählen Sie den Auftrag in der Arbeitsaufträge-Ansicht
            aus, öffnen über den <strong>▾-Pfeil</strong> das Dropdown und wählen{" "}
            <strong>Zum ausgewählten AA hinzufügen</strong>.
          </p>
          <p>
            <strong>Finden &amp; filtern</strong> &ndash; über das{" "}
            <strong>Team-Dropdown</strong> zeigen Sie nur die Aufträge eines Teams;
            die erweiterte Suche (Filter-Symbol) filtert nach Bearbeitungsstand,
            Auftragsnummer, Team, Anlegedatum und -benutzer.
          </p>
          <p>
            Die Seitenleiste hat zwei Reiter: den <strong>AA-Reiter</strong> mit
            den Arbeitsaufträgen (Auftragsnummer, Team, Anlegedatum,
            Protokollanzahl und farbigem Statusbalken) und den{" "}
            <strong>AP-Reiter</strong> mit den Protokollen des ausgewählten
            Auftrags. Das Datenblatt eines Arbeitsauftrags zeigt seine Kopffelder
            und die Tabelle <strong>Protokolle</strong>; im Bearbeitungsmodus
            lassen sich Protokolle über das Papierkorb-Symbol zur Entfernung
            markieren.
          </p>
          <p>
            Ein <strong>Protokoll</strong> erfasst die an einem Fachobjekt
            geleistete Arbeit (Monteur, Datum, Status, Material, Bemerkung). Unter{" "}
            <strong>Aktionen</strong> wählen Sie standardisierte Tätigkeiten, die
            erfassen, was getan wurde, und die Daten des verknüpften Objekts
            aktualisieren; die verfügbaren Aktionen hängen vom Objekttyp ab. Über
            den <strong>Entwurfsmodus</strong> (Speichern-Symbol mit gelbem
            Abzeichen) filtern Sie die Listen auf nur das, was Sie geändert haben.
          </p>
        </div>
      }
    />
  );
};
export default Component;
