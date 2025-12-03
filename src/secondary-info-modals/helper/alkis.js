// URL prefixes for different products (includes /sid/assistant/{releaseId})
const URL_PREFIXES = {
  LIEGENSCHAFTSKARTE:
    "https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/5587cff10cf2ac88b8a11a72",
  ABK_AUSZUG:
    "https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/58889f4d0cf2eaa36591d5b7",
  BUCHAUSZUG:
    "https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/61385565d17ea336555a761f", // TODO: get correct release ID
  BAULASTEN:
    "https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/5ebbe662c2dcb513e136d4e8"
};

/**
 * Generates a URL for ordering cadastral products (Liegenschaftskarte, ABK, etc.)
 * with prefilled Flurstück data
 */
function buildFormUrl({ gemarkungName, gemarkungsnummer, flurnummer, zaehler, nenner, urlPrefix }) {
  const gemarkungValue = `${gemarkungName} (${gemarkungsnummer})`;
  const flurstueckValue = nenner ? `${zaehler}/${nenner}` : String(zaehler);

  const params = new URLSearchParams();
  params.set("Antragsteller.Daten.Auswahl über", "Flurstück");
  params.set("Antragsteller.Daten.GeoLocation2.Gemarkung", gemarkungValue);
  params.set("Antragsteller.Daten.GeoLocation2.Flurnummer", String(flurnummer));
  params.set("Antragsteller.Daten.GeoLocation2.Flurstück", flurstueckValue);

  return `${urlPrefix}?${params.toString()}`;
}

/**
 * Generates URL for Liegenschaftskarte order form
 */
export function buildLiegenschaftskarteUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    urlPrefix: URL_PREFIXES.LIEGENSCHAFTSKARTE,
  });
}

/**
 * Generates URL for ABK-Auszug order form
 */
export function buildAbkAuszugUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    urlPrefix: URL_PREFIXES.ABK_AUSZUG,
  });
}

/**
 * Generates URL for Buchauszug order form
 */
export function buildBuchauszugUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    urlPrefix: URL_PREFIXES.BUCHAUSZUG,
  });
}

/**
 * Generates URL for Baulastbescheinigung order form
 */
export function buildBaulastenUrl(flurstueckProps) {
  return buildFormUrl({
    ...flurstueckProps,
    urlPrefix: URL_PREFIXES.BAULASTEN,
  });
}
