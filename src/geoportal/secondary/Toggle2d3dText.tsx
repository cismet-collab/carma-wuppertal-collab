export const Toggle2d3dText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Wechselschalter zum Umschalten zwischen <b>2D</b>- und <b>3D</b>-Ansicht | 
        aktuelle Einstellung Karte/Luftbild wird beim Umschalten beibehalten | 
        bei Wechsel von 3D nach 2D wird Darstellung zuerst nach Norden 
        ausgerichtet und Senkrechtperspektive eingestellt (kartenartige Darstellung)
      </div>
    </ul>
  );
};
