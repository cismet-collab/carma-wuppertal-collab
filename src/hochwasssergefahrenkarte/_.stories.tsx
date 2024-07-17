import type { Meta, StoryObj } from "@storybook/react";
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
    const email = "opensource@cismet.de";
    return (
      <TopicMapContextProvider appKey="ais-generix-texts-tester">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            version,
            reactCismapRHMVersion,
            footerLogoUrl,
            email,
          })}
        />
      </TopicMapContextProvider>
    );
  },
};
