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
            Die Karte ist die zentrale Arbeitsfläche der Fachobjekte-Ansicht.
          </p>
          <ul>
            <li>
              <strong>Zoomen</strong> &ndash; mit dem Mausrad oder über die
              Schaltflächen <strong>+</strong> / <strong>&minus;</strong>.
            </li>
            <li>
              <strong>Verschieben</strong> &ndash; klicken und ziehen.
            </li>
            <li>
              <strong>Vollbild</strong> &ndash; über die Vollbild-Steuerung auf
              der Karte.
            </li>
          </ul>
          <p>
            <strong>Hintergrundkarte</strong> &ndash; öffnen Sie die{" "}
            <strong>Einstellungen</strong> (Zahnrad) und wählen Sie unter{" "}
            <strong>Hintergrund</strong> eine Basiskarte. Dort passen Sie die{" "}
            <strong>Deckkraft</strong> an und aktivieren bei Bedarf den{" "}
            <strong>Blass</strong>-Modus, der die Hintergrundkarte dezenter
            erscheinen lässt, damit die Fachobjekte besser hervortreten.
          </p>
          <p>
            <strong>Zusätzliche Layer</strong> &ndash; haken Sie in den
            Einstellungen die gewünschten <strong>optionalen Layer</strong> an
            und stellen Sie für jeden den <strong>Deckkraft-Regler</strong> ein.
          </p>
        </div>
      }
    />
  );
};
export default Component;
