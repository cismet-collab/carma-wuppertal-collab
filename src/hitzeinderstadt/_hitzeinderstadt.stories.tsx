import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import { action } from "@storybook/addon-actions";
import {
  Introduction,
  Datengrundlage,
  Karteninhalt,
  InKartePositionieren,
  Standort,
  Modellberechnungen,
  Aussagekraft,
} from ".";

const meta: Meta = {
  title: "Hitzeinderstadt",
};

export default meta;

export const IntroductionHitze: StoryObj = {
  render: () => {
    return <Introduction />;
  },
};

export const ModalHelpAndInfoHitze: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          menuSections={[
            <Datengrundlage
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <Karteninhalt
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <InKartePositionieren />,
            <Standort />,
            <Modellberechnungen
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <Aussagekraft />,
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};