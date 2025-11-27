import type { Meta } from "@storybook/react";
import XAndRideStory, {
  SecondaryInfo as XAndRide,
} from "./_x-and-ride-sim.stories";
import EbikeStory, { SecondaryInfo as Ebikes } from "./_ebikes-sim.stories";
import EMobStory, { SecondaryInfo as EMob } from "./_emob-sim.stories";
import LuftmessstationenStory, {
  SecondaryInfo as Luftmessstationen,
} from "./_luftmessstationen-sim.stories";
import VorhabenkarteStory, {
  SecondaryInfo as Vorhabenkarte,
} from "./_vorhabenkarte-sim.stories";
import SIMComponentDictionary from ".";
import { PI_VALUES } from "@carma/math";

const meta: Meta = {
  title: "SecondaryInfo Modals",
};

export default meta;

// Story that prints out all prop keys of SIMComponentDictionary
export const SIMDictionaryKeys = () => {
  const keys = Object.keys(SIMComponentDictionary);
  return (
    <div>
      <h3>SIMComponentDictionary Keys</h3>
      <pre>
        {keys.map((key) => (
          <li key={key}>{key}</li>
        ))}
      </pre>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>Test @carma imports</h3>

      <pre>
        {'import {PI_VALUES} from "@carma/math";'}
        <br />
        <br />
        # Example:
        <br />
        -pi: {PI_VALUES.MINUS_PI}
      </pre>
    </div>
  );
};

XAndRide.argTypes = XAndRideStory.argTypes;
export { XAndRide };

Ebikes.argTypes = EbikeStory.argTypes;
export { Ebikes };

EMob.argTypes = EMobStory.argTypes;
export { EMob };

Luftmessstationen.argTypes = LuftmessstationenStory.argTypes;
export { Luftmessstationen };

Vorhabenkarte.argTypes = VorhabenkarteStory.argTypes;
export { Vorhabenkarte };
