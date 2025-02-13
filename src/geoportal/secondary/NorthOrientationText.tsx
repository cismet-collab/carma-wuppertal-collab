export const NorthOrientationText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>3D-Darstellung mit gedrückter linker Maustaste drehen und kippen (3D)</b><br/>  
        horizontale Mausbewegung zum Drehen, vertikale zum Kippen |
        nach Norden ausrichten mit einfachem Klick | in die Senkrechtperspektive kippen
        mit Doppelklick | aus Senkrechtperspektive zur letzten Bildneigung mit einfachem Klick
      </div>
    </ul>
  );
};
