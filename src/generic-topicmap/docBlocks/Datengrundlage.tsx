export const Datengrundlage = ({
  titleContent = "Die Karte",
  stylesDesc = " (Tag | Nacht)",
}) => {
  return (
    <div>
      <div>
        <div>
          {titleContent}{" "}
          {
            " bietet ihnen die folgenden Hintergrundkarten an, die auf verschiedenen Geodatendiensten und Geodaten basieren:"
          }
        </div>
        <p></p>
        <ul>
          <li>
            <strong>TEST-Luftbildkarte</strong>: (1) Kartendienst (WMS) der Stadt
            Wuppertal. Datengrundlage:{" "}
            <strong>True Orthophoto aus Bildflügen vom 14.03. und 17.03.2024</strong>,
            hergestellt durch Aerowest GmbH/Dortmund, Bodenauflösung 3 cm. (True
            Orthophoto: Aus Luftbildern mit hoher Längs- und Querüberdeckung in
            einem automatisierten Bildverarbeitungsprozess berechnetes Bild in
            Parallelprojektion, also ohne Gebäudeverkippung und sichttote
            Bereiche.) © Stadt Wuppertal (
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
            <strong>Stadtplan{stylesDesc}</strong>: Kartendienst (WMS) des
            Regionalverbandes Ruhr (RVR). Datengrundlage:{" "}
            <strong>Stadtkarte 2.0</strong>. Wöchentlich in einem automatischen
            Prozess aktualisierte Zusammenführung des Straßennetzes der
            OpenStreetMap mit Amtlichen Geobasisdaten des Landes NRW aus den
            Fachverfahren ALKIS (Gebäude, Flächennutzungen) und ATKIS
            (Gewässer). © RVR und Kooperationspartner (
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
    </div>
  );
};
