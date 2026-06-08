import collection from "./fahrradzaehler.json";

const data = {};

for (const feature of collection.features) {
  const name = feature.properties?.name || feature.properties?.id || feature.id;
  data[name] = feature;
}

export default data;
