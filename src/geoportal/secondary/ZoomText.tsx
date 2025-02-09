export const ZoomText = () => {
    return (
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          <b>Klicken zum Vergrößern („Zoom in“) bzw. Verkleinern („Zoom out“)</b><br/>
          Veränderung des Kartenmaßstabs in festen Zoomstufen (2D und 3D) |<br/> 
          "+" für Zoom in, "-" für Zoom out | je größer die Zoomstufe, desto größer der Maßstab  
        </div>
      </ul>
    );
  };
  