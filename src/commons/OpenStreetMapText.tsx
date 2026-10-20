interface OpenStreetMapTextProps {
}

const OpenStreetMapText = ({
}: OpenStreetMapTextProps) => {
  return (
    <li>
      <strong>OpenStreetMap</strong>:{" "} 
      Mapbox-konformer Vector-Tiles-Kartendienst auf Grundlage der OpenStreetMap (OSM), 
      gehostet von der{" "}
      <a target="_legal" href="https://cismet.de">
        cismet GmbH
      </a>{" "} 
      für die Stadt Wuppertal. Datengrundlage:{" "}
      PBF-Daten der OSM für Deutschland, bereitgestellt von der Geofabrik GmbH unter der
      Open Database License 1.0 (ODbL), mindestens wöchentlich auf Seiten der cismet aktualisiert.
      Ableitung des Vector-Tilesets im Schema von{" "}
      <a target="_legal" href="https://shortbread-tiles.org">
        Shortbread
      </a>{" "}
      (frei unter der{" "}
      <a target="_legal" href="https://shortbread-tiles.org/copyright/CC0-1.0-LICENSE.txt">
        CC-0
      </a>{" "}  
      durch cismet GmbH, ebenso Style-Definiton in Anlehnung an OSM Bright von{" "}
      <a target="_legal" href="https://openmaptiles.org">
        OpenMapTiles
      </a>.    
    </li>
  );
};

export default OpenStreetMapText;
