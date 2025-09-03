import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  getCollabedHelpComponentConfig,
  searchTextPlaceholder,
  tooltipText,
} from "./";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

const meta: Meta = {
  title: "Hitzeinderstadt",
};

export default meta;

export const ModalHelpAndInfoHitze: StoryObj = {
  render: () => {
    // const version = "0.test.0";
    // const reactCismapRHMVersion = "0.test.0";
    // const footerLogoUrl = undefined;
    const versionString = "xyz";
    // const email = "opensource@cismet.de";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            // version,
            // reactCismapRHMVersion,
            // footerLogoUrl,
            // email,
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextTooltip: StoryObj = {
  render: () => {
    return <div>{tooltipText}</div>;
  },
};
