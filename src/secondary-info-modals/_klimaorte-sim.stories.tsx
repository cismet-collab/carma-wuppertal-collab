import type { Meta, StoryObj } from "@storybook/react-vite";
import data from "./_data/klimaorte";

const meta: Meta = {
  title: "Klimaorte",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: Object.keys(data),
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
