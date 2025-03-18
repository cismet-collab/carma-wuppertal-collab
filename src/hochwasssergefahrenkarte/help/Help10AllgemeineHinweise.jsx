import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = ({ dev = false }) => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
  return (
    <GenericModalMenuSection
      sectionKey="hintergrund"
      sectionTitle="Hintergrund"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Stadt Wuppertal publiziert seit Ende 2018 eine interaktive{" "}
            <a
              target="_legal"
              href="https://digital-twin-wuppertal-live.github.io/rainhazardmap/#/hoehen?lat=51.271680556266894&lng=7.199681997299195&zoom=18"
            >
              Starkregengefahrenkarte
            </a>
            , mit deren Hilfe alle Nutzer/innen die Gefahr einer Überflutung
            ihrer Grundstücke durch Regenwasser einschätzen können, das im
            Verlauf von Starkregenereignissen auf der Erdoberfläche abfließt.
            Als Datengrundlage verwendet die Starkregengefahrenkarte die
            Ergebnisse von Simulationsberechnungen, die im Auftrag der Stadt
            Wuppertal und der Wuppertaler Stadtwerke (WSW Energie und Wasser AG)
            durch das Ingenieurbüro Dr. Pecher AG (Erkrath) durchgeführt wurden.
          </p>
          <p>
            Bei den katastrophalen Überschwemmungen am 14. und 15. Juli 2021,
            die vor allem im Ahrtal verheerende Schäden angerichtet und viele
            Menschenleben gekostet haben, war auch die Stadt Wuppertal
            betroffen. Es handelte sich um ein kombiniertes Starkregen- und
            Flusshochwasserereignis, das von Simulationen, wie sie für die
            Starkregengefahrenkarte gemacht werden, nicht abgebildet wird.
            Simulationen für Flusshochwasser werden in einem Turnus von sechs
            Jahren vom Land NRW für die sog. Risikogewässer durchgeführt. In
            Wuppertal sind das neben der Wupper die Schwelme, der Mirker Bach,
            der Morsbach, der Hardenberger Bach und der Deilbach. Auch wenn es
            keine gängigen Simulationsansätze für kombinierte Starkregen- und
            Flusshochwasserereignisse gibt, kann doch mit einer parallelen
            Darstellung der Gefährdung durch Starkregenabfluss und
            Flusshochwasser ein vollständiges Bild der Überflutungsgefährdung
            vermittelt werden. Die AG "Gefahrenkarte", eine Unterarbeitsgruppe
            der vom Wuppertaler Oberbürgermeister nach dem Hochwasser vom Juli
            2021 eingerichteten Taskforce "Hochwasser", hat daher beschlossen,
            die Hochwassersimulationen des Landes NRW für das Stadtgebiet von
            Wuppertal in einer Hochwassergefahrenkarte zugänglich zu machen, die
            sich in Aussehen und Bedienung an der Starkregengefahrenkarte
            orientiert. Außerdem sollte die neue Hochwassergefahrenkarte mit der
            Starkregengefahrenkarte so gekoppelt werden können, dass die
            Nutzer/innen bei der gleichzeitigen Betrachtung der Gefährdungen
            durch Starkregen und Hochwasser bestmöglich unterstützt werden.
          </p>
          <p>
            Die Hochwassergefahrenkarte Wuppertal stellt die Maximalwerte von
            Wassertiefen dar, die im Verlauf der drei vom Land NRW simulierten{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              Hochwasser-Szenarien
            </a>{" "}
            auftreten. Dazu wird ein Raster mit einer Kantenlänge von 1 m
            benutzt. Die Wassertiefen werden mit demselben Farbverlauf wie in
            der Starkregengefahrenkarte visualisiert, also mit den Eckwerten 20
            cm (blau), 40 cm (gelb), 75 cm (orange) und 100 cm (rot).
            Wassertiefen unter 10 cm werden nicht farbig ausgeprägt
            (transparente Darstellung).
          </p>
          <p>
            Im März 2025 wurde die Hochwassergefahrenkarte als erste Anwendung aus der 
            Familie der{" "} 
            <a
              target="_legal"
              href="https://www.wuppertal.de/microsite/geoportal/topicmaps/topicmaps.php"
            >
              TopicMaps Wuppertal
            </a>{" "} 
            um eine anschauliche 3D-Visualisierung der Fachdaten (hier der 
            überfluteten Flächen) erweitert. Die 3D-Erweiterung der TopicMaps
            wurde im Rahmen des Projektes smart.wuppertal/DigiTal Zwilling entwickelt. 
            In diesem Projekt wird ein{" "} 
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              Urbaner Digitaler Zwilling
            </a>{" "} 
            der Stadt Wuppertal aufgebaut.
          </p>
        </div>
      }
    />
  );
};
export default Component;
