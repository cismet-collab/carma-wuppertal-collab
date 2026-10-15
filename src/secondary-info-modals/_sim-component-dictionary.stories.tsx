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
import AlkisStory, { SecondaryInfo as Alkis } from "./_alkis-sim.stories";
import BodenfeuchteStory, {
  SecondaryInfo as Bodenfeuchte,
} from "./_bodenfeuchte-sim.stories";
import BaudenkmaleStory, {
  SecondaryInfo as Baudenkmale,
} from "./_baudenkmale-sim.stories";
import UvmSensorenStory, {
  SecondaryInfo as UvmSensoren,
} from "./_uvm-sensoren-sim.stories";
import FahrradzaehlerStory, {
  SecondaryInfo as Fahrradzaehler,
} from "./_fahrradzaehler-sim.stories";
import PotenzialflaechenStory, {
  SecondaryInfo as Potenzialflaechen,
} from "./_potenzialflaechen-sim.stories";
import KlimastationStory, {
  SecondaryInfo as Klimastation,
} from "./_klimastation-sim.stories";
import fluggsSensorenData from "./_data/fluggsSensoren";
import FluggsSensorenSIM from "./FluggsSensorenSIM";
import { useFeatureNavigation, simArgTypes } from "./_story-helpers";
import SIMComponentDictionary from ".";
import { PI_VALUES } from "@carma-commons/math";

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
        {'import {PI_VALUES} from "@carma-commons/math";'}
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

Alkis.argTypes = AlkisStory.argTypes;
export { Alkis };

Bodenfeuchte.argTypes = BodenfeuchteStory.argTypes;
export { Bodenfeuchte };

Baudenkmale.argTypes = BaudenkmaleStory.argTypes;
export { Baudenkmale };

UvmSensoren.argTypes = UvmSensorenStory.argTypes;
export { UvmSensoren };

Fahrradzaehler.argTypes = FahrradzaehlerStory.argTypes;
export { Fahrradzaehler };

Potenzialflaechen.argTypes = PotenzialflaechenStory.argTypes;
export { Potenzialflaechen };

Klimastation.argTypes = KlimastationStory.argTypes;
export { Klimastation };

// Only listed here, without a story file of its own
const fluggsSensorenKeys = Object.keys(fluggsSensorenData);

export const FluggsSensoren = {
  args: {
    Beispiele: fluggsSensorenKeys[0],
    Feature: undefined,
  },
  argTypes: simArgTypes(fluggsSensorenKeys),
  render: ({ Beispiele, Feature: feature }: { Beispiele: string; Feature?: any }) => {
    useFeatureNavigation(fluggsSensorenKeys, Beispiele);

    const _feature =
      feature !== undefined && JSON.stringify(feature) !== "{}"
        ? feature
        : fluggsSensorenData[Beispiele];
    return (
      <div id="myMenu">
        <FluggsSensorenSIM
          feature={_feature}
          setOpen={() => {}}
          versionString="myVersion"
          inStorybook={true}
        />
      </div>
    );
  },
};
