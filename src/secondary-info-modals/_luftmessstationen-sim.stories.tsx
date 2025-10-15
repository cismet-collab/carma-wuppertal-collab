import type { Meta, StoryObj } from "@storybook/react";
import data from "./_data/luftmessstationen";
import Sim from "./LuftmessstationenSIM";
import { genericSecondaryInfoFooterFactory } from "../commons";

const meta: Meta = {
  title: "Luftmessstationen",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: Object.keys(data),
    },
    Feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
  },
};

export default meta;

type Args = { Beispiele: string; Feature?: any; filter?: string };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: Object.keys(data)[0],
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }: Args) => {
    const modalBodyStyle: React.CSSProperties = {};
    let _feature;
    if (feature !== undefined && JSON.stringify(feature) !== "{}") {
      _feature = feature;
    } else {
      _feature = data[Beispiele];
    }
    return (
      <div id="myMenu" style={modalBodyStyle}>
        <Sim
          feature={_feature}
          setOpen={() => {}}
          Footer={genericSecondaryInfoFooterFactory({
            skipTeilzwilling: true,
            applicationName: "Teilzwilling Luftmessstationskarte",
            skipCloseButton: true,
          })}
          versionString="myVersion"
          inStorybook={true}
        />
      </div>
    );
  },
};
