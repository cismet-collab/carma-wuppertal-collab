import type { Meta, StoryObj } from "@storybook/react";
import XAndRideStory, {
  SecondaryInfo as XAndRide,
} from "./_x-and-ride-sim.stories";
import EbikeStory, { SecondaryInfo as Ebikes } from "./_ebikes-sim.stories";

const meta: Meta = {
  title: "SecondaryInfo Modals",
};

export default meta;

XAndRide.argTypes = XAndRideStory.argTypes;
export { XAndRide };

Ebikes.argTypes = EbikeStory.argTypes;
export { Ebikes };
