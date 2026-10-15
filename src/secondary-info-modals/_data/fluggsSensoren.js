import collection from "./fluggsSensoren.json";

const data = {};

for (const feature of collection.features) {
  const { phaenomen, name } = feature.properties;
  data[`${phaenomen}: ${name}`] = feature;
}

export default data;
