export function convertVTEntryToFeatureProperties(vt) {
    if (!vt) return;
    console.log("xxx vt", vt);

    // Normalize stecker field to array of objects
    let steckerArr = [];
    if (vt?.stecker) {
        // Accepts both string and array
        if (Array.isArray(vt.stecker)) {
            steckerArr = vt.stecker.map(s => {
                if (typeof s === 'object') return s;
                if (typeof s === 'string') {
                    const match = s.match(/^(.*?)\s*\(([^)]*)\)/);
                    if (match) {
                        const typ = match[1].trim();
                        const details = match[2].split(',').map(x => x.trim());
                        let leistung, strom, spannung;
                        details.forEach(d => {
                            if (/kW/.test(d)) leistung = parseFloat(d);
                            if (/A/.test(d)) strom = parseFloat(d);
                            if (/V/.test(d)) spannung = parseFloat(d);
                        });
                        return { typ, leistung, strom, spannung };
                    }
                    return { typ: s.trim() };
                }
                return { typ: String(s) };
            });
        } else if (typeof vt.stecker === "string") {
            // Split by / or , but keep groups like 'Schuko (3.7kW, 16A, 230V)'
            const regex = /([^,\/]+\([^)]*\))|([^,\/]+)/g;
            const matches = vt.stecker.match(regex);
            if (matches) {
                steckerArr = matches.map(s => {
                    const match = s.match(/^(.*?)\s*\(([^)]*)\)/);
                    if (match) {
                        const typ = match[1].trim();
                        const details = match[2].split(',').map(x => x.trim());
                        let leistung, strom, spannung;
                        details.forEach(d => {
                            if (/kW/.test(d)) leistung = parseFloat(d);
                            if (/A/.test(d)) strom = parseFloat(d);
                            if (/V/.test(d)) spannung = parseFloat(d);
                        });
                        return { typ, leistung, strom, spannung };
                    }
                    return { typ: s.trim() };
                });
            } else {
                steckerArr = [{ typ: vt.stecker.trim() }];
            }
        }
    }

    // Normalize zugangsarten
    let zugangsartenArr = [];
    if (vt.zugangsarten) {
        if (Array.isArray(vt.zugangsarten)) {
            zugangsartenArr = vt.zugangsarten;
        } else if (typeof vt.zugangsarten === "string") {
            zugangsartenArr = vt.zugangsarten.split(/[,/]/).map(s => s.trim());
        }
    }

    // Normalize ladebox_pfand (try to extract coins as array)
    let ladebox_pfand = vt.ladebox_pfand;
    let pfandArr = [];
    if (typeof ladebox_pfand === "string") {
        pfandArr = ladebox_pfand.match(/\d+€/g) || [];
        if (pfandArr.length === 0) {
            // fallback: split by -- or ,
            pfandArr = ladebox_pfand.split(/--|,|\s/).map(s => s.trim()).filter(s => /^\d+€?$/.test(s));
        }
    } else if (Array.isArray(ladebox_pfand)) {
        pfandArr = ladebox_pfand;
    }

    // Compose normalized object
    // Address normalization
    let adresse = (vt.adresse && typeof vt.adresse === 'string' && vt.adresse.trim()) ? vt.adresse.trim() : undefined;
    let strasse, hausnummer;
    if (adresse) {
        // Try to split into street and number
        const match = adresse.match(/^(.*?)(\s+(\S+))?$/);
        if (match) {
            strasse = match[1] ? match[1].trim() : undefined;
            hausnummer = match[3] ? match[3].trim() : undefined;
        }
    }
    // Gruener Strom normalization
    let gruener_strom = false;
    if (vt.gruen && typeof vt.gruen === 'string' && vt.gruen.trim() && vt.gruen.startsWith('http')) {
        gruener_strom = true;
    }

    let betreiberObject;
    if (
        vt.betreiber ||
        vt.betreiberadresse ||
        vt.betreiberort ||
        vt.betreibertelefon ||
        vt.betreiberhomepage ||
        vt.betreiberemail
    ) {
        betreiberObject = {};
        if (vt.betreiber) betreiberObject.name = vt.betreiber;
        if (vt.betreiberadresse) betreiberObject.strasse = vt.betreiberadresse;
        if (vt.betreiberort) {
            // Try to split into PLZ and Ort if possible (e.g. "42281 Wuppertal")
            const match = vt.betreiberort.match(/^([0-9]{5})\\s*(.*)$/);
            if (match) {
                betreiberObject.plz = match[1];
                betreiberObject.ort = match[2];
            } else {
                betreiberObject.ort = vt.betreiberort;
            }
        }
        if (vt.betreibertelefon) betreiberObject.telefon = vt.betreibertelefon;
        if (vt.betreiberhomepage) betreiberObject.web = vt.betreiberhomepage;
        if (vt.betreiberemail) betreiberObject.email = vt.betreiberemail;
    }

    const clone
        = JSON.parse(JSON.stringify(vt));
    delete clone.betreiber;
    const properties = {
        ...clone,

        adresse,
        strasse,
        hausnummer,
        stecker: steckerArr,
        gruener_strom,
        zugangsarten: zugangsartenArr,
        ladebox_pfand: pfandArr.length ? pfandArr.map(s => s.replace('€', '')) : undefined,
        pfand: pfandArr.length ? pfandArr.map(s => s.replace('€', '')) : undefined,
        oeffnungszeiten:
            (vt.offen && typeof vt.offen === 'string' && vt.offen.trim() && !vt.offen.match(/^https?:\/\//))
                ? vt.offen.trim()
                : (vt.oeffnungszeiten || undefined),
        betreiber: betreiberObject,
    };
    return { properties };
}