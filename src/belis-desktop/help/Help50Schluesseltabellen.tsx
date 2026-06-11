import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="schluesseltabellen"
      sectionTitle="Schlüsseltabellen & Einstellungen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Die <strong>Schlüsseltabellen</strong> verwalten die Referenzdaten
            (Nachschlagedaten), die die Auswahllisten überall in der App füllen
            &ndash; Leuchtentypen, Masttypen, Teams, Materialien, Statuswerte und
            mehr. Die Ansicht ist in <strong>drei Spalten</strong> aufgebaut:
          </p>
          <ul>
            <li>
              <strong>Spalte 1 &ndash; Tabellenliste:</strong> alle
              Referenztabellen alphabetisch, jeweils mit ihrer{" "}
              <strong>Eintragsanzahl</strong> in Klammern (z. B. „Leuchtentyp
              (322)"). Eine Tabelle anklicken, um ihre Einträge zu öffnen; über das
              Einklapp-Symbol schaffen Sie mehr Platz und wechseln dann über ein
              Dropdown zwischen den Tabellen.
            </li>
            <li>
              <strong>Spalte 2 &ndash; Einträge:</strong> mit{" "}
              <strong>Suchfeld</strong> (Fuzzy-Suche, filtert während der
              Eingabe), einer <strong>+</strong>-Schaltfläche zum Anlegen eines
              neuen Eintrags und einer <strong>Papierkorb</strong>-Schaltfläche zum
              Löschen des ausgewählten (mit Bestätigung). Ein neuer Eintrag wird
              der Liste erst hinzugefügt, sobald Sie ihn speichern.
            </li>
            <li>
              <strong>Spalte 3 &ndash; Eintragsformular:</strong> die Felder des
              ausgewählten Eintrags (mit etwaiger Pflichtfeld-Validierung), die Sie
              bearbeiten und <strong>Speichern</strong> oder{" "}
              <strong>Zurücksetzen</strong>.
            </li>
          </ul>
          <p>
            Speichern und Löschen werden <strong>zur Synchronisation eingereiht</strong>{" "}
            („… zur Synchronisation hinzugefügt") und wie andere Änderungen
            übergeben. Wechseln Sie bei ungespeicherten Änderungen die Tabelle oder
            den Eintrag, warnt BelIS mit <strong>„Ungespeicherte Änderungen"</strong>{" "}
            (Fortfahren / Abbrechen). Ein{" "}
            <strong>schreibgeschütztes (Gast-)</strong> Konto sieht die Daten, aber
            keine dieser Steuerelemente; einen Export ganzer Tabellen gibt es nicht.
          </p>
          <p>
            <strong>Besonderheiten.</strong> Einige Tabellen tragen{" "}
            <strong>angehängte Dokumente</strong> (PDF-Datenblätter):{" "}
            <strong>Masttyp</strong> und <strong>Leuchtentyp</strong> mehrere
            Dateien, <strong>Rundsteuerempfänger</strong> höchstens eine (nur zum
            Herunterladen). Die Tabelle <strong>Infobaustein Template</strong> ist
            besonders: jeder Eintrag enthält eine eigene verschachtelte Tabelle von{" "}
            <strong>Bausteinen</strong>, deren Zeilen (Schlüssel, Bezeichnung, Wert,
            Pflichtfeld) Sie hinzufügen und entfernen.
          </p>
          <p>
            <strong>Einstellungen.</strong> Über das Zahnrad öffnen Sie:
            Hintergrundkarte und Deckkraft, den <strong>Blass</strong>-Modus, die{" "}
            <strong>optionalen Layer</strong> mit Deckkraft,{" "}
            <strong>Gemerkte Felder zurücksetzen</strong> (leert die
            vorausgefüllten Werte) sowie die <strong>App-Version</strong>.
          </p>
        </div>
      }
    />
  );
};
export default Component;
