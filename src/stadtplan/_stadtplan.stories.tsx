import type { Meta, StoryObj } from "@storybook/react";
import { MenuIntroduction } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { KompaktanleitungSection } from ".";
import { MenuFooter } from ".";
import { MenuTitle } from ".";

const meta: Meta = {
  title: "Stadtplan",
};

export default meta;

export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle: React.CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>
    );
  },
};

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="Stadtplan" version={"xyz"} />
      </TopicMapContextProvider>
    );
  },
};

export const TitleMenu: StoryObj = {
  render: () => {
    return (
      <MenuTitle title="Themenstadtplan, Einstellungen und Kompaktanleitung" />
    );
  },
};
