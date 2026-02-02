import type { Meta, StoryObj } from "@storybook/react";
import { CarmaMapAPIProvider } from "@carma-mapping/carma-map-api";
import data from "./_data/alkis";
import Sim from "./AlkisSIM";
import { useFeatureNavigation, simArgTypes } from "./_story-helpers";

const dataKeys = Object.keys(data);

const meta: Meta = {
  title: "Alkis",
  argTypes: simArgTypes(dataKeys),
};

export default meta;

type Args = { Beispiele: string; Feature?: any };

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
      <CarmaMapAPIProvider>
        <div id="myMenu">
          <Sim feature={_feature} setOpen={() => {}} versionString="v0.10.5" />
        </div>
      </CarmaMapAPIProvider>
    );
  },
};
