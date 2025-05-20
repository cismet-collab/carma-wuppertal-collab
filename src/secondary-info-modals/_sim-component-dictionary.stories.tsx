import type { Meta, StoryObj } from "@storybook/react";
import XAndRideStory, {
  SecondaryInfo as XAndRide,
} from "./_x-and-ride-sim.stories";
import EbikeStory, { SecondaryInfo as Ebikes } from "./_ebikes-sim.stories";
import EMobStory, { SecondaryInfo as EMob } from "./_emob-sim.stories";
import LuftmessstationenStory, {
  SecondaryInfo as Luftmessstationen,
} from "./_luftmessstationen-sim.stories";


const meta: Meta = {
  title: "SecondaryInfo Modals",
};

export default meta;

XAndRide.argTypes = XAndRideStory.argTypes;
export { XAndRide };

Ebikes.argTypes = EbikeStory.argTypes;
export { Ebikes };

EMob.argTypes = EMobStory.argTypes;
export { EMob };

Luftmessstationen.argTypes =
  LuftmessstationenStory.argTypes;
export { Luftmessstationen };