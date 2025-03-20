import "./map-interactions.css";
import MouseLeft from "./assets/MouseTouchPics/MouseLeft.png";
import MouseCenter from "./assets/MouseTouchPics/MouseCenter.png";
import TouchPanning from "./assets/MouseTouchPics/TouchPanning.png";
import TouchRotate from "./assets/MouseTouchPics/TouchRotate.png";
import TouchTilt from "./assets/MouseTouchPics/TouchTilt.png";
import TouchZoom from "./assets/MouseTouchPics/TouchZoom.png";
import { Link } from "../../helper-overlay/components/Link";

export const MapInteractionsUI = () => {
  return (
    <div>
      <table>
        <tr>
          <td colSpan={2}>
            <strong>Maus / Tastatur </strong>
          </td>
        </tr>
        <tr>
          <td>
            <img src={MouseLeft} style={{ height: "30px" }} />
          </td>
          <td>Ausschnitt verschieben</td>
        </tr>
        <tr>
          <td>
            <img src={MouseCenter} style={{ height: "30px" }} />
          </td>
          <td>Zoom in / Zoom out</td>
        </tr>
        <tr>
          <td>
            <img src={MouseLeft} style={{ height: "30px" }} />
          </td>
          <td>
            <strong>+[Strg]</strong> 3D-Ansicht drehen und kippen
          </td>
        </tr>
        <tr>
          <td colSpan={2}>&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <strong>Touchscreen</strong>
          </td>
        </tr>
        <tr>
          <td>
            <img src={TouchPanning} style={{ height: "40px" }} />
          </td>
          <td>Ausschnitt verschieben</td>
        </tr>
        <tr>
          <td>
            <img src={TouchRotate} style={{ height: "40px" }} />
          </td>
          <td>Zoom in / Zoom out (Pinch-Geste)</td>
        </tr>
        <tr>
          <td>
            <img src={TouchTilt} style={{ height: "40px" }} />
          </td>
          <td>3D-Ansicht kippen</td>
        </tr>
        <tr>
          <td>
            <img src={TouchZoom} style={{ height: "40px" }} />
          </td>
          <td>3D-Ansicht drehen</td>
        </tr>
        <tr>
          <td colSpan={2}>&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} style={{ textAlign: "center" }}>
            <Link section="positionieren">weitere Informationen</Link>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
};
