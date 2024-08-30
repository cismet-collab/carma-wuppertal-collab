import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import Section from "react-cismap/topicmaps/menu/Section";

export const Help10Datengrundlage = () => {
  const { setAppMenuActiveMenuSection } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);
  return (
    <Section
      key="datengrundlage"
      sectionKey="datengrundlage"
      sectionTitle="Datenerhebung"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Modellberechnungen zu den Hitzebelastungen in der Stadt
            Wuppertal wurden vom Ingenieurbüro{" "}
            <a target="_more" href="http://www.k.plan.ruhr/">
              K.PLAN Klima.Umwelt &amp; Planung GmbH
            </a>{" "}
            im Zusammenhang mit der Erstellung des Gutachtens{" "}
            <a
              target="_more"
              href="https://www.wuppertal.de/microsite/klimaschutz/dokumente_downloads/Gutachten_Hitze-in-der-Stadt.pdf"
            >
              Klimawandel-Betroffenheit der Stadt Wuppertal - Themenfeld
              &quot;Hitze in der Stadt&quot;
            </a>{" "}
            vorgenommen. Diese von der Stadt Wuppertal beauftragte Analyse wurde
            im Januar 2019 vom Auftragnehmer vorgelegt und im Februar 2019
            veröffentlicht.
          </p>
          <p>
            Für die Darstellung der Hitzebelastungen im Ist-Zustand wurde durch
            K.Plan eine{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("modellberechnungen")}
            >
              Klimatopkartierung
            </a>{" "}
            erarbeitet, für die die folgenden Datenquellen ausgewertet wurden:
          </p>
          <ul>
            <li>
              <strong>Urban Atlas 2006</strong>: Landnutzungskartierung des
              Wuppertaler Stadtgebietes aus dem EU- und ESA-Projekt &quot;Urban
              Atlas 2006&quot; in 20 Klassen, fertiggestellt 05/2010, abgeleitet
              aus SPOT-5 Satellitenbilddaten vom 17.10.2005, kommerziellen
              Straßennetzdaten und Bodenversiegelungsdaten, geometrische
              Auflösung 1:10.000 (minimale Kartierungseinheit 0,25 ha),
              Lagegenauigkeit +/- 5 Meter, thematische Genauigkeit 90%
            </li>
            <li>
              <strong>Karte der Oberflächentemperaturen</strong>:
              Oberflächentemperaturen der Nachtsituation aus
              Thermalscannerbefliegung vom 28.06.1986, Bodenauflösung 8 Meter
            </li>
            <li>
              <strong>Karte der relativen Lufttemperaturverteilung</strong>:
              relative nächtliche Lufttemperaturen in einer Höhe von 2 Meter bei
              Strahlungswetterlagen, erstellt auf der Grundlage verschiedener
              Klimauntersuchungen für die Stadt Wuppertal seit 1988 sowie von
              Lufttemperaturmessungen der K.Plan an drei Extremstandorten
              (Freiland-Kuppenlage in Ronsdorf, innerstädtische Wärmeinsel in
              Wuppertal-Elberfeld, Freiland-Senkenlage in Uellendahl) im
              Zeitraum 10.07. – 07.08.2018
            </li>
          </ul>
          <p>
            Zur Betrachtung der Hitzebelastungen stellen wir Ihnen drei
            verschiedene Hintergrundkarten bereit, die auf den folgenden
            Geodatendiensten und Geodaten basieren:
          </p>

          <ul>
            <li>
              <strong>Topographische Karte</strong>: (1) Kartendienste (WMS) der
              Stadt Wuppertal. Datengrundlagen: (a){" "}
              <strong>Amtliche Basiskarte ABK Graustufen</strong>. (Wöchentlich
              in einem automatisierten Prozess aus dem Fachverfahren ALKIS des
              Liegenschaftskatasters abgeleitete großmaßstäbige topographische
              Karte in Graustufen.) © Stadt Wuppertal (
              <a target="_more" href="https://www.govdata.de/dl-de/zero-2-0">
                Datenlizenz Deutschland - Zero - Version 2.0
              </a>
              ). (b) <strong>Hillshade</strong> (Schummerungsdarstellung eines
              für hydrologische Fragestellungen optimierten Digitalen
              Geländemodells aus Laserscanner-Befliegungen (12/2008 und 01/2009)
              mit ergänztem Gebäudebestand (Auflösung 25cm x 25cm), ausgeführt
              in 2012 vom Ingenieurbüro Reinhard Beck GmbH &amp; Co. KG /
              Wuppertal.) © Wuppertaler Stadtwerke WSW Energie &amp; Wasser AG.
              (2) Kartendienst (WMS) des Bundesamtes für Kartographie und
              Geodäsie (BKG). Datengrundlage:{" "}
              <strong>
                <a
                  target="_more"
                  href="http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&amp;gdz_akt_zeile=4&amp;gdz_anz_zeile=4&amp;gdz_unt_zeile=0&amp;gdz_user_id=0#dok"
                >
                  WebAtlasDE
                </a>
              </strong>{" "}
              © GeoBasis-DE / BKG 2018
            </li>

            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) der Stadt
              Wuppertal. Datengrundlage:{" "}
              <strong>True Orthophoto aus Bildflug vom 16.03.2022</strong>,
              hergestellt durch Aerowest GmbH/Dortmund, Bodenauflösung 10 cm.
              (True Orthophoto: Aus Luftbildern mit hoher Längs- und
              Querüberdeckung in einem automatisierten Bildverarbeitungsprozess
              berechnetes Bild in Parallelprojektion, also ohne
              Gebäudeverkippung und sichttote Bereiche.) © Stadt Wuppertal (
              <a
                target="_legal"
                href="https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf"
              >
                NB-GDIKOM C
              </a>
              ). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR).
              Datengrundlagen: <strong>Stadtkarte 2.0</strong> und{" "}
              <strong>Kartenschrift aus der Stadtkarte 2.0</strong>. (Details s.
              Hintergrundkarte Stadtplan).
            </li>

            <li>
              <strong>Stadtplan</strong>: Kartendienst (WMS) des
              Regionalverbandes Ruhr (RVR). Datengrundlage:{" "}
              <strong>Stadtkarte 2.0</strong>. Wöchentlich in einem
              automatischen Prozess aktualisierte Zusammenführung des
              Straßennetzes der OpenStreetMap mit Amtlichen Geobasisdaten des
              Landes NRW aus den Fachverfahren ALKIS (Gebäude, Flächennutzungen)
              und ATKIS (Gewässer). © RVR und Kooperationspartner (
              <a target="_legal" href="https://www.govdata.de/dl-de/by-2-0">
                Datenlizenz Deutschland - Namensnennung - Version 2.0
              </a>
              ). Lizenzen der Ausgangsprodukte:{" "}
              <a target="_legal" href="https://www.govdata.de/dl-de/zero-2-0">
                Datenlizenz Deutschland - Zero - Version 2.0
              </a>{" "}
              (Amtliche Geobasisdaten) und{" "}
              <a
                target="_legal"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
          </ul>
        </div>
      }
    />
  );
};
