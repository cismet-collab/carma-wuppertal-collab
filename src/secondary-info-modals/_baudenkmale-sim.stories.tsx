import type { Meta, StoryObj } from "@storybook/react";
import data from "./_data/baudenkmale";
import Sim from "./BaudenkmaleSIM";
import { useState, useEffect, useCallback } from "react";
import { useArgs } from "@storybook/core/preview-api";
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
    "ℹ️ Ctrl+Shift+← → zum Blättern": {
      control: false,
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
    const [, updateArgs] = useArgs<Args>();

    const keys = Object.keys(data);
    const currentIndex = keys.indexOf(Beispiele);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.shiftKey && e.ctrlKey) {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            const next = (currentIndex + 1) % keys.length;
            updateArgs({ Beispiele: keys[next] });
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            const prev = (currentIndex - 1 + keys.length) % keys.length;
            updateArgs({ Beispiele: keys[prev] });
          }
        }
      },
      [currentIndex, keys, updateArgs]
    );

    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

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
