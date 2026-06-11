import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="karte"
      sectionTitle="Arbeiten mit der Karte"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Die Karte ist die zentrale Arbeitsfläche der Fachobjekte-Ansicht. Sie
            zeigt die Beleuchtungsinfrastruktur als Layer, die Sie einzeln ein-
            und ausblenden können.
          </p>
          <ul>
            <li>
              <strong>Zoomen</strong> &ndash; mit dem Mausrad oder über die
              Schaltflächen <strong>+</strong> / <strong>&minus;</strong> am
              Kartenrand.
            </li>
            <li>
              <strong>Verschieben</strong> &ndash; in die Karte klicken und
              ziehen.
            </li>
            <li>
              <strong>Vollbild</strong> &ndash; über die Vollbild-Steuerung auf
              der Karte, um den Browser-Rahmen auszublenden.
            </li>
          </ul>
          <p>
            <strong>Hintergrundkarte</strong> &ndash; öffnen Sie die{" "}
            <strong>Einstellungen</strong> (Zahnrad) und wählen Sie unter{" "}
            <strong>Hintergrund</strong> eine Basiskarte. Dort passen Sie die{" "}
            <strong>Deckkraft</strong> der Hintergrundkarte an und aktivieren bei
            Bedarf den <strong>Blass</strong>-Modus, der die Hintergrundkarte
            entsättigt und aufhellt, damit die farbigen Fachobjekte deutlicher
            hervortreten. Die Auswahl wird gespeichert und beim nächsten Öffnen
            wiederhergestellt.
          </p>
          <p>
            <strong>Zusätzliche Layer</strong> &ndash; haken Sie in den
            Einstellungen die gewünschten <strong>optionalen Layer</strong> an,
            um weitere Karteninhalte einzublenden, und stellen Sie für jeden den
            eigenen <strong>Deckkraft-Regler</strong> ein, um mehrere Layer
            sinnvoll übereinanderzulegen.
          </p>
          <p>
            Welche <strong>Fachobjekt-Layer</strong> (Standorte, Leuchten,
            Leitungen, Schaltstellen, Abzweigdosen, Mauerlaschen) sichtbar sind,
            steuern Sie über den Layer-Filter &ndash; siehe Abschnitt{" "}
            <em>Objekte finden</em>.
          </p>
        </div>
      }
    />
  );
};
export default Component;
