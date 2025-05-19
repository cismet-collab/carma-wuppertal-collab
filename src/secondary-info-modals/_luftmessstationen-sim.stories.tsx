import type { Meta, StoryObj } from "@storybook/react";
import data from "./_luftmessstationen-sim.data";
console.log("data", data);

const meta: Meta = {
  title: "Luftmessstationen",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Hofkamp 86"],
    },
    Feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
  },
};

export default meta;

import React from "react";

type Args = { filter: string };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    filter: "",
  },
  render: ({}) => {
    const modalBodyStyle: React.CSSProperties = {};

    return (
      <div id="myMenu" style={modalBodyStyle}>
        xxx
      </div>
    );
  },
};
