import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import {
  searchTextPlaceholder,
  MenuIntroduction,
  RechtsplanUndArbeitskarte,
  InKartePositionieren,
  MeinStandort,
  AenderungsverfahrenAnzeigenUndAbfragen,
  AenderungsverfahrenSuchenUndDurchmustern,
  FlaechenInDerArbeitskarteAuswaehlenUndAbfragen,
  DokumenteBetrachten,
  DokumenteHerunterladen,
  MenuTooltip,
  loadingText,
  MenuTitle,
  Footer,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

const meta: Meta = {
  title: "Fnp-inspektor",
};

export default meta;

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const IntroductionMenu: StoryObj = {
  render: () => {
    return <MenuIntroduction />;
  },
};
export const RechtsplanUndArbeitskarteSection: StoryObj = {
  render: () => {
    return <RechtsplanUndArbeitskarte />;
  },
};
export const InKartePositionierenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <InKartePositionieren
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const MeinStandortSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MeinStandort />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const AenderungsUndAbfragenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <AenderungsverfahrenAnzeigenUndAbfragen
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const AenderungsUndDurchmusternSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <AenderungsverfahrenSuchenUndDurchmustern
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};
export const FlaechenInDerArbeitskarteAuswaehlenUndAbfragenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <FlaechenInDerArbeitskarteAuswaehlenUndAbfragen
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const DokumenteBetrachtenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <DokumenteBetrachten />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const DokumenteHerunterladenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <DokumenteHerunterladen />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
  },
};

export const InitialLoadingText: StoryObj = {
  render: () => {
    return <div>{loadingText}</div>;
  },
};

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle />;
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
