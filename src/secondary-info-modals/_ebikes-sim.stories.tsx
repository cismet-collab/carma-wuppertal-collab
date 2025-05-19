import type { Meta, StoryObj } from "@storybook/react";
import data from "./_ebikes-sim.data";
import Sim from "./EbikesSIM";

const meta: Meta = {
  title: "E-Bikes",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Zweirad Otto", "Bergische Museumsbahn"],
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
  args: {
    Beispiele: "Zweirad Otto",
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }) => {
    const modalBodyStyle: React.CSSProperties = {};

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }
    return (
      <div id="myMenu" style={modalBodyStyle}>
        <Sim feature={_feature} setOpen={(x) => {}} versionString="myVersion" />
      </div>
    );
  },
};
