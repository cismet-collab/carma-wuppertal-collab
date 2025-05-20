// Converts a VT-style entry (flat) to a properties object compatible with XandRideSIM.jsx
export function convertVTEntryToFeatureProperties(vtEntry) {
    // Helper: Convert buslinien and bahnlinien to arrays if needed
    function parseLines(lines) {
        if (!lines) return [];
        if (Array.isArray(lines)) return lines;
        // Split by comma and trim
        return lines.split(',').map(l => l.trim()).filter(Boolean);
    }

    // Handle booleans/strings for certain fields
    function parseBool(val, trueVals = [true, 'true', 'vorhanden', 'ja']) {
        if (typeof val === 'boolean') return val;
        if (typeof val === 'string') {
            return trueVals.includes(val.toLowerCase());
        }
        return false;
    }

    // Compose the properties object
    const properties = {
        id: vtEntry.id ?? null,
        name: vtEntry.name ?? '',
        schluessel: vtEntry.typ ?? '',
        plaetze: vtEntry.anzahl_plaetze ?? vtEntry.plaetze ?? 0,
        foto: vtEntry.foto ?? '',
        anbindung_schwebebahn: parseBool(vtEntry.anbindung_schwebebahn),
        beschreibung: vtEntry.beschreibung ?? '',
        ueberdachung: parseBool(vtEntry.ueberdachung, [true, 'true', 'vorhanden', 'ja']),
        buslinien: parseLines(vtEntry.buslinien),
        bahnlinien: parseLines(vtEntry.bahnlinien),
        haltestellenname: vtEntry.haltestelle ?? vtEntry.haltestellenname ?? '',
        geojson: vtEntry.geojson ?? null,
        inUZ: parseBool(vtEntry.is_in_uwz, ['innerhalb', true, 'true', 'ja']),
        svgBadgeDimension: vtEntry.svgBadgeDimension ?? { width: '', height: '' },
        color: vtEntry.color ?? { model: '', color: [], valpha: 1 },
        info: vtEntry.info ?? {
            header: vtEntry.schluessel === 'P' ? 'Park + Ride' : 'Bike + Ride',
            title: vtEntry.name ?? '',
            additionalInfo: vtEntry.beschreibung ?? '',
            subtitle: `Plätze: ${vtEntry.anzahl_plaetze ?? vtEntry.plaetze ?? ''}`
        }
    };
    return { properties };
}
