import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
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
            Die Hochwassergefahrenkarte Wuppertal basiert auf den{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              Hochwassersimulationen
            </a>
            , die das Land NRW nach den Vorgaben der
            EU-Hochwasserrisikomanagement-Richtlinie (EU-HWRM-RL) in einem
            Turnus von sechs Jahren für die Risikogewässer des Landes berechnet.
            Derzeit sind die im Dezember 2019 vorgelegten Ergebnisse des zweiten
            Umsetzungszyklus der EU-HWRM-RL verfügbar. Sie wurden vom Land NRW
            als Open Data unter der Lizenz "Datenlizenz Deutschland – Zero –
            Version 2.0" publiziert und sind z. B. über einen{" "}
            <a
              target="_blank"
              href="https://www.gis-rest.nrw.de/atomFeed/rest/atom/182925c1-879f-4054-bd69-b6f28e05b270.html"
            >
              ATOM-Feed-Downloadservice
            </a>{" "}
            zu beziehen. Die Hochwassergefahrenkarte Wuppertal verwendet nur die
            Simulationsergebnisse für die Risikogewässer, die durch das
            Wuppertaler Stadtgebiet verlaufen (Wupper, Schwelme, Mirker Bach,
            Morsbach, Hardenberger Bach, Deilbach).
          </p>
          <p>
            Zur <b>2D-Betrachtung</b> der Wassertiefen stellen wir Ihnen drei verschiedene
            Hintergrundkarten bereit, die auf den folgenden Geodatendiensten und
            Geodaten basieren:
          </p>
          <ul>
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
            <LuftbildkarteText ohneKartenschrift=" (ohne Kartenschrift)" />
            <li>
              <strong>Stadtplan</strong>: Kartendienst (WMS) des
              Regionalverbandes Ruhr (RVR). Datengrundlage:{" "}
              <b>Stadtkarte 2.0</b>. Wöchentlich in einem automatischen Prozess
              aktualisierte Zusammenführung des Straßennetzes der OpenStreetMap
              mit Amtlichen Geobasisdaten des Landes NRW aus den Fachverfahren
              ALKIS (Gebäude, Flächennutzungen) und ATKIS (Gewässer). © RVR und
              Kooperationspartner (
              <a target="_blank" href="https://www.govdata.de/dl-de/by-2-0">
                Datenlizenz Deutschland - Namensnennung - Version 2.0
              </a>
              ). Lizenzen der Ausgangsprodukte:{" "}
              <a target="_blank" href="https://www.govdata.de/dl-de/zero-2-0">
                Datenlizenz Deutschland - Zero - Version 2.0
              </a>{" "}
              (Amtliche Geobasisdaten) und{" "}
              <a
                target="_blank"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
          </ul>
          <p>
            Die <b>3D-Betrachtung</b> der überfluteten Flächen erfolgt auf der Grundlage eines 
            sog. 3D-Mesh, das von der Firma Aerowest GmbH/Dortmund aus den Ergebnisdaten 
            (Senkrecht- und Schrägaufnahmen) der ebenfalls von Aerowest durchgeführten 
            Bildflüge vom 14.03. und 17.03.2024 berechnet worden ist. Ein 3D-Mesh wird in 
            einem automatisierten Prozess berechnet. <b>Achtung</b>: Beim gegenwärtigen Stand 
            der der Technik ist ein 3D-Mesh ein unvollkommenes Modell der realen Welt. Die 
            Oberfläche einschließlich der künstlichen Objekte, insbesondere der Gebäude, wird 
            über ein Dreiecksnetz angenähert, auf das dann die Bildinhalte projiziert werden. 
            Dieser Ansatz erzeugt stark verzerrte Darstellungen bei unstetigen Krümmungen, z. B. bei 
            Balkonen. Gegenstände der realen Welt, die in den ausgewerteten Bildern nicht sichtbar 
            waren (z. B. Baumstämme unter Baumkronen), fehlen zwangsläufig im 3D-Mesh. Wenn sich 
            mehrere Bezugsebenen vertikal überlagern (z. B. Wasseroberfläche der Wupper, Brücke, 
            Schwebebahngerüst) kann es zu erheblichen Modellfehlern kommen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
