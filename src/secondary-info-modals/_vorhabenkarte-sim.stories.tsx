import type { Meta, StoryObj } from "@storybook/react";
import Sim from "./VorhabenkarteSIM";
import data from "./_data/vorhabenkarte";
import React, { useState } from "react";
import { TopicMapContextProvider } from "react-cismap/contexts/TopicMapContextProvider";
import PhotoLightbox from "react-cismap/topicmaps/PhotoLightbox";

const meta: Meta = {
  title: "Vorhabenkarte",
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
    const [isOpen, setOpen] = useState(true);
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
      <TopicMapContextProvider>
        <PhotoLightbox />
        <div id="myMenu" style={modalBodyStyle}>
          {isOpen && (
            <Sim
              feature={_feature}
              setOpen={setOpen}
              versionString="myVersion"
            />
          )}
          {!isOpen && (
            <div>
              <button
                onClick={() => {
                  setOpen(true);
                }}
              >
                open again
              </button>
            </div>
          )}
        </div>
      </TopicMapContextProvider>
    );
  },
};
