// Alle Optionen für die Farbe der Sections
type Styling =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "default";

export const getFilterHeader = (
  numberOfFeatures: number,
  numberOfShownFeatures: number
) => {
  let term;
  if (numberOfFeatures === 1) {
    term = "Angebot";
  } else {
    term = "Angebote";
  }

  return `Filter (${numberOfFeatures} ${term} gefunden, davon ${
    numberOfShownFeatures
  } in der Karte)`;
};

export const FilterStyle: Styling = "primary";

export const KompaktAnleitungTitle = "Kompaktanleitung";
export const KompaktAnleitungStyle: Styling = "default";
