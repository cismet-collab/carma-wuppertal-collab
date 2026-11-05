import geoportalLogo from "../commons/assets/Logo_DigiTalZwilling.png";
import gesundheit from "../commons/assets/fachzwilling/gesundheit.svg?raw";
import grundUndBoden from "../commons/assets/fachzwilling/grund-und-boden.svg?raw";
import klimawandelUndAnpassung from "../commons/assets/fachzwilling/klimawandel-und-anpassung.svg?raw";
import kommunalePlanung from "../commons/assets/fachzwilling/kommunale-planung.svg?raw";
import nachhaltigeStadtentwicklung from "../commons/assets/fachzwilling/nachhaltige-stadtentwicklung.svg?raw";
import parksUndGruenanlagen from "../commons/assets/fachzwilling/parks-und-gruenanlagen.svg?raw";
import urbaneResilienz from "../commons/assets/fachzwilling/urbane-resilienz.svg?raw";
import zukunftsfaehigeMobilitaet from "../commons/assets/fachzwilling/zukunftsfaehige-mobilitaet.svg?raw";

export { recolorLogo, svgToDataUrl } from "./recolorLogo";

export type FachzwillingBranding = {
  title: string;
  accentColor: string;
  logoSvg: string;
};

export const geoportalBranding = {
  title: "Geoportal",
  accentColor: "#009cc1",
  logoUrl: geoportalLogo,
};

export const fachzwillingBranding = {
  kommunalePlanung: {
    title: "Kommunale Planung",
    accentColor: "#1f5591",
    logoSvg: kommunalePlanung,
  },
  nachhaltigeStadtentwicklung: {
    title: "Nachhaltige Stadtentwicklung",
    accentColor: "#1d7a6c",
    logoSvg: nachhaltigeStadtentwicklung,
  },
  klimawandelUndAnpassung: {
    title: "Klimawandel und Anpassung",
    accentColor: "#c25a14",
    logoSvg: klimawandelUndAnpassung,
  },
  zukunftsfaehigeMobilitaet: {
    title: "Zukunftsfähige Mobilität",
    accentColor: "#653fa3",
    logoSvg: zukunftsfaehigeMobilitaet,
  },
  urbaneResilienz: {
    title: "Urbane Resilienz",
    accentColor: "#b3262d",
    logoSvg: urbaneResilienz,
  },
  parksUndGruenanlagen: {
    title: "Parks und Grünanlagen",
    accentColor: "#5a8520",
    logoSvg: parksUndGruenanlagen,
  },
  grundUndBoden: {
    title: "Grund und Boden",
    accentColor: "#6e4f37",
    logoSvg: grundUndBoden,
  },
  gesundheit: {
    title: "Gesundheit",
    accentColor: "#ad2f7d",
    logoSvg: gesundheit,
  },
} satisfies Record<string, FachzwillingBranding>;
