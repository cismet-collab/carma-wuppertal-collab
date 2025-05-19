import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./XandRideSIM";
import data from "./_x-and-ride.data";
import React from "react";

const meta: Meta = {
  title: "X-And-Ride",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Pestalozzistrasse"],
    },
    Feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
  },
};

export default meta;

type Args = { feature: object };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: undefined,
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }) => {
    const modalBodyStyle: React.CSSProperties = {};

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data["Pestalozzistrasse"];
    }
    console.log("feature", feature);

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <Sim feature={_feature} setOpen={(x) => {}} versionString="myVersion" />
      </div>
    );
  },
};
