import type { Meta, StoryObj } from "@storybook/react";
import { Impressum as ImpressumGeoportal } from "./ImpressumGeoportal";
import { Datenschutzerklärung as DatenschutzerklärungGeoportal } from "./DatenschutzerklärungGeoportal";
import { Impressum as ImpressumTopicMaps } from "./ImpressumTopicMaps";
import { Datenschutzerklärung as DatenschutzerklärungTopicMaps } from "./DatenschutzerklärungTopicMaps";

const meta: Meta = {
  title: "Legals",
};

export default meta;

export const ImpressumGeoportalMarkdown: StoryObj = {
  render: () => {
    return <ImpressumGeoportal />;
  },
};

export const DatenschutzerklärungGeoportalMarkdown: StoryObj = {
  render: () => {
    return <DatenschutzerklärungGeoportal />;
  },
};

export const ImpressumTopicMapsMarkdown: StoryObj = {
  render: () => {
    return <ImpressumTopicMaps />;
  },
};

export const DatenschutzerklärungTopicMapsMarkdown: StoryObj = {
  render: () => {
    return <DatenschutzerklärungTopicMaps />;
  },
};
