export const ZoomText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
        Klicken zum Vergrößern („Zoom in“) bzw. Verkleinern („Zoom out“) des Kartenmaßstabs 
        in festen Zoomstufen (<b>2D</b> und <b>3D</b>) | "+" für Zoom in, "-" für Zoom out | 
        je größer die Zoomstufe, desto größer der Maßstab  
        </div>
      </ul>
    );
  };
  