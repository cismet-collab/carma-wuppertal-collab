import EMobiModal from "../EMobiModal";
import EMobiRadModal from "../EMobiRadModal";

export const additionalInfoFactory = (id: string) => {
  switch (id) {
    case "emob":
      return EMobiModal;
    case "emob_rad":
      return EMobiRadModal;
    default:
      return null;
  }
};
