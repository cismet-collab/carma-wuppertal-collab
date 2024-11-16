import type { ElementType } from "../helper-overlay/helperTypes";
import { MeasurementsText } from "./secondary/MeasurementsText";
import { InfoboxText } from "./secondary/InfoboxText";
import { FullScreenModeText } from "./secondary/FullScreenModeText";
import { HomeText } from "./secondary/HomeText";
import { FeatureInfoText } from "./secondary/FeatureInfoText";
import { LocatorText } from "./secondary/LocatorText";
import { GazetteerText } from "./secondary/GazetteerText";
import { ZoomText } from "./secondary/ZoomText";
import { NorthOrientationText } from "./secondary/NorthOrientationText";
import { Toggle2d3dText } from "./secondary/Toggle2d3dText";
import { LayerButtonsText } from "./secondary/LayerButtonsText";
import { ApplicationMenuText } from "./secondary/ApplicationMenuText";
import { HelpOverlayText } from "./secondary/HelpOverlayText";
import { OverlayTourProvider } from "../helper-overlay/components/OverlayTourProvider";

export const elements: Record<string, ElementType> = {
  menu: {
    key: "MENULEISTE",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menüleiste</div>,
  },
  helpOverlay: {
    key: "HILFE_OVERLAY",
    containerPos: "center",
    contentPos: "center",
    contentWidth: "145px",
    content: (
      <div style={{ textAlign: "center" }}>
        <b>
          Hilfefolie
          <br />
          überlagern
        </b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <HelpOverlayText />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
  },
  layerWrapper: {
    key: "LAYERBUTTONS",
    position: {
      top: 69,
      right: "calc(50% - 73px)",
    },
    content: (
      <div>
        <b>Kartensteuerelemente</b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <LayerButtonsText />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
  },
  hintergrund: {
    key: "HINTERGRUND",
    content: (
      <div style={{ textAlign: "center" }}>
        Hintergrund-
        <br />
        karte
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
  },
  modalMenu: {
    key: "MENU",
    containerPos: "center",
    contentPos: "right-center",
    content: (
      <div style={{ textAlign: "center" }}>
        <b>
          Anwendungs-
          <br />
          menü
        </b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <ApplicationMenuText />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
  },
  zoomControl: {
    key: "ZOOM",
    content: (
      <div>
        <b>
          Zoom in/
          <br />
          Zoom out
        </b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "70px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <ZoomText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
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
    content: (
      <div>
        <b>Mein Standort</b>
      </div>
    ),
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
    content: (
      <div>
        <b>Wechsel von 2D- und 3D-Ansicht</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "234px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <Toggle2d3dText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  alignNorthControl: {
    key: "EINNORDEN",
    content: (
      <div>
        <b>Nach Norden ausrichten</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "170px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <NorthOrientationText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  featureInfoControl: {
    key: "SACHDATENABFRAGE",
    content: (
      <div>
        <b>Modus Sachdatenabfrage</b>
      </div>
    ),
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
    content: (
      <div>
        <b>In Karte positionieren</b>
      </div>
    ),
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
