interface OpenStreetMapTextProps {
}

const OpenStreetMapText = ({
}: OpenStreetMapTextProps) => {
  return (
    <li>
      <strong>OpenStreetMap (OSM)</strong>:{" "} 
      Mapbox-konformer Vector-Tiles-Kartendienst auf Grundlage der OSM
      (©{" "}
      <a target="_legal" href="https://www.opendatacommons.org/licenses/odbl/1.0/">
        OpenStreetMap contributors
      </a>
      ),{" "} 
      gehostet von der{" "}
      <a target="_legal" href="https://cismet.de">
        cismet GmbH
      </a>{" "} 
      für die Stadt Wuppertal. Datengrundlage:{" "}
      PBF-Daten der OSM für Deutschland, bereitgestellt von der Geofabrik GmbH unter der{" "}
      <a target="_legal" href="https://opendatacommons.org/licenses/odbl/index.html">
        Open Database License 1.0
      </a>{" "} 
      (ODbL), mindestens wöchentlich auf Seiten der cismet aktualisiert.
      Ableitung des Vector-Tilesets im Schema von{" "}
      <a target="_legal" href="https://shortbread-tiles.org">
        Shortbread
      </a>{" "}
      (frei unter der{" "}
      <a target="_legal" href="https://shortbread-tiles.org/copyright/CC0-1.0-LICENSE.txt">
        CC-0
      </a>){" "}  
      durch cismet GmbH, ebenso Style-Definiton in Anlehnung an OSM Bright von{" "}
      <a target="_legal" href="https://openmaptiles.org">
        OpenMapTiles
      </a>.    
    </li>
  );
};

export default OpenStreetMapText;
