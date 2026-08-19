type HomeTextProps = {
  destination?: string;
};

export const HomeText = ({
  destination = "auf Rathaus Barmen",
}: HomeTextProps) => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Klicken für Positionierung {destination} (2D und 3D)</b>
        <br />
        fester Bezugspunkt bei Verlust der Orientierung | im 3D-Modus als
        Schrägansicht
      </div>
    </ul>
  );
};
