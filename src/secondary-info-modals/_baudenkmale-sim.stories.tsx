import type { Meta, StoryObj } from "@storybook/react";
import data from "./_data/baudenkmale";
import Sim from "./BaudenkmaleSIM";
import { useState } from "react";
import { TopicMapContextProvider } from "react-cismap/contexts/TopicMapContextProvider";
import PhotoLightbox from "react-cismap/topicmaps/PhotoLightbox";

const meta: Meta = {
  title: "Baudenkmale",
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
    const [isOpen, setOpen] = useState(true);

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
