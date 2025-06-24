import type { Meta, StoryObj } from "@storybook/react-vite";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  getCollabedHelpComponentConfig,
  searchTextPlaceholder,
  tooltipText,
} from ".";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

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
