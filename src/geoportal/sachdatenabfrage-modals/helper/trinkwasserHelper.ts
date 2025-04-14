export const normalizeInput = (properties: {
    adresse: string;
    beschreibung: string;
    name: string;
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
    let stecker: { url: string; text: string }[] = [];
    let zugang: string[] = [];
    let oeffnungszeiten = "";
    for (let key in properties) {
      if (key.startsWith("stecker")) {
        const value = properties[key];
        const parts = value.split("!").map((part) => part.trim());
        stecker.push({ url: parts[0] + ".png", text: parts[1] });
      }
  
      if (key.startsWith("zugang")) {
        const value = properties[key];
  
        zugang.push(value);
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
      stecker,
      zugang,
      oeffnungszeiten,
      ...properties,
    };
  };
  