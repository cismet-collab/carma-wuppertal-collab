const HEX_COLOR = /#[0-9a-f]{6}\b/gi;
const WHITE = "#ffffff";

const toChannels = (color: string): number[] =>
  [1, 3, 5].map((start) => parseInt(color.slice(start, start + 2), 16));

const brightness = (color: string): number =>
  toChannels(color).reduce((sum, channel) => sum + channel, 0);

const toDarkShade = (color: string): string =>
  `#${toChannels(color)
    .map((channel) =>
      Math.round(channel / 2)
        .toString(16)
        .padStart(2, "0")
    )
    .join("")}`;

export const recolorLogo = (svg: string, accentColor: string): string => {
  if (!/^#[0-9a-f]{6}$/i.test(accentColor)) {
    return svg;
  }
  const colors = [
    ...new Set((svg.match(HEX_COLOR) ?? []).map((c) => c.toLowerCase())),
  ].filter((color) => color !== WHITE);
  if (colors.length !== 2) {
    return svg;
  }
  const [fileDark, fileAccent] = colors.sort(
    (a, b) => brightness(a) - brightness(b)
  );
  const replacements: Record<string, string> = {
    [fileAccent]: accentColor,
    [fileDark]: toDarkShade(accentColor),
  };
  return svg.replace(
    HEX_COLOR,
    (color) => replacements[color.toLowerCase()] ?? color
  );
};

export const svgToDataUrl = (svg: string): string =>
  `data:image/svg+xml,${encodeURIComponent(svg)}`;
