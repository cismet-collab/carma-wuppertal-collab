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
        Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die
        zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie{" "}
        {punktgeometrie} wird außerdem ein großer Maßstab (Zoomstufe {zoomstufe}
        ) eingestellt und ein Marker <Icon name="map-marker" /> auf der
        Zielposition platziert. Bei Suchbegriffen mit Flächengeometrie{" "}
        {flachengeometrie} wird der Maßstab so eingestellt, dass die Fläche
        vollständig dargestellt werden kann. Zusätzlich wird der Bereich
        außerhalb dieser Fläche abgedunkelt (Spotlight-Effekt).
      </p>
      <p>
        Durch Anklicken des Werkzeugs <Icon name="times" /> links neben dem
        Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker
        bzw. Abdunklung, Löschen des Textes im Eingabefeld).
      </p>
      {posttext && posttext}
    </div>
  );
};

export default InKartePositionierenText;
