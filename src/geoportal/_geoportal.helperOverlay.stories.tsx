import type { Meta, StoryObj } from "@storybook/react";
import {
  getCollabedHelpComponentConfig as getCollabedHelpElementsConfig,
  LibHelperOverlay as DisplayContentHelper,
  useOverlayHelper,
} from "../helper-overlay";
import { geoElements, backgroundSettings, demoElements } from ".";

const meta: Meta = {
  title: "Geoportal/Helper-Overlay",
};

export default meta;

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const HilfeOverlay: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("HILFE_OVERLAY", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const LayerButtons: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Hintergrund: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>
    );
  },
};

export const Menü: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>
    );
  },
};

export const Zoom: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Vollbild: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const MeinePosition: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "MEINE_POSITION",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Rathaus: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Messungen: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Wechsel2D3D: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("2D_3D_TOGGLE", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Einnorden: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("EINNORDEN", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const Sachdatenabfrage: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "SACHDATENABFRAGE",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const GazetteerSuche: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "GAZETTEER_SUCHE",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Infobox: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("INFOBOX", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="right" />
      </div>
    );
  },
};

export const Center: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("CENTER", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Background: StoryObj = {
  render: () => {
    const { transparency, color } = backgroundSettings;
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: color,
          opacity: transparency,
        }}
      ></div>
    );
  },
};

export const DemoVideo: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("DEMOVIDEO", demoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};

export const DemoGif: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("DEMOGIF", demoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} primaryPlaceInStory="left" />
      </div>
    );
  },
};
