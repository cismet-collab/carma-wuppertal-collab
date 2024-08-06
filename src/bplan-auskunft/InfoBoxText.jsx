import Icon from "react-cismap/commons/Icon";

export const InfoBoxText = ({ setAppMenuVisible }) => {
  return (
    <>
      <ul>
        <li><b>einen B-Plan laden:</b> Doppelklick auf Plan in Hintergrundkarte</li>
        <li><b>{`alle B-Pläne im Kartenausschnitt laden: `}</b><Icon name="search" /></li>
        <li><b>bekannten B-Plan laden:</b> Nummer als Suchbegriff eingeben, Auswahl aus Vorschlagsliste </li>
        <li><b>{`Suche nach B-Plänen:`}</b> Adresse oder POI als Suchbegriff eingeben, Auswahl aus Vorschlagsliste</li>
      </ul>
      <a onClick={() => {setAppMenuVisible(true);}} style={{ cursor: "pointer", color: "#0078A8" }}>
        Kompaktanleitung
      </a>
    </>
  );
};
