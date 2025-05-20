const hasValues = (item) => {
  const values = item?.werte;
  return values !== undefined && JSON.stringify(values) !== "{}";
};

const getLastMeasurement = (item) => {
  const lym = getLastYearMeasurements(item);

  if (lym) {
    const { values: lymValues, year } = lym;
    if (Array.isArray(lymValues)) {
      if (lymValues.length === 13) {
        return { value: lymValues[11], monthIndex: 11, year };
      } else {
        return {
          value: lymValues[lymValues.length - 1],
          monthIndex: lymValues.length - 1,
          year,
        };
      }
    } else {
      const monthsIndices = Object.keys(lymValues);
      const months = [];
      for (const m of monthsIndices) {
        months.push(parseInt(m));
      }
      months.sort(function (a, b) {
        return a - b;
      });
      const last = months.pop();

      return { value: lymValues[last], monthIndex: last, year };
    }
  }
};
const getLastYear = (item) => {
  if (hasValues(item)) {
    const values = item?.werte;
    const sortedkeys = Object.keys(values).sort();
    return sortedkeys[sortedkeys.length - 1];
  }
};
const getLastYearM1 = (item) => {
  if (hasValues(item)) {
    const values = item?.werte;
    const sortedkeys = Object.keys(values).sort();
    if (sortedkeys.length > 1) {
      return sortedkeys[sortedkeys.length - 2];
    }
  }
};

export const getLastYearMeasurements = (item) => {
  const ly = getLastYear(item);

  const values = item?.werte;
  if (ly) {
    return { values: values[ly], year: ly };
  }
};
export const getLastYearMinus1Measurements = (item) => {
  const lym1 = getLastYearM1(item);
  const values = item?.werte;
  if (lym1) {
    return values[lym1];
  }
};

const getActivityStatus = (item) => {
  if (item?.bis !== undefined) {
    return "abgebaut";
  } else {
    return "aktiv";
  }
  //todo inaktiv
};

// unauffällig 1-35 (einschließlich) µg/m³ Grün
// auffällig 36-40 (einschließlich) µg/m³ Orange
// warnend >40 µg/m³ Rot
export const getStatus = (item) => {
  if (getActivityStatus(item) === "aktiv") {
    const lym = getLastMeasurement(item)?.value;
    const status = getStatus4Value(lym);

    return status;
  } else {
    return getActivityStatus(item);
  }
};

export const getStatus4Value = (value) => {
  if (value > 0 && value <= 35) {
    return "unauffaellig";
  } else if (value > 35 && value <= 40) {
    return "auffaellig";
  } else if (value > 40) {
    return "warnend";
  } else if (value === -9999) {
    return "inaktiv";
  } else {
    return "unknown";
  }
};

export const LOOKUP = {
  abgebaut: {
    color: "#9DBCCC",
    signature: "Luft_Icon_Messstation_abgebaut_farbig.svg",
    header: "Messstation für NO₂ (inaktiv, abmontiert)",
    title: "abmontiert",
    filterTitle: "abmontierte",
  },
  inaktiv: {
    color: "#4FAFC5",
    signature: "Luft_Icon_Messstation_deaktiv_farbig.svg",
    header: "Messstation für NO₂ (aktiv, aktuell Messausfall)",
    title: "inaktiv",
    filterTitle: "Messstationsausfälle",
  },
  unauffaellig: {
    color: "#9ACD32",
    signature: "Luft_Icon_Messstation_unauffaellig_farbig.svg",
    header: "Messstation für NO₂ (aktiv, unauffällig)",
    title: "unauffällig",
    filterTitle: "unauffällige",
  },
  auffaellig: {
    color: "#FFA500",
    signature: "Luft_Icon_Messstation_auffaellig_farbig.svg",
    header: "Messstation für NO₂ (aktiv, auffällig)",
    title: "auffällig",
    filterTitle: "auffällige",
  },
  warnend: {
    color: "#E01414",
    signature: "Luft_Icon_Messstation_warnend_farbig.svg",
    header: "Messstation für NO₂ (aktiv, warnend)",
    title: "warnend",
    filterTitle: "warnende",
  },
  unknown: { color: "#eeeeee", signature: "Platz.svg", header: "Fehler" },
};

export const MONTHS = [
  { name: "Januar", shortname: "Jan." },
  { name: "Februar", shortname: "Feb." },
  { name: "März", shortname: "Mär." },
  { name: "April", shortname: "Apr." },
  { name: "Mai", shortname: "Mai." },
  { name: "Juni", shortname: "Jun." },
  { name: "Juli", shortname: "Jul." },
  { name: "August", shortname: "Aug." },
  { name: "September", shortname: "Sep." },
  { name: "Oktober", shortname: "Okt." },
  { name: "November", shortname: "Nov." },
  { name: "Dezember", shortname: "Dez." },
];

const openDataIntro = (
  <span>
    Die Daten dieser Luftmessstation sind im Open-Data-Portal der Stadt
    Wuppertal verfügbar:
  </span>
);

export const opendataLinkSections = [
  <div>
    {openDataIntro}
    <ul>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler"
        >
          Stammdaten der Luftmessstationen
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-2006-und-2007"
        >
          Messwerte und Jahresmittelwerte 2006/2007
        </a>
      </li>
    </ul>
  </div>,
  <div>
    {openDataIntro}
    <ul>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler"
        >
          Stammdaten der Luftmessstationen
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-2006-und-2007"
        >
          Messwerte und Jahresmittelwerte 2006/2007
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-ab-2008"
        >
          NO₂-Messwerte seit 2008
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-jahresmittelwerte-wuppertal-passivsammler-ab-2008"
        >
          Jahresmittelwerte seit 2008
        </a>
      </li>
    </ul>
  </div>,
  <div>
    {openDataIntro}
    <ul>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler"
        >
          Stammdaten der Luftmessstationen
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-ab-2008"
        >
          NO₂-Messwerte seit 2008
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-jahresmittelwerte-wuppertal-passivsammler-ab-2008"
        >
          Jahresmittelwerte seit 2008
        </a>
      </li>
    </ul>
  </div>,
  <div>
    {openDataIntro}
    <ul>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler"
        >
          Stammdaten der Luftmessstationen
        </a>
      </li>

      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-ab-2008"
        >
          NO₂-Messwerte seit 2008
        </a>
      </li>
      <li>
        <a
          target="_opendata"
          href="https://offenedaten-wuppertal.de/dataset/no2-jahresmittelwerte-wuppertal-passivsammler-ab-2008"
        >
          Jahresmittelwerte seit 2008
        </a>
      </li>
    </ul>
  </div>,
];
