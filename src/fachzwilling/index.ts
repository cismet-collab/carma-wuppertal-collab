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
  footerTitle: string;
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
    footerTitle: "DigiTal Zwilling / Fachzwilling Kommunale Planung",
  },
  nachhaltigeStadtentwicklung: {
    title: "Nachhaltige Stadtentwicklung",
    accentColor: "#1d7a6c",
    logoSvg: nachhaltigeStadtentwicklung,
    footerTitle: "DigiTal Zwilling / Fachzwilling Nachhaltige Stadtentwicklung",
  },
  klimawandelUndAnpassung: {
    title: "Klimawandel und Anpassung",
    accentColor: "#c25a14",
    logoSvg: klimawandelUndAnpassung,
    footerTitle: "DigiTal Zwilling / Fachzwilling Klimawandel und Anpassung",
  },
  zukunftsfaehigeMobilitaet: {
    title: "Zukunftsfähige Mobilität",
    accentColor: "#653fa3",
    logoSvg: zukunftsfaehigeMobilitaet,
    footerTitle: "DigiTal Zwilling / Fachzwilling Zukunftsfähige Mobilität",
  },
  urbaneResilienz: {
    title: "Urbane Resilienz",
    accentColor: "#b3262d",
    logoSvg: urbaneResilienz,
    footerTitle: "DigiTal Zwilling / Fachzwilling Urbane Resilienz",
  },
  parksUndGruenanlagen: {
    title: "Parks und Grünanlagen",
    accentColor: "#5a8520",
    logoSvg: parksUndGruenanlagen,
    footerTitle: "DigiTal Zwilling / Fachzwilling Parks und Grünanlagen",
  },
  grundUndBoden: {
    title: "Grund und Boden",
    accentColor: "#6e4f37",
    logoSvg: grundUndBoden,
    footerTitle: "DigiTal Zwilling / Fachzwilling Grund und Boden",
  },
  gesundheit: {
    title: "Gesundheit",
    accentColor: "#ad2f7d",
    logoSvg: gesundheit,
    footerTitle: "DigiTal Zwilling / Fachzwilling Gesundheit",
  },
} satisfies Record<string, FachzwillingBranding>;
