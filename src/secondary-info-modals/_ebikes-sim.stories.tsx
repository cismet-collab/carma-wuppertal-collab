import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "E-Bikes",
  argTypes: {},
};

export default meta;

import React from "react";

type Args = { filter: string };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    filter: "",
  },
  render: ({ filter }) => {
    const modalBodyStyle: React.CSSProperties = {};

    return (
      <div id="myMenu" style={modalBodyStyle}>
        xxx
      </div>
    );
  },
};
