import collection from "./klimastation.json";

const data = {};

for (const feature of collection.features) {
  const props = feature.properties || {};
  // label ist das Kurzlabel der rgeo-API ("Wuppertal"), name der vollstaendige
  // Titel aus #4126. Fuer den Beispiel-Umschalter reicht das Kurzlabel.
  const key = props.label
    ? `Klimastation ${props.label}`
    : props.name || String(feature.id);
  data[key] = feature;
}

export default data;
