import type { Meta, StoryObj } from "@storybook/react";
import data from "./_data/klimaorte";
console.log("data", data);

const meta: Meta = {
  title: "Klimaorte",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Berufskolleg am Haspel"],
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
