import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="anmelden-navigation"
      sectionTitle="An- und Abmelden, Navigation"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            <strong>Anmelden</strong> &ndash; die App öffnen,{" "}
            <strong>Benutzername</strong> und <strong>Passwort</strong> eingeben
            und auf <strong>Anmelden</strong> klicken.{" "}
            <strong>Abmelden</strong> &ndash; im Benutzermenü{" "}
            <strong>Ausloggen</strong> wählen.
          </p>
          <p>
            Über die obere Navigationsleiste erreichen Sie die drei Bereiche der
            Anwendung:
          </p>
          <ul>
            <li>
              <strong>Fachobjekte</strong> &ndash; die Kartenansicht der
              Beleuchtungsobjekte (Hauptansicht).
            </li>
            <li>
              <strong>Arbeitsaufträge</strong> &ndash; Planung und Verfolgung von
              Außendiensttätigkeiten.
            </li>
            <li>
              <strong>Schlüsseltabellen</strong> &ndash; die administrativen
              Referenzdaten, die die Auswahllisten der Anwendung füllen.
            </li>
          </ul>
          <p>
            Über den Seitenleisten-Umschalter lässt sich das Seitenmenü{" "}
            <strong>ein- und ausklappen</strong>, um der Karte mehr Platz zu
            geben.
          </p>
        </div>
      }
    />
  );
};
export default Component;
