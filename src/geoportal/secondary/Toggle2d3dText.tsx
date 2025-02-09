export const Toggle2d3dText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        <b>Wechselschalter zum Umschalten zwischen 2D- und 3D-Ansicht</b><br/>  
        aktuelle Einstellung Karte/Luftbild wird beim Umschalten beibehalten | 
        bei Wechsel von 3D nach 2D wird Darstellung zuerst nach Norden 
        ausgerichtet und Senkrechtperspektive eingestellt (kartenartige Darstellung)
      </div>
    </ul>
  );
};
