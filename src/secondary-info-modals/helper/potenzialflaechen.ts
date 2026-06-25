// Converts a vektorlayer (vector tile) entry to a properties object compatible
// with PotenzialflaechenSIM.
//
// PotenzialflaechenSIM handles two kinds of input:
//   - DAQ features  (feature.type === "Feature")  -> used directly, NOT routed here
//   - vektorlayer entries (everything else)        -> routed through this converter
//
// The vektorlayer carries the same field names as the DAQ data, but:
//   - array fields are serialized as JSON strings (e.g. '["Gewerbe","Wohnen"]'),
//     while the Datenblatt expects real arrays (it calls .join(", "))
//   - the campaign is only present as a flat `kampagnenname` string, while the
//     Datenblatt reads `kampagne?.bezeichnung`
//   - `groesse` arrives as a numeric string, but is formatted as a number
//   - it ships EVERY attribute plus the steckbrief whitelist `allowed_attributes`,
//     without applying it. The DAQ view applies that whitelist server-side (per
//     Kampagne), so we replicate it here to keep VT and DAQ identical.

type VTEntry = Record<string, unknown> | undefined;

// Maps each SIM field to the token the steckbrief template uses in
// `allowed_attributes`. Mirrors the per-field
// `position(',<token>,' in allowed_attributes)` gate in the DAQ SQL view
// (daq.potenzialflaechen_basequery). Several tokens differ from the field name,
// and `verfuegbarkeit` / `entwicklungsaussichten` map to the view's misspelled
// tokens (`verfuegbbarkeit` / `entwicklungsausssichten`).
const FIELD_TO_ALLOWED_TOKEN: Record<string, string> = {
  bezeichnung: "bezeichnung",
  nummer: "nummer",
  beschreibung_flaeche: "beschreibung_flaeche",
  notwendige_massnahmen: "notwendige_massnahmen",
  quelle: "quelle",
  bestand_bebauung: "vorhandene_bebauung",
  anzahl_wohneinheiten: "wohneinheiten_anzahl",
  festsetzungen_bplan: "festsetzungen_bplan",
  stand_bauordnungsrecht: "bauordnungsrecht_stand",
  stand: "stand",
  jahr_brachflaeche: "jahr_nutzungsaufgabe",
  lagebewertung_verkehr: "lagebewertung_verkehr",
  siedlungsraeumliche_lage: "siedlungsraeumliche_lage",
  topografie: "topografie",
  hang: "hang",
  verwertbarkeit: "verwertbarkeit",
  verfuegbarkeit: "verfuegbbarkeit",
  entwicklungsaussichten: "entwicklungsausssichten",
  entwicklungsstand: "entwicklungsstand",
  revitalisierung: "revitalisierung",
  aeussere_erschliessung: "aeussere_erschliessung",
  potenzialart: "potenzialart",
  kategorie: "kategorie",
  wohneinheiten: "wohneinheiten",
  oepnv: "oepnv_anbindung",
  versiegelung: "versiegelung",
  klimainformationen: "klimainformationen",
  bauordnungsrecht_genehmigung: "bauordnungsrecht_genehmigung",
  bauordnungsrecht_baulast: "bauordnungsrecht_baulast",
  handlungsdruck: "handlungsdruck",
  handlungsprioritaet: "handlungsprioritaet",
  eigentuemer: "eigentuemer",
  umgebungsnutzung: "umgebungsnutzung",
  bisherige_nutzung: "bisherige_nutzung",
  naehe_zu: "naehe_zu",
  brachflaechen: "brachflaechenkategorie",
  empfohlene_nutzungen: "empfohlene_nutzungen",
  empfohlene_nutzungen_wohnen: "empfohlene_nutzungen_wohnen",
  restriktionen: "restriktionen",
  bplaene: "bebauungsplan",
  flurstuecke: "flurstuecke",
  stadtraumtypen: "stadtraumtypen",
  wohnlagen: "wohnlagen",
  stadtbezirke: "stadtbezirk",
  quartiere: "quartier",
  regionalplan: "regionalplan",
};

/** Parse values that look like serialized JSON (arrays / objects), else passthrough. */
function maybeParseJson(value: unknown): unknown {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  const looksLikeJson =
    (trimmed.startsWith("[") && trimmed.endsWith("]")) ||
    (trimmed.startsWith("{") && trimmed.endsWith("}"));
  if (!looksLikeJson) return value;
  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

export function convertVTEntryToFeatureProperties(vtEntry: VTEntry): {
  properties: Record<string, unknown>;
} {
  if (!vtEntry) return { properties: {} };

  // The steckbrief whitelist the DAQ view applies server-side, per Kampagne.
  // Only filter when it is actually present, so a VT entry without it is not
  // wiped clean.
  const allowedAttributes =
    typeof vtEntry.allowed_attributes === "string"
      ? vtEntry.allowed_attributes
      : null;

  const properties: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(vtEntry)) {
    const parsed = maybeParseJson(value);
    // The DAQ source (SQL view) omits empty arrays entirely (e.g. `wohnlagen
    // <> '[]'`), so DAQ features never carry them. The vektorlayer serializes
    // them as the literal "[]"; drop them after parsing so VT doesn't render
    // orphan empty lines like "Wohnlagen:".
    if (Array.isArray(parsed) && parsed.length === 0) continue;
    // Respect the steckbrief whitelist: drop gated attributes that are not
    // selected for this Kampagne, matching what the DAQ view emits.
    const token = FIELD_TO_ALLOWED_TOKEN[key];
    if (allowedAttributes && token && !allowedAttributes.includes(`,${token},`))
      continue;
    properties[key] = parsed;
  }

  // The Datenblatt reads kampagne?.bezeichnung for the "Kategorie" line; the
  // vektorlayer only carries the campaign name as a flat string.
  if (vtEntry.kampagnenname && properties.kampagne === undefined) {
    properties.kampagne = { bezeichnung: vtEntry.kampagnenname };
  }

  // groesse arrives as a numeric string; the Datenblatt formats it as a number.
  if (typeof properties.groesse === "string" && properties.groesse !== "") {
    const groesse = Number(properties.groesse);
    if (!Number.isNaN(groesse)) properties.groesse = groesse;
  }

  return { properties };
}

// Known typos in the upstream SQL view (daq.potenzialflaechen_basequery): the
// emitted JSON keys are misspelled, so the correctly-spelled attribute never
// reaches the Datenblatt and the field silently disappears. Map each misspelled
// key back onto the canonical key the SIM reads. Affects both the DAQ path (the
// live app reads this view) and any VT layer generated from it.
//   verfuegbbarkeit          (double "b")  -> verfuegbarkeit
//   entwicklungsausssichten  (triple "s")  -> entwicklungsaussichten
const TYPO_KEY_ALIASES: Record<string, string> = {
  verfuegbarkeit: "verfuegbbarkeit",
  entwicklungsaussichten: "entwicklungsausssichten",
};

const isEmpty = (value: unknown): boolean =>
  value === undefined || value === null || value === "";

/**
 * Backfill canonical keys from their misspelled SQL-view counterparts, unless
 * the canonical key already carries a value (real data always wins). Returns a
 * shallow copy; the input is left untouched.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyTypoKeyAliases(properties: any): any {
  if (!properties) return properties;
  const result = { ...properties };
  for (const [canonical, typo] of Object.entries(TYPO_KEY_ALIASES)) {
    if (isEmpty(result[canonical]) && !isEmpty(result[typo])) {
      result[canonical] = result[typo];
    }
  }
  return result;
}
