import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  searchTextPlaceholder,
  InfoBoxTextTitle,
  MenuTooltip,
  MenuTitle,
  MenuIntroduction,
  KompaktanleitungSection,
  InfoBoxTextContent,
  Footer,
  SecondaryInfoFooter,
} from ".";
import type { CSSProperties } from "react";
import Section from "react-cismap/topicmaps/menu/Section";
import {
  FilterStyle,
  getFilterHeader,
  KompaktAnleitungStyle,
  KompaktAnleitungTitle,
} from "./SectionTitles";

const meta: Meta = {
  title: "X-and-ride",
};

export default meta;

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextInInfoBoxTitle: StoryObj = {
  render: () => {
    return <InfoBoxTextTitle />;
  },
};
export const TextInInfoBoxContent: StoryObj = {
  render: () => {
    return (
      <InfoBoxTextContent
        setAppMenuVisible={action("setAppMenuVisible")}
        setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
      />
    );
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
  },
};

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle />;
  },
};

export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
      </div>
    );
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

export const InfoFooter: StoryObj = {
  render: () => {
    return (
      <div style={{ width: "900px" }}>
        <SecondaryInfoFooter close={action("close")} version="xyz" />
      </div>
    );
  },
};

export const SecionTitles: StoryObj = {
  render: () => {
    return (
      <div>
        <Section
          sectionBsStyle={FilterStyle}
          sectionTitle={getFilterHeader(100, 10)}
        />
        <Section
          sectionBsStyle={KompaktAnleitungStyle}
          sectionTitle={KompaktAnleitungTitle}
        />
      </div>
    );
  },
};
