interface OpenStreetMapTextProps {
}

const OpenStreetMapText = ({
}: OpenStreetMapTextProps) => {
  return (
    <li>
      Mapbox-konformer Vector-Tiles-Kartendienst auf Grundlage der OpenStreetMap (OSM), 
      gehostet von der cismet GmbH für die Stadt Wuppertal. Datengrundlage:{" "}
      PBF-Daten der OSM für Deutschland, bereitgestellt von der Geofabrik GmbH unter der
      Open Database License 1.0 (ODbL), mindestens wöchentlich auf Seiten der cismet aktualisiert.  
    </li>
  );
};

export default OpenStreetMapText;
