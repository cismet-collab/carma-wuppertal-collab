import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./VorhabenkarteSIM";
import data from "./_data/vorhabenkarte";
import { useState } from "react";
import { TopicMapContextProvider } from "react-cismap/contexts/TopicMapContextProvider";
import PhotoLightbox from "react-cismap/topicmaps/PhotoLightbox";
import { useFeatureNavigation, simArgTypes } from "./_story-helpers";

const dataKeys = Object.keys(data);

const meta: Meta = {
  title: "Vorhabenkarte",
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
    const [isOpen, setOpen] = useState(true);
    useFeatureNavigation(dataKeys, Beispiele);

    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }

    return (
      <TopicMapContextProvider>
        <PhotoLightbox />
        <div id="myMenu">
          {isOpen && (
            <Sim
              feature={_feature}
              setOpen={setOpen}
              versionString="myVersion"
            />
          )}
          {!isOpen && (
            <div>
              <button onClick={() => setOpen(true)}>open again</button>
            </div>
          )}
        </div>
      </TopicMapContextProvider>
    );
  },
};
