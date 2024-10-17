import React, { useState, createContext } from "react";
import type {
  ç as OverlayTourContextSettings,
  OverlayTourProviderProps,
  OverlayHelperConfig,
} from "../helperTypes";

export const OverlayTourContext = createContext<OverlayTourContextSettings>({
  configs: [],
  addConfig: (arg) => {},
  removeConfig: (arg) => {},
  showSecondaryWithKey: null,
  setSecondaryWithKey: (key) => {},
});

export const OverlayTourProvider = ({
  children,
  showOverlay = false,
  closeOverlay = () => {},
  transparency = 0.8,
  color = "black",
}: OverlayTourProviderProps) => {
  const [configs, setConfigs] = useState<OverlayHelperConfig[]>([]);
  const [secondaryKey, setSecondaryKey] = useState<null | string>(null);

  const addConfig = (config) => {
    setConfigs((prevConfigs) => [...prevConfigs, config]);
  };

  const removeConfig = (config) => {
    setConfigs((prevConfigs) => prevConfigs.filter((c) => c !== config));
  };

  const setSecondaryKeyHandler = (key: string) => {
    setSecondaryKey(key);
  };

  return (
    <OverlayTourContext.Provider
      value={{
        configs,
        addConfig,
        removeConfig,
        showSecondaryWithKey: secondaryKey,
        setSecondaryWithKey: setSecondaryKeyHandler,
      }}
    >
      {children}
    </OverlayTourContext.Provider>
  );
};
