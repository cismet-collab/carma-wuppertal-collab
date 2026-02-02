import rawData from "./baudenkmale.json";

const data = {};
for (const feature of rawData.features) {
  const key =
    feature.properties.gaengigebezeichnung ||
    `Denkmal Nr. ${feature.properties.denkmalnummer}`;
  data[key] = feature;
}

export default data;
