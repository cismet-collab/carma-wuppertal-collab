import Icon from "react-cismap/commons/Icon";
interface InKartePositionierenTextProps {
  pretext: React.ReactNode;
  zoomstufe?: number;
  punktgeometrie?: string;
  flachengeometrie?: string;
  posttext?: React.ReactNode;
}
const InKartePositionierenText = ({
  pretext,
  zoomstufe = 14,
  punktgeometrie = "(Adresse, Straße, POI)",
  flachengeometrie = "(Stadtbezirk, Quartier)",
  posttext,
}: InKartePositionierenTextProps) => {
  return (
    <div>
      {pretext}
      <p>
        Wenn Sie einen Treffer aus der Liste auswählen, wird die Karte automatisch 
        auf die zugehörige Position zentriert. Handelt es sich um einen Ort mit 
        Punktgeometrie{" "}{punktgeometrie}, wird stark hineingezoomt (Zoomstufe {zoomstufe}) 
        und ein Marker{" "}<Icon name="map-marker" />{" "}auf der Zielposition platziert. 
        Bei Orten mit Flächengeometrie{" "}{flachengeometrie}{" "}wird der Maßstab so gewählt, 
        dass die gesamte Fläche sichtbar ist. Zusätzlich wird die Umgebung außerhalb dieser Fläche 
        abgedunkelt (Spotlight-Effekt).
      </p>
      <p>
        Sie können die Suche jederzeit zurücksetzen, indem Sie auf das 
        Symbol{" "}<Icon name="times" />{" "}links neben dem Eingabefeld klicken. 
        Dadurch wird der Marker entfernt bzw. die Abdunklung aufgehoben, außerdem 
        wird der eingegebene Text gelöscht. 
      </p>
      {posttext && posttext}
    </div>
  );
};

export default InKartePositionierenText;
