import type { Meta, StoryObj } from "@storybook/react";
import { Impressum } from "./Impressum";
import { Datenschutzerklärung } from "./Datenschutzerklärung";

const meta: Meta = {
  title: "Legals",
};

export default meta;

export const ImpressumMarkdown: StoryObj = {
  render: () => {
    return <Impressum />;
  },
};

export const DatenschutzerklärungMarkdown: StoryObj = {
  render: () => {
    return <Datenschutzerklärung />;
  },
};
