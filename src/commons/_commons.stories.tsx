import type { Meta, StoryObj } from "@storybook/react-vite";
import { Attribution, GenericDigitalTwinReferenceSection } from ".";
import { GenericDigitalTwinReferenceTextComponent } from ".";
import { MenuFooter } from ".";
import { MeinStandortText } from ".";
import { StadtplanTagNachtText } from ".";
import { LuftbildkarteText } from ".";
import { InKartePositionierenText } from ".";
import { wuppertalCollabProjectVersion } from "..";
import { action } from "storybook/actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { Link } from "react-scroll";
import Icon from "react-cismap/commons/Icon";

const meta: Meta = {
  title: "Commons",
  args: {
    applicationName: "GreatApp",
    applicationVersion: "abcd",
  },
  argTypes: {
    applicationName: {
      control: "text",
      description: "Name of the application",
    },
    applicationVersion: {
      control: "text",
      description: "Version of the application",
    },
  },
};

export default meta;

export const version: StoryObj = {
  render: () => <div>{wuppertalCollabProjectVersion}</div>,
};

export const attribution: StoryObj = {
  // @ts-expect-error: TODO: fix type
  render: (args) => <Attribution {...args} />,
};

export const genericDigitalTwinReferenceTextComponent: StoryObj = {
  render: () => <GenericDigitalTwinReferenceTextComponent />,
};

export const genericDigitalTwinReferenceSection: StoryObj = {
  render: () => <GenericDigitalTwinReferenceSection />,
};

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter
          title="TopicMaps Wuppertal"
          version={"1.23.0"}
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
      </TopicMapContextProvider>
    );
  },
};

export const StandortText: StoryObj = {
  render: () => <MeinStandortText />,
};

export const StadtplanTagNacht: StoryObj = {
  render: () => <StadtplanTagNachtText />,
};

export const LuftbildkarteSimpleText: StoryObj = {
  render: () => <LuftbildkarteText />,
};

export const TextInKartePositionieren: StoryObj = {
  render: () => (
    <InKartePositionierenText
      pretext={
        <p>
          Um direkt zu einer P+R- oder B+R-Anlage zu gelangen, geben Sie den
          Anfang des Namens der Anlage im Eingabefeld links unten ein
          (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden
          Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben,
          wird der Inhalt der Auswahlliste angepasst.) Sie können auch andere
          Suchbegriffe eingeben, nämlich Stadtteil (Stadtbezirk oder Quartier),
          Adresse, Straßenname oder POI. Durch das in der Auswahlliste
          vorangestellte Symbol erkennen Sie, ob es sich bei einem Treffer um
          eine <Icon name="car" /> P+R-Anlage, eine <Icon name="bicycle" />{" "}
          B+R-Anlage, einen <Icon name="circle" /> Stadtbezirk, ein{" "}
          <Icon name="pie-chart" /> Quartier, eine <Icon name="home" /> Adresse,
          eine <Icon name="road" /> Straße ohne zugeordnete Hausnummern, einen{" "}
          <Icon name="tag" /> POI, die <Icon name="tags" /> alternative
          Bezeichnung eines POI, eine <Icon name="child" />{" "}
          Kindertageseinrichtung oder eine <Icon name="graduation-cap" /> Schule
          handelt. Tipp: Durch Eingabe von "P+" oder "B+" erzeugen Sie eine
          vollständige Auswahlliste aller P+R- bzw. B+R-Anlagen.
        </p>
      }
      posttext={
        <p>
          Wenn Sie die Karte wie oben beschrieben auf eine P+R- bzw. B+R-Anlage
          positionieren, erhält diese sofort den Fokus, sodass die zugehörigen
          Informationen direkt in der Info-Box angezeigt werden. Voraussetzung
          dafür ist, dass die aktuellen{" "}
          <Link
            to="MeinThemenstadtplan"
            containerId="myMenu"
            onClick={() => action("filter")}
            className="renderAsLink"
          >
            Filtereinstellungen
          </Link>{" "}
          die Darstellung der Anlage in der Karte erlauben.
        </p>
      }
    />
  ),
};
