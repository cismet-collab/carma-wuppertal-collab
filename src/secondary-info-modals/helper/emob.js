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