import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from ".";
import { InfoBoxText, Footer } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { action } from "storybook/actions";
import type { CSSProperties } from "react";

const meta: Meta = {
  title: "BPlan Auskunft",
};

export default meta;

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div id="myMenu" style={modalBodyStyle}>
          <Modal visible={true} version="xyz" />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const TextInInfoBox: StoryObj = {
  render: () => {
    return <InfoBoxText setAppMenuVisible={action("setAppMenuVisible")} />;
  },
};

export const MenuFooter: StoryObj = {
  render: () => {
    return (
      <Footer
        version="xyz"
        setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
      />
    );
  },
};
