import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { LuftbildkarteText } from "../../commons";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="datengrundlage"
      sectionTitle="Datengrundlagen"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte Wuppertal stellt wahlweise die
            Maximalwerte oder den zeitlichen Verlauf von Wassertiefen oder
            Fließgeschwindigkeiten dar, die im Verlauf von simulierten
            Starkregenereignissen auftreten. Dazu wird ein Raster mit einer
            Kantenlänge von 1 m benutzt. Die Wassertiefen und
            Fließgeschwindigkeiten werden jeweils mit einem Farbverlauf
            visualisiert. Der Farbverlauf für die <strong>Wassertiefen</strong>{" "}
            benutzt die Eckwerte 20 cm (blau), 40 cm (gelb), 75 cm (orange) und
            100 cm (rot). Wassertiefen unter 10 cm werden nicht farbig
            ausgeprägt (transparente Darstellung). Zur Visualisierung der{" "}
            <strong>Fließgeschwindigkeiten</strong>, angegeben in Meter pro
            Sekunde (m/s), werden die Eckwerte 0,5 m/s (gelb), 2,0 m/s (orange),
            4,0 m/s (hellrot) und 6 m/s (dunkelrot) verwendet. Der untere
            Grenzwert für die farbige Anzeige einer Fließgeschwindigkeit liegt
            bei 0,5 m/s. Die Simulationsberechnungen wurden im Auftrag der Stadt
            Wuppertal und der Wuppertaler Stadtwerke (WSW Energie und Wasser AG)
            durch das Ingenieurbüro Dr. Pecher AG (Erkrath) durchgeführt. Der
            Regenwasserabfluss im Kanalnetz und durch Überstau aus dem Kanalnetz
            austretendes Wasser wurden hierbei vereinfacht berücksichtigt,
            ebenso die unterschiedlichen Abflussgeschwindigkeiten auf
            Oberflächen mit unterschiedlicher Rauhigkeit (z. B. auf einer Straße
            schneller als auf einer Wiese). Die Informationen zur
            Oberflächenbeschaffenheit stammen dabei zum größten Teil aus dem
            Versiegelungsdaten-Informationssystem VerDIS der Stadtverwaltung
            Wuppertal.
          </p>

          <p>
            Die Simulationen basieren auf dem Digitalen Geländemodell (DGM) von
            Wuppertal, abgeleitet aus flächenhaften Höhenmessungen, die das Land
            NRW turnusmäßig mit einem Laserscanner aus einem Flugzeug heraus
            durchführt (verwendeter Datenstand überwiegend Anfang 2015). Das DGM
            wurde um die Gebäude aus dem Wuppertaler Liegenschaftskataster und
            verrohrte Gewässerabschnitte aus der Kanalnetzdatenbank der WSW
            Energie &amp; Wasser AG sowie weitere Durchlässe ergänzt, um eine
            hydrologisch korrekte Abflussberechnung zu gewährleisten. Ab Version
            2.1 wird die Wupper mit einem unendlichen Fassungsvermögen für das
            zufließende Regenwasser modelliert. Es kann in den Simulationen nun
            also nicht mehr zu einem Rückstau kommen, bei dem das Regenwasser
            Flächen in der Talsohle überflutet, weil es von der Wupper nicht
            mehr abgeleitet werden kann. Die Überflutungen, die durch hohe
            Pegelstände entlang der Wupper und einiger wichtiger Zuflüsse der
            Wupper entstehen können, werden in den Hochwassersimulationen des
            Landes NRW betrachtet. Die Stadt Wuppertal stellt den hieraus für
            Wuppertal relevanten Ausschnitt seit Mai 2024 in der interaktiven{" "}
            <a
              target="_legal"
              href="https://digital-twin-wuppertal-live.github.io/floodingmap/#?lat=51.271680556266894&lng=7.199681997299195&zoom=18"
            >
              Hochwassergefahrenkarte Wuppertal
            </a>{" "}
            bereit, die weitgehend wie die Starkregengefahrenkarte zu bedienen
            ist. Die beiden Karten lassen sich so miteinander{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("koppelung")}
            >
              koppeln
            </a>
            , dass man die Gefahr durch beide Szenarien - Starkregen und
            Flusshochwasser - gut beurteilen kann.{" "}
            <strong>
              Bei kleineren Gewässern wie dem Mirker Bach wird die Überlagerung
              der Überflutungen durch ablaufendes Regenwasser und über die Ufer
              tretendes Gewässer in der Starkregengefahrenkarte abgebildet. Bei
              der Wupper, einem Gewässer mit einem großen hydrologischen
              Einzugsgebiet überwiegend außerhalb des Wuppertaler Stadtgebietes,
              ist das nicht gegeben. Die Gefahr einer Überflutung durch die über
              die Ufer tretende Wupper sollte daher nur anhand der
              Hochwassergefahrenkarte beurteilt werden.
            </strong>{" "}
            Weitere Verbesserungen in Version 2.1 der Simulationsberechnungen
            betreffen die Beseitigung einzelner kleinräumiger Fehler im
            Geländemodell, die Nutzer*innen jederzeit interaktiv melden können.
          </p>

          <p>
            Darüber hinaus ist das Ergebnis der Simulation natürlich von der
            Dauer und Intensität des Regens abhängig, der für die Simulation
            angenommen wird. Wir bieten Ihnen hierzu vier unterschiedliche{" "}
            <a onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              simulierte Szenarien
            </a>{" "}
            an, drei "Modellregen" sowie das anhand der Niederschlagsmessungen
            desselben Tages nachgestellte Starkregenereignis vom 29.05.2018. Die
            maximalen Wassertiefen und Fließgeschwindigkeiten zu allen vier
            Szenarien publizieren wir auch auf dem Wuppertaler{" "}
            <a
              target="_legal"
              href="https://offenedaten-wuppertal.de/search?query=starkregen"
            >
              Open-Data-Portal
            </a>
            .{" "}
          </p>

          <p>
            Zur Betrachtung der Wassertiefen stellen wir Ihnen drei verschiedene
            Hintergrundkarten bereit, die auf den folgenden Geodatendiensten und
            Geodaten basieren:
          </p>

          <ul>
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
            <li>
              <strong>Topographische Karte</strong>: (1) Kartendienste (WMS) der
              Stadt Wuppertal. Datengrundlagen: (a){" "}
              <b>Amtliche Basiskarte ABK Graustufen</b>. (Wöchentlich in einem
              automatisierten Prozess aus dem Fachverfahren ALKIS des
              Liegenschaftskatasters abgeleitete großmaßstäbige topographische
              Karte in Graustufen.) © Stadt Wuppertal (
              <a target="_legal" href="https://www.govdata.de/dl-de/zero-2-0">
                Datenlizenz Deutschland - Zero - Version 2.0)
              </a>
              . (b) <b>Hillshade</b> (Schummerungsdarstellung eines für
              hydrologische Fragestellungen optimierten Digitalen Geländemodells
                aus Laserscanner-Befliegungen (12/2008 und 01/2009) mit ergänztem
              Gebäudebestand (Auflösung 25 cm x 25 cm), ausgeführt in 2012 vom
              Ingenieurbüro Reinhard Beck GmbH & Co. KG / Wuppertal.) ©
              Wuppertaler Stadtwerke WSW Energie & Wasser AG. (2) Kartendienst
              (WMS) des Regionalverbandes Ruhr (RVR). Datengrundlage:{" "}
              <b>Stadtkarte 2.0</b> ohne Kartenschrift. (Details s.
              Hintergrundkarte Stadtplan.) (3) Kartendienst (WMS) des
              Bundesamtes für Kartographie und Geodäsie (
              <a target="_blank" href="https://www.bkg.bund.de/">
                BKG
              </a>
              ). Datengrundlage: <b>basemap.de Web Vektor</b> © GeoBasis-DE /{" "}
              <a target="_blank" href="https://www.bkg.bund.de/">
                BKG
              </a>{" "}
              (2024){" "}
              <a
                target="_blank"
                href="https://creativecommons.org/licenses/by/4.0/"
              >
                CC BY 4.0
              </a>
              .
            </li>
            <LuftbildkarteText />
          </ul>
        </div>
      }
    />
  );
};
export default Component;
