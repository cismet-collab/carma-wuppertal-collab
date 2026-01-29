import ioplantFeatures from "./bodenfeuchtesensoren.json";
import watermarkFeatures from "./bodenfeuchtesensorenFD.json";

const data = {};

for (const feature of ioplantFeatures.features) {
  const name = feature.properties?.name || feature.id;
  data[name] = feature;
}

for (const feature of watermarkFeatures.features) {
  const name = feature.properties?.name || feature.id;
  data[name] = feature;
}

export default data;
