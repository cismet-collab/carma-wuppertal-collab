import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./XandRideSIM";
import data from "./_x-and-ride-data";
import React, { useEffect, useState } from "react";
const DATA_URL =
  "https://wupp-digitaltwin-assets.cismet.de/data/prbr.data.json";

const meta: Meta = {
  title: "X-And-Ride",
  argTypes: {
    feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
    beispielFeatures: {
      control: { type: "select" },
      options: ["Pestalozzistrasse", "b", "c"],
    },
  },
};

export default meta;

type Args = { feature: object };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    feature: undefined,
  },
  render: ({ feature }) => {
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
