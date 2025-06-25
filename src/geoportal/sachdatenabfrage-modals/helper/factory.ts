import TrinkwasserModal from "../TrinkwasserModal";
import SIMComponentDictionary from "../../../secondary-info-modals/";
import EbikesSIM from "../../../secondary-info-modals/EbikesSIM";
import EMobSIM from "../../../secondary-info-modals/EMobSIM";
export const additionalInfoFactory = (
  id: string
): React.ComponentType<any> | null => {
  switch (id) {
    case "emob":
      return EMobSIM;
    case "emob_rad":
      return EbikesSIM;
    case "trinkwasser":
      return TrinkwasserModal;
    default:
      return SIMComponentDictionary[id] || null;
  }
};
