import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./XandRideSIM";
import data from "./_data/x-and-ride";
import { useFeatureNavigation, simArgTypes } from "./_story-helpers";

const dataKeys = Object.keys(data);

const meta: Meta = {
  title: "X-And-Ride",
  argTypes: simArgTypes(dataKeys),
};

export default meta;

type Args = { Beispiele: string; Feature?: any; feature?: object };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: dataKeys[0],
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }: Args) => {
    useFeatureNavigation(dataKeys, Beispiele);

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }

    return (
      <div id="myMenu">
        <Sim feature={_feature} setOpen={() => {}} versionString="myVersion" />
      </div>
    );
  },
};
