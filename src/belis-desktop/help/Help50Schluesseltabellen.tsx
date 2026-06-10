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
            (Nachschlagedaten), die die Auswahllisten an anderer Stelle in der App
            füllen &ndash; Leuchtentypen, Masttypen, Teams, Materialien,
            Statuswerte und mehr. Die Ansicht ist in <strong>drei Spalten</strong>{" "}
            aufgebaut:
          </p>
          <ul>
            <li>
              <strong>Spalte 1 &ndash; Tabellenliste:</strong> alle
              Referenztabellen alphabetisch mit ihrer Eintragsanzahl in Klammern.
              Eine Tabelle anklicken, um ihre Einträge zu öffnen.
            </li>
            <li>
              <strong>Spalte 2 &ndash; Einträge:</strong> mit{" "}
              <strong>Suchfeld</strong> (Fuzzy-Suche), einer{" "}
              <strong>+</strong>-Schaltfläche zum Hinzufügen und einer{" "}
              <strong>Papierkorb</strong>-Schaltfläche zum Löschen des
              ausgewählten Eintrags.
            </li>
            <li>
              <strong>Spalte 3 &ndash; Eintragsformular:</strong> die Felder des
              ausgewählten Eintrags, die Sie bearbeiten und{" "}
              <strong>Speichern</strong> oder <strong>Zurücksetzen</strong>.
            </li>
          </ul>
          <p>
            Speichern und Löschen werden zur Synchronisation eingereiht. Ein{" "}
            <strong>schreibgeschütztes (Gast-)</strong> Konto sieht die Daten, aber
            keine Bearbeitungssteuerelemente. Wechseln Sie bei ungespeicherten
            Änderungen, warnt BelIS mit <strong>„Ungespeicherte Änderungen"</strong>.
            Einige Tabellen (Masttyp, Leuchtentyp, Rundsteuerempfänger) tragen
            herunterladbare <strong>Dokumente</strong>; die Tabelle{" "}
            <strong>Infobaustein Template</strong> definiert verschachtelte
            Baustein-Vorlagen.
          </p>
          <p>
            In den <strong>Einstellungen</strong> (Zahnrad) finden Sie
            Hintergrundkarte und Deckkraft, den <strong>Blass</strong>-Modus, die{" "}
            <strong>optionalen Layer</strong> mit Deckkraft,{" "}
            <strong>Gemerkte Felder zurücksetzen</strong> sowie die{" "}
            <strong>App-Version</strong>.
          </p>
        </div>
      }
    />
  );
};
export default Component;
