// Form constants
const RELEASE_ID = "5587cff10cf2ac88b8a11a72";
const RELEASE_USER_ID = "05124000-0001-0005";
const RELEASE_ORG_ID = "05124000-0001";

// Assistant IDs for different products
const ASSISTANTS = {
  LIEGENSCHAFTSKARTE: "KFAS_KF600200",
  ABK_AUSZUG: "KFAS_KF600300",
  BUCHAUSZUG: "KFAS_KF600204",
};

/**
 * Generates a URL for ordering cadastral products (Liegenschaftskarte, ABK, etc.)
 * with prefilled Flurstück data
 */
export function buildFormUrl({
  gemarkungName,
  gemarkungsnummer,
  flurnummer,
  zaehler,
  nenner,
  assistant,
}) {
  const baseUrl = "https://formulare.wuppertal.de/metaform/Form-Solutions/";

  const gemarkungValue = `${gemarkungName} (${gemarkungsnummer})`;
  const flurstueckValue = nenner ? `${zaehler}/${nenner}` : String(zaehler);

  const params = new URLSearchParams();
  params.set("Antragsteller.Daten.Auswahl über", "Flurstück");
  params.set("Antragsteller.Daten.GeoLocation2.Gemarkung", gemarkungValue);
  params.set("Antragsteller.Daten.GeoLocation2.Flurnummer", String(flurnummer));
  params.set("Antragsteller.Daten.GeoLocation2.Flurstück", flurstueckValue);
  params.set("releaseUserId", RELEASE_USER_ID);
  params.set("releaseID", RELEASE_ID);
  params.set("releaseOrganizationID", RELEASE_ORG_ID);
  params.set("assistant", assistant);
  params.set("oID", RELEASE_ORG_ID);
  params.set("kdnr", RELEASE_ORG_ID);

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generates URL for Liegenschaftskarte order form
 */
export function buildLiegenschaftskarteUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    assistant: ASSISTANTS.LIEGENSCHAFTSKARTE,
  });
}

/**
 * Generates URL for ABK-Auszug order form
 */
export function buildAbkAuszugUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    assistant: ASSISTANTS.ABK_AUSZUG,
  });
}

/**
 * Generates URL for Buchauszug order form
 */
export function buildBuchauszugUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    assistant: ASSISTANTS.BUCHAUSZUG,
  });
}
