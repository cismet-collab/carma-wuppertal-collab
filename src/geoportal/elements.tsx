import type { ElementType } from "../helper-overlay/helperTypes";
import { MeasurementsText } from "./secondary/MeasurementsText";
import { InfoboxText } from "./secondary/InfoboxText";
import { FullScreenModeText } from "./secondary/FullScreenModeText";
import { HomeText } from "./secondary/HomeText";
import { FeatureInfoText } from "./secondary/FeatureInfoText";
import { LocatorText } from "./secondary/LocatorText";
import { GazetteerText } from "./secondary/GazetteerText";
import { ZoomText } from "./secondary/ZoomText";
import { RotateAndTiltText } from "./secondary/RotateAndTiltText";
import { Toggle2d3dText } from "./secondary/Toggle2d3dText";
import { LayerButtonsText } from "./secondary/LayerButtonsText";
import { ApplicationMenuText } from "./secondary/ApplicationMenuText";
import { HelpOverlayText } from "./secondary/HelpOverlayText";
import { BackgroundSelectionText } from "./secondary/BackgroundSelectionText";
import { MenuBarText } from "./secondary/MenuBarText";
import { OverlayTourProvider } from "../helper-overlay/components/OverlayTourProvider";
import { MapInteractionsUI } from "./secondary/MapInteractions";

export const elements: Record<string, ElementType> = {
  menu: {
    key: "MENULEISTE",
    containerPos: "center",
    contentPos: "center",
    content: (
      <div>
        <b>Menüleiste</b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <MenuBarText />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
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
  centerElement: {
    key: "CENTER",
    position: {
      top: "50%",
      left: "50%",
    },
    content: (
      <div
        style={{
          border: 1,
          borderRadius: 10,
          padding: 10,
          borderStyle: "solid",
          width: "max-content",
          textAlign: "center",
        }}
      >
        <b>
          Karteninteraktion mit <br /> Maus oder Touchscreen
        </b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <MapInteractionsUI />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
  },
  hintergrund: {
    key: "HINTERGRUND",
    containerPos: "center",
    contentPos: "center",
    content: (
      <div style={{ textAlign: "center" }}>
        <b>
          Hintergrund
          <br />
          auswählen
        </b>
      </div>
    ),
    secondary: {
      content: (
        <OverlayTourProvider>
          <BackgroundSelectionText />
        </OverlayTourProvider>
      ),
      secondaryPos: "bottom",
    },
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
        <b>3D-Ansicht drehen und kippen</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "234px",
    secondary: {
      content: (
        <OverlayTourProvider>
          <RotateAndTiltText />
        </OverlayTourProvider>
      ),
      secondaryPos: "right",
    },
  },
  featureInfoControl: {
    key: "SACHDATENABFRAGE",
    content: (
      <div>
        <b>Modus Multi-Sachdatenabfrage</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "135px",
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
        <b>Zum Rathaus Barmen</b>
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
      secondaryPos: "top",
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
      secondaryPos: "top",
    },
  },
};
