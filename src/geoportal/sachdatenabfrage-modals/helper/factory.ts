import EMobiModal from "../EMobiModal";
import EMobiRadModal from "../EMobiRadModal";
import TrinkwasserModal from "../TrinkwasserModal";
import SIMComponentDictionary from "../../../secondary-info-modals/";
import type { ReactNode, ComponentType } from "react";

interface ModalProps {
  feature: any;
  setOpen: (isOpen: boolean) => void;
  versionString?: string;
  Footer?: ReactNode;
}

export const additionalInfoFactory = (id: string): ComponentType<ModalProps> => {
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
