import type { Meta, StoryObj } from "@storybook/react";
import data from "./_ebikes-sim.data";
console.log("data", data);

const meta: Meta = {
  title: "E-Bikes",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Zweirad Otto"],
    },
    Feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
  },
};

export default meta;

import React from "react";

type Args = {};

export const SecondaryInfo: StoryObj<Args> = {
  args: {},
  render: ({}) => {
    const modalBodyStyle: React.CSSProperties = {};

    return (
      <div id="myMenu" style={modalBodyStyle}>
        xxx
      </div>
    );
  },
};
