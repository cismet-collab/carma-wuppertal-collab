export const getConnectorImageUrl = (type) => {
  const base =
    import.meta.env.VITE_WUPP_ASSET_BASEURL + "/images/emob/dynamic/";
  switch (type) {
    case "Schuko":
      return base + "schuko.png";
    case "Typ 2":
      return base + "typ-2.png";
    case "CHAdeMO":
      return base + "chademo.png";
    case "CCS":
      return base + "ccs.png";
    case "Tesla Supercharger":
      return base + "tesla-wallbox.png";
    case "Drehstrom":
      return base + "drehstrom.png";
    default:
      return undefined;
  }
};

// Converts a VT-style entry (flat) to a properties object compatible with EMobSIM.jsx
export function convertVTEntryToFeatureProperties(vtEntry) {
  // Helper: Convert authentifizierung to array if needed
  function parseArray(val) {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    // Split by comma or / and trim
    return val
      .split(/[,/]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // Helper: Convert steckerverbindungen from VT to array of objects
  function parseSteckerverbindungen(vt) {
    // VT may have stecker1, stecker2, ... or a combined field
    const result = [];
    if (vt.stecker1) {
      const [desc, countAndType] = vt.stecker1.split("!").map((s) => s.trim());
      if (countAndType) {
        const match = countAndType.match(/(\d+) x ([^()]+)\s*\(([^)]+)\)/);
        if (match) {
          result.push({
            anzahl: parseInt(match[1]),
            steckdosentyp: match[2].trim(),
            steckdosentypkey: (() => {
              const typeMatch = match[2]
                .trim()
                .match(
                  /Typ\s*2|Schuko|CHAdeMO|CCS|Tesla Supercharger|Drehstrom/i
                );
              return typeMatch
                ? typeMatch[0].replace(/\s+/g, " ").trim()
                : match[2].trim().split(" ")[0];
            })(),
            leistung: parseFloat(match[3]),
            strom: 0,
            spannung: 0,
          });
        }
      }
    }
    if (vt.stecker2) {
      const [desc, countAndType] = vt.stecker2.split("!").map((s) => s.trim());
      if (countAndType) {
        const match = countAndType.match(/(\d+) x ([^()]+)\s*\(([^)]+)\)/);
        if (match) {
          result.push({
            anzahl: parseInt(match[1]),
            steckdosentyp: match[2].trim(),
            steckdosentypkey: (() => {
              const typeMatch = match[2]
                .trim()
                .match(
                  /Typ\s*2|Schuko|CHAdeMO|CCS|Tesla Supercharger|Drehstrom/i
                );
              return typeMatch
                ? typeMatch[0].replace(/\s+/g, " ").trim()
                : match[2].trim().split(" ")[0];
            })(),
            leistung: parseFloat(match[3]),
            strom: 0,
            spannung: 0,
          });
        }
      }
    }
    // If the normal array exists, use that
    if (Array.isArray(vt.steckerverbindungen)) {
      return vt.steckerverbindungen;
    }
    return result;
  }

  // Compose the properties object
  const properties = {
    id: vtEntry.id ?? null,
    name: vtEntry.standort ?? vtEntry.name ?? "",
    zusatzinfo: vtEntry.zusatzinfo ?? "",
    online: vtEntry.status ?? vtEntry.online ?? false,
    detailbeschreibung: vtEntry.bemerkung ?? vtEntry.detailbeschreibung ?? "",
    strasse:
      vtEntry.adresse?.split(" ").slice(0, -1).join(" ") ||
      vtEntry.strasse ||
      "",
    hausnummer:
      vtEntry.adresse?.split(" ").slice(-1)[0] ?? vtEntry.hausnummer ?? "",
    foto: vtEntry.foto ?? "",
    oeffnungszeiten:
      vtEntry.oeffnungszeiten ??
      (() => {
        if (!vtEntry.offen) return "";
        if (/24.7.*\.png/.test(vtEntry.offen)) {
          return "24 Stunden / 7 Tage";
        }
        return vtEntry.offen;
      })(),
    stromart: vtEntry.strom ?? vtEntry.stromart ?? "",
    authentifizierung: parseArray(
      (() => {
        const zugangValues = Object.keys(vtEntry)
          .filter((key) => key.startsWith("zugang") && vtEntry[key])
          .sort()
          .map((key) => vtEntry[key]);
        if (zugangValues.length > 1) {
          const last = zugangValues.pop();
          zugangValues.unshift(last);
        }
        return zugangValues.length > 0
          ? zugangValues.join(" / ")
          : vtEntry.authentifizierung;
      })()
    ),
    steckerverbindungen: parseSteckerverbindungen(vtEntry),
    ladekosten: vtEntry.abrechnung ?? vtEntry.ladekosten ?? "",
    gruener_strom:
      vtEntry.gruener_strom === true ||
      vtEntry.gruen ===
        "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_gruener_strom.png",
    ladeplaetze: vtEntry.anzahl ?? vtEntry.ladeplaetze ?? 0,
    parkgebuehr: vtEntry.parkgebuehr ?? "",
    parkhaus: vtEntry.parkhaus ?? false,
    schnellladestation: vtEntry.schnellladestation ?? false,
    wasserstoff: vtEntry.wasserstoff ?? false,
    betreiber: {
      id: vtEntry.betreiberid ?? null,
      strasse:
        vtEntry.betreiberadresse?.split(" ")[0] ??
        vtEntry.betreiberstrasse ??
        "",
      hausnummer:
        vtEntry.betreiberadresse?.split(" ")[1] ??
        vtEntry.betreiberhausnummer ??
        "",
      plz: vtEntry.betreiberort?.split(" ")[0] ?? vtEntry.betreiberplz ?? "",
      ort:
        vtEntry.betreiberort?.split(" ").slice(1).join(" ") ??
        vtEntry.betreiberort ??
        "",
      telefon: vtEntry.betreibertelefon ?? vtEntry.telefon ?? "",
      email: vtEntry.betreiberemail ?? vtEntry.email ?? "",
      homepage: vtEntry.betreiberhomepage ?? vtEntry.homepage ?? "",
      name: vtEntry.betreiber ?? "",
    },
    geojson: vtEntry.geojson ?? null,
    svgBadgeDimension: vtEntry.svgBadgeDimension ?? { width: "", height: "" },
    color: vtEntry.color ?? { model: "", color: [], valpha: 1 },
    info: vtEntry.info ?? {
      header: vtEntry.header ?? "",
      title: vtEntry.standort ?? vtEntry.name ?? "",
      additionalInfo: vtEntry.zusatzinfo ?? "",
      subtitle: vtEntry.adresse ?? "",
    },
  };
  return { properties };
}
