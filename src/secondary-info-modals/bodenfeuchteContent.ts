import texts from "./_data/bodenfeuchteTexts.json";

export type SensorType = "tree" | "dike" | "watermark" | "unknown";

export function getSensorType(name: string): SensorType {
  if (name.includes("ioplant Tree")) return "tree";
  if (name.includes("ioplant Dike")) return "dike";
  if (name.includes("Watermark")) return "watermark";
  return "unknown";
}

export function getLocationKey(
  name: string,
  sensorType: SensorType
): string {
  if (sensorType === "tree") {
    const match = name.match(
      /ioplant Tree-Bodenfeuchtesensor\s*-\s*(.+)/
    );
    return match?.[1]?.trim() ?? name;
  }
  if (sensorType === "watermark") {
    const parts = name.replace("Watermark-Bodenfeuchtesensor - ", "");
    const lastDash = parts.lastIndexOf(" - ");
    return lastDash > 0 ? parts.substring(0, lastDash).trim() : parts;
  }
  return name;
}

export function getSensorTypeLabel(sensorType: SensorType): string {
  switch (sensorType) {
    case "tree":
      return "ioplant-Tree";
    case "dike":
      return "ioplant-Dike";
    case "watermark":
      return "Watermark";
    default:
      return "Unbekannt";
  }
}

export interface StandortInfo {
  text: string;
  bodentyp?: string;
}

export function getStandortbeschreibung(
  locationKey: string,
  sensorType: SensorType
): StandortInfo {
  if (sensorType === "tree") {
    const entry =
      texts.standortbeschreibungen.tree[
        locationKey as keyof typeof texts.standortbeschreibungen.tree
      ];
    if (entry) return entry;
    return { text: texts.experimentalPlaceholder };
  }
  if (sensorType === "dike") {
    return { text: texts.experimentalPlaceholder };
  }
  if (sensorType === "watermark") {
    const entry =
      texts.standortbeschreibungen.watermark[
        locationKey as keyof typeof texts.standortbeschreibungen.watermark
      ];
    if (entry) return { text: entry };
    return { text: texts.experimentalPlaceholder };
  }
  return { text: texts.experimentalPlaceholder };
}

export interface HorizontSchicht {
  tiefe: string;
  horizont: string;
  feinboden?: string;
  bodenfarbe?: string;
  humus?: string;
  bemerkungen?: string;
}

export interface Bodenkundeprotokoll {
  datum: string;
  nutzung: string;
  bodentyp: string;
  beprobungstiefe: string;
  auffaelligkeiten?: string;
  gelaendeform?: string;
  bewuchs?: string;
  anmerkungen?: string;
  organischerHorizont?: Array<{ tiefe: string; horizont: string }>;
  mineralischerHorizont: HorizontSchicht[];
}

export function getBodenkundeprotokoll(
  locationKey: string
): Bodenkundeprotokoll | null {
  const entry =
    texts.bodenkundeprotokolle[
      locationKey as keyof typeof texts.bodenkundeprotokolle
    ];
  return (entry as Bodenkundeprotokoll) ?? null;
}

export interface AllgemeineInfo {
  sensor: string;
  kontext?: string;
}

export function getAllgemeineInformationen(
  sensorType: SensorType
): AllgemeineInfo {
  if (sensorType === "tree") return texts.allgemeineInformationen.tree;
  if (sensorType === "dike") return texts.allgemeineInformationen.dike;
  if (sensorType === "watermark")
    return { sensor: texts.allgemeineInformationen.watermark };
  return { sensor: "" };
}
