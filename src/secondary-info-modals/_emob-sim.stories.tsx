import type { Meta, StoryObj } from "@storybook/react";
import data from "./_emob-sim.data";
console.log("data", data);

const meta: Meta = {
  title: "E-Auto Ladestationskarte",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Hardt / Elisenhöhe"],
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
