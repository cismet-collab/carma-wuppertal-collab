import EMobiModal from "../EMobiModal";
import EMobiRadModal from "../EMobiRadModal";
import TrinkwasserModal from "../TrinkwasserModal";

export const additionalInfoFactory = (id: string) => {
  switch (id) {
    case "emob":
      return EMobiModal;
    case "emob_rad":
      return EMobiRadModal;
    case "trinkwasser":
      return TrinkwasserModal;
    default:
      return null;
  }
};
