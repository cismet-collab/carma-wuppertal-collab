import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import {
  tooltipText,
  searchTextPlaceholder,
  getCollabedHelpComponentConfig,
} from "./";
const meta: Meta = {
  title: "Umweltalarm",
};

export default meta;

export const ModalHelpAndInfo: StoryObj = {
  render: () => {
    const versionString = "xyz";

    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
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
