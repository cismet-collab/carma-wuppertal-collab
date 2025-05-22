import EMobiModal from "../EMobiModal";
import EMobiRadModal from "../EMobiRadModal";
import TrinkwasserModal from "../TrinkwasserModal";
import SIMComponentDictionary from "../../../secondary-info-modals/";

export const additionalInfoFactory = (
  id: string
): React.ComponentType<any> | null => {
  switch (id) {
    case "emob":
      return EMobiModal;
    case "emob_rad":
      return EMobiRadModal;
    case "trinkwasser":
      return TrinkwasserModal;
    default:
      return SIMComponentDictionary[id] || null;
  }
};
