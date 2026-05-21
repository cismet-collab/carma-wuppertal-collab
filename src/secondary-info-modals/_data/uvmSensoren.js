import collection from "./uvmSensoren.json";

const data = {};

for (const feature of collection.features) {
  const id = feature.properties?.id ?? feature.id ?? "";
  const match = String(id).match(/_(\d+)$/);
  const stationNr = match ? match[1] : id;
  const key = `AQMesh ${stationNr}`;
  data[key] = feature;
}

export default data;
