import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./XandRideSIM";
import data from "./_data/x-and-ride";
import React from "react";
import { genericSecondaryInfoFooterFactory } from "@/commons";

const meta: Meta = {
  title: "X-And-Ride",
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

type Args = { Beispiele: string; Feature?: any; feature?: object };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: Object.keys(data)[0],
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }: Args) => {
    const modalBodyStyle: React.CSSProperties = {};
    console.log("Beispiele", Beispiele);

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }
    console.log("feature", feature);

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <Sim
          feature={_feature}
          Footer={genericSecondaryInfoFooterFactory({
            skipTeilzwilling: true,
            applicationName: "Teilzwilling Park+Ride-Karte Wuppertal",
          })}
          setOpen={() => {}}
          versionString="myVersion"
        />
      </div>
    );
  },
};
