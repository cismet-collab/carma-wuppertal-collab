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
            und auf <strong>Anmelden</strong> klicken. Welche Funktionen Ihnen
            danach zur Verfügung stehen, hängt von Ihren Rechten ab: ein{" "}
            <strong>schreibgeschütztes (Gast-)</strong> Konto kann alle Daten
            ansehen, aber nicht bearbeiten &ndash; die Erstellen- und
            Bearbeiten-Steuerelemente werden dann ausgeblendet.{" "}
            <strong>Abmelden</strong> &ndash; im Benutzermenü{" "}
            <strong>Ausloggen</strong> wählen.
          </p>
          <p>
            Über die obere Navigationsleiste erreichen Sie die drei Bereiche der
            Anwendung. Der jeweils aktive Bereich ist blau hervorgehoben:
          </p>
          <ul>
            <li>
              <strong>Fachobjekte</strong> &ndash; die Kartenansicht der
              Beleuchtungsobjekte und Hauptansicht. Hier suchen, betrachten,
              erstellen und bearbeiten Sie Leuchten, Standorte, Leitungen,
              Schaltstellen, Mauerlaschen und Abzweigdosen.
            </li>
            <li>
              <strong>Arbeitsaufträge</strong> &ndash; Planung und Verfolgung von
              Außendiensttätigkeiten. Hier bündeln Sie Fachobjekte zu Aufträgen
              und dokumentieren die geleistete Arbeit in Protokollen.
            </li>
            <li>
              <strong>Schlüsseltabellen</strong> &ndash; die administrativen
              Referenzdaten (Leuchtentypen, Masttypen, Teams, Materialien,
              Statuswerte …), die die Auswahllisten überall in der App füllen.
            </li>
          </ul>
          <p>
            Über den <strong>Seitenleisten-Umschalter</strong> lässt sich das
            Seitenmenü <strong>ein- und ausklappen</strong>, um der Karte mehr
            Platz zu geben. Die App ist für die Arbeit am Desktop ausgelegt; auf
            kleinen Bildschirmen steht nicht der volle Funktionsumfang zur
            Verfügung.
          </p>
        </div>
      }
    />
  );
};
export default Component;
