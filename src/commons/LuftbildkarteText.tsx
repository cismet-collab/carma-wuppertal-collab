interface LuftbildkarteTextProps {
  bodenaufloesung?: number;
  ohneKartenschrift?: string;
  details?: string;
}

const LuftbildkarteText = ({
  bodenaufloesung = 3,
  ohneKartenschrift = "",
  details = "(Details s. Hintergrundkarte Stadtplan)",
}: LuftbildkarteTextProps) => {
  return (
    <li>
      <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) der Stadt
      Wuppertal. Datengrundlage:{" "}
      <strong>True Orthophoto aus Bildflügen vom 14. und 17.03.2024</strong>, hergestellt
      durch Aerowest GmbH/Dortmund, Bodenauflösung {bodenaufloesung} cm. (True
      Orthophoto: Aus Luftbildern mit hoher Längs- und Querüberdeckung in einem
      automatisierten Bildverarbeitungsprozess berechnetes Bild in
      Parallelprojektion, also ohne Gebäudeverkippung und sichttote Bereiche.)
      © Stadt Wuppertal (
      <a
        target="_legal"
        href="https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf"
      >
        NB-GDIKOM C
      </a>
      ). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR).
      Datengrundlagen: <strong>Stadtkarte 2.0</strong>
      {ohneKartenschrift} und{" "}
      <strong>Kartenschrift aus der Stadtkarte 2.0</strong>. {details}.
    </li>
  );
};

export default LuftbildkarteText;
