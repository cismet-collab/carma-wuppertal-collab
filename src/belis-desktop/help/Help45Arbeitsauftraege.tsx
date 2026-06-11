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
            Ein <strong>Arbeitsauftrag (AA)</strong> bündelt
            Außendiensttätigkeiten an mehreren Fachobjekten. Jedes hervorgehobene
            Objekt wird darin zu einem <strong>Protokoll (AP)</strong>, das die an
            diesem Objekt geleistete Arbeit erfasst.
          </p>
          <p>
            <strong>Neu anlegen.</strong> Heben Sie zunächst die nötigen
            Fachobjekte hervor (siehe <em>Objekte ansehen</em>) und drücken Sie die{" "}
            <strong>+-Schaltfläche</strong> in der oberen Leiste. Sie erscheint
            erst, sobald Highlights vorhanden sind, und ein{" "}
            <strong>gelbes Abzeichen</strong> zeigt die Anzahl der Protokolle.
            Füllen Sie <strong>Bezeichnung</strong>, <strong>Beschreibung</strong>{" "}
            und ein zugewiesenes <strong>Team</strong> aus und{" "}
            <strong>speichern</strong>. Um Objekte einem bestehenden Auftrag
            hinzuzufügen, heben Sie sie hervor, wählen den Auftrag in der
            Arbeitsaufträge-Ansicht aus, öffnen über den <strong>▾-Pfeil</strong>{" "}
            das Dropdown und wählen <strong>Zum ausgewählten AA hinzufügen</strong>;
            der Bestätigungsdialog nennt die Anzahl der Protokolle.
          </p>
          <p>
            <strong>Finden &amp; filtern.</strong> Das{" "}
            <strong>Team-Dropdown</strong> (durchsuchbar, löschbar) zeigt nur die
            Aufträge eines Teams &ndash; ein Teamwechsel setzt die aktuelle Auswahl
            zurück. Die erweiterte Suche (Filter-Symbol) filtert nach
            Bearbeitungsstand, Auftragsnummer, Team, Anlegedatum und -benutzer.
          </p>
          <p>
            Die Seitenleiste hat zwei Reiter:
          </p>
          <ul>
            <li>
              <strong>AA-Reiter</strong> &ndash; die Arbeitsaufträge, je Zeile mit{" "}
              <strong>Auftragsnummer</strong> (z. B. AA-456), <strong>Team</strong>,{" "}
              <strong>Anlegedatum</strong>, <strong>Protokollanzahl</strong> und
              einem <strong>farbigen Statusbalken</strong> (Anteil offen / in
              Bearbeitung / erledigt / Fehlmeldung). Ein Klick wählt den Auftrag
              aus und lädt seine Protokolle.
            </li>
            <li>
              <strong>AP-Reiter</strong> &ndash; erscheint, sobald ein Auftrag
              ausgewählt ist, und listet dessen <strong>Protokolle</strong> mit
              einer Status-Pille je Eintrag.
            </li>
          </ul>
          <p>
            <strong>Datenblätter.</strong> Das <strong>AA-Datenblatt</strong> zeigt
            Auftragsnummer, Team, Bezeichnung, Beschreibung, Angelegt von/am und die
            Tabelle <strong>Protokolle</strong> (#, Herkunft, Fachobjekt,
            Kennzeichnung, Bearbeiter, Position, Status). Im Bearbeitungsmodus
            erscheint je Zeile ein <strong>Papierkorb-Symbol</strong>, um Protokolle
            zur Entfernung zu markieren (rückgängig per Pfeil-Symbol); die
            Überschrift markiert alle auf einmal. Das{" "}
            <strong>AP-Datenblatt</strong> hat zwei Reiter:{" "}
            <strong>Allgemein</strong> mit den eigenen Feldern (Monteur, Datum,
            Status, Material, Bemerkung) und einen nach dem verknüpften{" "}
            <strong>Fachobjekt</strong> benannten Reiter.
          </p>
          <p>
            <strong>Aktionen.</strong> Eine Aktion ist eine standardisierte
            Tätigkeit, die erfasst, was getan wurde, und die Daten des verknüpften
            Objekts aktualisiert. Im Bearbeitungsmodus einen Aktions-Tag anklicken,
            die Felder ausfüllen und <strong>Aktion ausführen</strong>; sie
            erscheint dann unter <strong>Geplante Aktionen</strong> mit den
            Feldänderungen (von → zu). Welche Aktionen verfügbar sind, hängt vom
            Objekttyp ab (z. B. Mast: Anstricharbeiten, Elektrische Prüfung,
            Standsicherheitsprüfung …; Leuchte: Leuchtmittelwechsel,
            Vorschaltgerätwechsel …).
          </p>
          <p>
            <strong>Entwurfsmodus.</strong> Neben dem Titel „Arbeitsaufträge"
            erscheint ein <strong>Speichern-Symbol</strong> mit gelbem Abzeichen,
            sobald ungespeicherte Entwürfe vorliegen. Ein Klick (Schaltfläche wird
            blau) filtert die Listen auf <strong>nur das, was Sie geändert
            haben</strong>. Wie überall gilt: <strong>Speichern</strong> übergibt
            einen Entwurf, <strong>Alle speichern</strong> den ganzen Stapel.
          </p>
        </div>
      }
    />
  );
};
export default Component;
