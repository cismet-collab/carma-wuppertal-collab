import type { Meta } from "@storybook/react";
import XAndRideStory, {
  SecondaryInfo as XAndRide,
} from "./_x-and-ride-sim.stories";
import EbikeStory, { SecondaryInfo as Ebikes } from "./_ebikes-sim.stories";
import EMobStory, { SecondaryInfo as EMob } from "./_emob-sim.stories";
import LuftmessstationenStory, {
  SecondaryInfo as Luftmessstationen,
} from "./_luftmessstationen-sim.stories";
import SIMComponentDictionary from ".";


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
    </div>
  );
};


XAndRide.argTypes = XAndRideStory.argTypes;
export { XAndRide };

Ebikes.argTypes = EbikeStory.argTypes;
export { Ebikes };

EMob.argTypes = EMobStory.argTypes;
export { EMob };

Luftmessstationen.argTypes =
  LuftmessstationenStory.argTypes;
export { Luftmessstationen };