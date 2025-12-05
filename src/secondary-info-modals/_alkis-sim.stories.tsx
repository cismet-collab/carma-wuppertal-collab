import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CarmaMapAPIProvider } from "@carma-mapping/carma-map-api";
import data from "./_data/alkis";
import Sim from "./AlkisSIM";

const meta: Meta = {
  title: "Alkis",
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

type Args = { Beispiele: string; Feature?: any };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: Object.keys(data)[0],
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }: Args) => {
    const modalBodyStyle: React.CSSProperties = {};

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }
    return (
      <CarmaMapAPIProvider>
        <div id="myMenu" style={modalBodyStyle}>
          <Sim feature={_feature} setOpen={() => {}} versionString="v0.10.5" />
        </div>
      </CarmaMapAPIProvider>
    );
  },
};
