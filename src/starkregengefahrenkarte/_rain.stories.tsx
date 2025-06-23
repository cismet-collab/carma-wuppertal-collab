import type { Meta, StoryObj } from "@storybook/react-vite";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { getCollabedHelpComponentConfig } from ".";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

const meta: Meta = {
  title: "Starkregengefahrenkarte",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const versionString = "0.test.0";
    const reactCismapRHMVersion = "0.test.0";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
            reactCismapRHMVersion,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};
