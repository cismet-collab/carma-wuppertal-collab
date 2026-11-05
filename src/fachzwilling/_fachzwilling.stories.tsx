import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  fachzwillingBranding,
  geoportalBranding,
  recolorLogo,
  svgToDataUrl,
  type FachzwillingBranding,
} from ".";

const meta: Meta = {
  title: "Fachzwilling",
};

export default meta;

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

/** the left part of the geoportal navbar, with the line below it */
const NavbarPreview = ({
  title,
  accentColor,
  logoUrl,
}: {
  title: string;
  accentColor: string;
  logoUrl: string;
}) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      gap: 10,
      height: 56,
      padding: "0 12px",
      background: "white",
      borderBottom: `3px solid ${accentColor}`,
      fontFamily,
    }}
  >
    <img src={logoUrl} alt="" style={{ width: 38.5, height: 38.5 }} />
    <div>
      <div style={{ fontSize: 12.25, lineHeight: "17.5px", color: "#6b7280" }}>
        DigiTal Zwilling
      </div>
      <div
        style={{
          fontSize: 15.75,
          lineHeight: "21px",
          fontWeight: 600,
          color: "#212529",
        }}
      >
        {title}
      </div>
    </div>
  </div>
);

/** one row: the preview, plus a picker to try a color without changing the table */
const BrandingRow = ({ branding }: { branding: FachzwillingBranding }) => {
  const [accentColor, setAccentColor] = useState(branding.accentColor);
  const changed = accentColor !== branding.accentColor;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <NavbarPreview
        title={branding.title}
        accentColor={accentColor}
        logoUrl={svgToDataUrl(recolorLogo(branding.logoSvg, accentColor))}
      />
      <input
        type="color"
        aria-label={`Akzentfarbe ${branding.title}`}
        value={accentColor}
        onChange={(event) => setAccentColor(event.target.value)}
      />
      <code style={{ width: 64 }}>{accentColor}</code>
      <button
        type="button"
        disabled={!changed}
        onClick={() => setAccentColor(branding.accentColor)}
      >
        Zurücksetzen
      </button>
    </div>
  );
};

export const Akzentfarben: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* no picker: the geoportal logo is a png and cannot be recolored */}
      <NavbarPreview {...geoportalBranding} />
      {Object.entries(fachzwillingBranding).map(([key, branding]) => (
        <BrandingRow key={key} branding={branding} />
      ))}
    </div>
  ),
};
