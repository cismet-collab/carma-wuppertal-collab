import { OverlayTourContext } from "./OverlayTourProvider";
import type { OverlayTourContext as OverlayTourContextSettings } from "../helperTypes";
import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { UIContext } from "react-cismap/contexts/UIContextProvider";

interface LinkProps {
  children: JSX.Element | string;
  target?: string;
  section?: string;
}

export const Link = ({ children, target, section }: LinkProps) => {
  const { setSecondaryWithKey, showOverlay } =
    useContext<OverlayTourContextSettings>(OverlayTourContext);
  const { setAppMenuActiveMenuSection, setAppMenuVisible } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);
  const { appMenuVisible } = useContext<typeof UIContext>(UIContext);

  const showSecondaryWithKeyHandler = (e) => {
    e.stopPropagation();
    if (target) {
      if (appMenuVisible) {
        setAppMenuVisible(false);
        showOverlay(true);
      }
      setSecondaryWithKey(target);
    }

    if (section) {
      setAppMenuVisible(true);
      setAppMenuActiveMenuSection(section);
    }
  };
  return (
    <span
      onClick={showSecondaryWithKeyHandler}
      style={{ cursor: "pointer", color: "#4493F8" }}
    >
      <u>{children}</u>
    </span>
  );
};
