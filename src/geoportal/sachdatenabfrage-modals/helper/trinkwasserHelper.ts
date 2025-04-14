export const normalizeInput = (properties: {
    adresse: string;
    beschreibung: string;
    geographicidentifier: string;
    betreiber: string;
    foto: string;
    wartung: string;
    gebaeude: string;
    winterruhe: string;
    dauerlaeufer: string;
    massnahmen: string;
    betreiber_url: string;
    offen: string;
    frei: string;
  }) => {
    let oeffnungszeiten = "";
  
    if (properties.offen) {
      if (properties.offen.includes("24-7")) {
        oeffnungszeiten = "24/7";
      } else {
        oeffnungszeiten = properties.offen;
      }
    }
  
    return {
      oeffnungszeiten,
      ...properties,
    };
  };
  