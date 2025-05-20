import type { Meta, StoryObj } from "@storybook/react";
import data from "./_data/luftmessstationen";
import Sim from "./LuftmessstationenSIM";

const meta: Meta = {
  title: "Luftmessstationen",
  argTypes: {
    Beispiele: {
      control: { type: "select" },
      options: ["Hochstr. 63","Hofkamp 86","Ostersbaum 72"],
    },
    Feature: {
      control: { type: "object" },
      description: "Paste your JSON here",
    },
  },
};

export default meta;


type Args = { filter: string };

export const SecondaryInfo: StoryObj<Args> = {
  args: {
    Beispiele: "Hochstr. 63",
    Feature: undefined,
  },
  render: ({ Beispiele, Feature: feature }) => {
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
            setOpen={(x) => {}}
            versionString="myVersion"
          />
        </div>
    );
  },
};
