import type { Meta, StoryObj } from "@storybook/react-vite";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { getCollabedHelpComponentConfig } from ".";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

const meta: Meta = {
  title: "Hochwassergefahrenkarte",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const version = "0.test.0";
    const reactCismapRHMVersion = "0.test.0";
    const footerLogoUrl = undefined;
    const versionString = "xyz";
    const email = "opensource@cismet.de";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            version,
            reactCismapRHMVersion,
            footerLogoUrl,
            email,
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};
