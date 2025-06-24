import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import {
  KompaktanleitungSection,
  MenuTitle,
  MenuIntroduction,
  InfoBoxTextTitle,
  searchTextPlaceholder,
  InfoBoxTextContent,
  MenuTooltip,
  Footer,
  SecondaryInfoFooter,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";
import Section from "react-cismap/topicmaps/menu/Section";
import {
  FilterStyle,
  getFilterHeader,
  KompaktAnleitungStyle,
  KompaktAnleitungTitle,
} from "./SectionTitles";

const meta: Meta = {
  title: "E-bikes",
};

export default meta;

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
        <KompaktanleitungSection />
      </div>
    );
  },
};

export const TextInInfoBoxTitle: StoryObj = {
  render: () => {
    return <InfoBoxTextTitle />;
  },
};
export const TextInInfoBoxContent: StoryObj = {
  render: () => {
    return <InfoBoxTextContent />;
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
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
