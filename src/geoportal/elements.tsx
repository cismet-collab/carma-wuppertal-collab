import type { ElementType } from "../helper-overlay/helperTypes";
import { MeasurementsText } from "./secondary/MeasurementsText";
import { InfoboxText } from "./secondary/InfoboxText";
import { FullScreenModeText } from "./secondary/FullScreenModeText"
import { HomeText } from "./secondary/HomeText";
import { FeatureInfoText } from "./secondary/FeatureInfoText";
import { LocatorText } from "./secondary/LocatorText";
import { GazetteerText } from "./secondary/GazetteerText";
import { OverlayTourProvider } from "../helper-overlay/components/OverlayTourProvider";


export const elements: Record<string, ElementType> = {
  menu: {
    key: "MENULEISTE",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menüleiste</div>,
  },
  layerWrapper: {
    key: "LAYERBUTTONS",
    containerPos: "center",
    contentPos: "center",
    content: <div>Layer Buttons</div>,
  },
  hintergrund: {
    key: "HINTERGRUND",
    content: <div>Hintergrund</div>,
    containerPos: "center",
    contentPos: "center",
  },
  modalMenu: {
    key: "MENU",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menü</div>,
  },
  zoomControl: {
    key: "ZOOM",
    content: <div>Zoom</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  fullScreenControl: {
    key: "VOLLBILD",
    content: (
      <div>
        <b>Vollbildmodus</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "99px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <FullScreenModeText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  navigatorControl: {
    key: "MEINE_POSITION",
    content: <div><b>Mein Standort</b></div>,
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "100px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <LocatorText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },

  },
  mapModeToggleControl: {
    key: "2D_3D_TOGGLE",
    content: <div>Wechsel von 2D- und 3D-Ansicht</div>,
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "234px",
  },
  alignNorthControl: {
    key: "EINNORDEN",
    content: <div>Nach Norden ausrichten</div>,
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "172px",
  },
  featureInfoControl: {
    key: "SACHDATENABFRAGE",
    content: <div><b>Modus Sachdatenabfrage</b></div>,
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "181px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <FeatureInfoText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  homeControl: {
    key: "RATHAUS",
    content: (
      <div>
        <b>Zum Ausgangspunkt</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "149px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <HomeText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  measurementControl: {
    key: "MESSUNGEN",
    content: (
      <div>
        <b>Modus Strecke/Fläche messen</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "214px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <MeasurementsText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  gazetteerControl: {
    key: "GAZETTEER_SUCHE",
    content: <div><b>In Karte positionieren</b></div>,
    containerPos: "center",
    contentPos: "center",
    secondary: {
      content: (
        <OverlayTourProvider>
          <GazetteerText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  infoboxControl: {
    key: "INFOBOX",
    content: (
      <div>
        <b>Info-Box</b>
      </div>
    ),
    position: {
      bottom: 0,
      right: 10,
    },
    secondary: {
      content: (
        <OverlayTourProvider>
          <InfoboxText />
        </OverlayTourProvider>
      ),
      secondaryPos: "left",
    },
  },
};
