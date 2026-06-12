import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="ueber-belis"
      sectionTitle="Über BelIS Desktop"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            BelIS Desktop verwaltet die Beleuchtungsinfrastruktur der Stadt
            Wuppertal als Sammlung von <strong>Fachobjekten</strong> auf einer
            Karte. Jeder Objekttyp hat eine eigene Kennzeichnung:
          </p>
          <ul>
            <li>
              <strong>Leuchten</strong> &ndash; <code>L-{"{Nummer}"}</code>
            </li>
            <li>
              <strong>Standorte / Masten</strong> &ndash;{" "}
              <code>Standort {"{Nr}"}</code> / <code>Mast - {"{Nr}"}</code>
            </li>
            <li>
              <strong>Leitungen</strong> &ndash; <code>L-{"{ID}"}</code>, mit
              Länge in Metern
            </li>
            <li>
              <strong>Schaltstellen</strong> &ndash; <code>S {"{Nr}"}</code>
            </li>
            <li>
              <strong>Mauerlaschen</strong> &ndash; <code>M-{"{Nr}"}</code>
            </li>
            <li>
              <strong>Abzweigdosen</strong> &ndash; <code>AZD-{"{ID}"}</code>
            </li>
          </ul>
          <p>
            Die Anwendung gliedert sich in drei Bereiche, zwischen denen Sie über
            die obere Navigationsleiste wechseln: <strong>Fachobjekte</strong>{" "}
            (die Kartenansicht der Beleuchtungsobjekte und Hauptansicht),{" "}
            <strong>Arbeitsaufträge</strong> (Planung und Verfolgung von
            Außendiensttätigkeiten) und <strong>Schlüsseltabellen</strong> (die
            administrativen Referenzdaten). Die einzelnen Schaltflächen dieses
            Dialogs erläutern die jeweiligen Arbeitsschritte im Detail.
          </p>
          <p>
            Im Bereich Arbeitsaufträge begegnen Ihnen zwei zentrale Begriffe:
          </p>
          <ul>
            <li>
              <strong>Arbeitsauftrag (AA)</strong> &ndash; <code>AA-{"{Nr}"}</code>.
              Bündelt zusammengehörige Außendiensttätigkeiten und enthält ein oder
              mehrere Protokolle. Jedes hervorgehobene Fachobjekt wird beim Anlegen
              zu einem Protokoll des Auftrags.
            </li>
            <li>
              <strong>Arbeitsprotokoll (AP)</strong> &ndash; <code>#{"{Nr}"}</code>.
              Erfasst die an einem einzelnen Fachobjekt (Leuchte, Mast,
              Schaltstelle &hellip;) innerhalb eines Arbeitsauftrags geleistete
              Arbeit &ndash; mit Monteur, Datum, Status, Material, Bemerkung und den
              ausgeführten Aktionen.
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
