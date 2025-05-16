import type { Meta, StoryObj } from "@storybook/react";
import {
  Introduction,
  modalMenuTitleText,
  Menu10Datengrundlagen,
  Menu20MeinKassenzeichen,
  Menu30KartenhintergruendeText,
  Menu40Anleitung,
  Menu41Mailservice,
  Menu42Aenderungen,
  Menu50FAQ,
  Menu60Datenschutz,
  AnderungswunscheIntroduction,
  anderungswunscheSimpleTexts,
  AnderungswunscheHint,
  AnderungswunscheIntroductionAus,
  AmKanalAngeschlossen,
  DirekteinleitungInVerrohrtesGewaesser,
  DirekteinleitungOffenesGewaesser,
  VersickerungsanlageMitNotueberlauf,
  Versickernd,
  Dachflaeche,
  Gruendachflaeche,
  Oekopflaster,
  StaedtStrassenflaeche,
  StaedtStrassenflaecheOekopflaster,
  VersiegelteFlaeche,
  KassenzeichenViewerGefahrensignal,
  panelTitles,
  Kontaktinformationen,
  tooltips,
  VersionNumberLoginPage,
  KompaktanleitungFooter,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Section from "react-cismap/topicmaps/menu/Section";
import { Alert } from "react-bootstrap";

const meta: Meta = {
  title: "Verdis-online",
};
export default meta;
export const MenuModalTitle: StoryObj = {
  render: () => {
    return <div>{modalMenuTitleText}</div>;
  },
};
export const MenuModalIntroduction: StoryObj = {
  render: () => {
    return <Introduction />;
  },
};

export const ModalClosedMenu: StoryObj = {
  render: () => {
    const showOpened = false;
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          menuSections={[
            <Menu10Datengrundlagen showOpened={showOpened} />,
            <Menu20MeinKassenzeichen showOpened={showOpened} />,
            <Section
              key="kartenhintergruende"
              sectionKey="kartenhintergruende"
              {...(showOpened
                ? { activeSectionKey: "kartenhintergruende" }
                : {})}
              sectionTitle="Hintergrundkarten"
              sectionBsStyle="info"
              sectionContent={<Menu30KartenhintergruendeText />}
            />,
            <Menu40Anleitung showOpened={showOpened} />,
            <Menu41Mailservice showOpened={showOpened} />,
            <Menu42Aenderungen showOpened={showOpened} />,
            <Menu50FAQ showOpened={showOpened} />,
            <Menu60Datenschutz showOpened={showOpened} />,
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const ModalOpenedMenu: StoryObj = {
  render: () => {
    const showOpened = true;
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          menuSections={[
            <Menu10Datengrundlagen showOpened={showOpened} />,
            <Menu20MeinKassenzeichen showOpened={showOpened} />,
            <Section
              key="kartenhintergruende"
              sectionKey="kartenhintergruende"
              {...(showOpened
                ? { activeSectionKey: "kartenhintergruende" }
                : {})}
              sectionTitle="Hintergrundkarten"
              sectionBsStyle="info"
              sectionContent={<Menu30KartenhintergruendeText />}
            />,
            <Menu40Anleitung showOpened={showOpened} />,
            <Menu41Mailservice showOpened={showOpened} />,
            <Menu42Aenderungen showOpened={showOpened} />,
            <Menu50FAQ showOpened={showOpened} />,
            <Menu60Datenschutz showOpened={showOpened} />,
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const IntroductionAnderungswunsche: StoryObj = {
  render: () => {
    return (
      <div>
        <AnderungswunscheIntroduction />
        <AnderungswunscheIntroductionAus />
      </div>
    );
  },
};
export const TitleAnderungswunsche: StoryObj = {
  render: () => {
    return <span>{anderungswunscheSimpleTexts.andrTitle}</span>;
  },
};
export const HintAnderungswunsche: StoryObj = {
  render: () => {
    const { draftHint } = anderungswunscheSimpleTexts;
    return (
      <div>
        <p>{draftHint}</p>
        <AnderungswunscheHint />
      </div>
    );
  },
};

export const KurzinfosAnschlussgrad: StoryObj = {
  render: () => {
    return (
      <Alert variant="warning" dismissible>
        <p>
          <AmKanalAngeschlossen />
        </p>
        <p>
          <DirekteinleitungInVerrohrtesGewaesser />
        </p>
        <p>
          <DirekteinleitungOffenesGewaesser />
        </p>
        <p>
          <Versickernd />
        </p>
        <p>
          <VersickerungsanlageMitNotueberlauf />
        </p>
      </Alert>
    );
  },
};

export const KurzinfosFlaechenart: StoryObj = {
  render: () => {
    return (
      <Alert variant="warning" dismissible>
        <p>
          <Dachflaeche />
        </p>
        <p>
          <Gruendachflaeche />
        </p>
        <p>
          <Oekopflaster />
        </p>
        <p>
          <StaedtStrassenflaeche />
        </p>
        <p>
          <StaedtStrassenflaecheOekopflaster />
        </p>
        <p>
          <VersiegelteFlaeche />
        </p>
      </Alert>
    );
  },
};

export const KurzinfosKassenzeichenViewer: StoryObj = {
  render: () => {
    return (
      <Alert variant="danger" dismissible>
        <p>
          <KassenzeichenViewerGefahrensignal />
        </p>
      </Alert>
    );
  },
};

export const PanelTitles: StoryObj = {
  render: () => {
    return (
      <div>
        <h5>{panelTitles.contactTitle}</h5>
        <h5>{panelTitles.kassenzeichenTitle}</h5>
        <h5>{panelTitles.kassenzeichenTitleChart}</h5>
      </div>
    );
  },
};

export const KontaktInformationen: StoryObj = {
  render: () => {
    return <Kontaktinformationen textColor="black" />;
  },
};

export const LoginPageVersionNumber: StoryObj = {
  render: () => {
    return <VersionNumberLoginPage textColor="black" version="xyz" />;
  },
};

export const FooterKompaktanleitung: StoryObj = {
  render: () => {
    return <KompaktanleitungFooter version="xyz" />;
  },
};

export const Tooltips: StoryObj = {
  render: () => {
    const { flachenInfoTooltip, diagrammTooltip, ansprechpartner } = tooltips;
    return (
      <div>
        <p>
          {flachenInfoTooltip.ausblenden} - {flachenInfoTooltip.einblenden}
        </p>
        <p>
          {diagrammTooltip.ausblenden} - {diagrammTooltip.einblenden}
        </p>
        <p>
          {ansprechpartner.ausblenden} - {ansprechpartner.einblenden}
        </p>
      </div>
    );
  },
};
