export const normalizeInput = (properties: {
  standort: string;
  versatz: string;
  adresse: string;
  foto: string;
  bezirk: string;
  zusatzinfo: string;
  detailbeschreibung: string;
  bemerkung: string;
  anzahl_plaetze: string;
  anzahl_ladepunkte: string;
  ladekosten: string;
  ladebox_zu: string;
  ladebox_anz: string;
  ladebox_pfand: string;
  gruen: string;
  status: string;
  verfuegbar: string;
  betreiber: string;
  betreiberadresse: string;
  betreiberort: string;
  betreiberhomepage: string;
  betreiberemail: string;
  betreibertelefon: string;
  betreiberbemerkung: string;
  [key: string]: string;
}) => {
  let stecker: string[] = [];
  let zugangsarten: string[] = [];
  let oeffnungszeiten = "";
  for (let key in properties) {
    if (key.startsWith("typ")) {
      const value = properties[key];
      stecker.push(value);
    }

    if (key.startsWith("zugang")) {
      const value = properties[key];

      zugangsarten.push(value);
    }
  }

  if (properties.offen) {
    if (properties.offen.includes("24-7")) {
      oeffnungszeiten = "24/7";
    } else {
      oeffnungszeiten = properties.offen;
    }
  }

  return {
    ...properties,
    stecker,
    zugangsarten,
    oeffnungszeiten,
  };
};
