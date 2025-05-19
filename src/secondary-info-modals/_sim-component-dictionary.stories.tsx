import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryInfo as XAndRide } from "./_x-and-ride-sim.stories";

const meta: Meta = {
  title: "SecondaryInfo Modals",
};

export default meta;

XAndRide.argTypes = {
  Beispiele: {
    control: { type: "select" },
    options: ["Pestalozzistrasse"],
  },
  Feature: {
    control: { type: "object" },
    description: "Paste your JSON here",
  },
};
export { XAndRide };
