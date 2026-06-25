import collection from "./potenzialflaechen.json";

const data = {};

for (const feature of collection.features) {
  const props = feature.properties || {};
  const campaign = props.kampagnenname || props.kampagne?.bezeichnung || "";
  const label = props.bezeichnung || props.nummer || feature.id;
  // DAQ features carry type:"Feature" and are used directly; everything else is
  // a vektorlayer entry routed through the converter. Tag both so the example
  // switcher can show the same area in either flavour.
  const source = feature.type === "Feature" ? "DAQ" : "VT";
  const name = `${campaign ? campaign + ": " : ""}${label} [${source}]`;
  data[name] = feature;
}

export default data;
