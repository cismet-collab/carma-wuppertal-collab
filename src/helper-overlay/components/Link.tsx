import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import type { OverlayTourContext as OverlayTourContextSettings } from "../helperTypes";
import { OverlayTourContext } from "./OverlayTourProvider";

interface LinkProps {
  children: JSX.Element | string;
  target?: string;
  section?: string;
  onClick?: () => void;
}

export const HelpOverlayLink = ({
  children,
  target,
  section,
  onClick,
}: LinkProps) => {
  const { setSecondaryWithKey } =
    useContext<OverlayTourContextSettings>(OverlayTourContext);
  const { setAppMenuActiveMenuSection, setAppMenuVisible } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  const showSecondaryWithKeyHandler = (e) => {
    e.stopPropagation();
    if (target) {
      setSecondaryWithKey(target);
    }

    if (section) {
      setAppMenuVisible(true);
      setAppMenuActiveMenuSection(section);
    }
  };
  return (
    <a
      onClick={onClick ? onClick : showSecondaryWithKeyHandler}
      className="renderAsLink"
    >
      {children}
    </a>
  );
};
