import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowPointer,
  faMagnifyingGlassPlus,
  faUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./map-interactions.css";

interface MapInteractionProps {
  icon: IconProp;
  action: string;
  description: string;
}

const MapInteraction = ({ icon, action, description }: MapInteractionProps) => (
  <div className="map-interaction">
    <div className="map-interaction-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="map-interaction-text">
      <p className="map-interaction-action">{action}</p>
      <p className="map-interaction-description">{description}</p>
    </div>
  </div>
);

export const MapInteractionsUI = () => {
  return (
    <div>
      <h2 className="map-interactions-title">Karteninteraktionen</h2>

      <MapInteraction
        icon={faUpDownLeftRight}
        action="Linksklick + Ziehen"
        description="Karte verschieben"
      />

      <MapInteraction
        icon={faArrowPointer}
        action="Einfacher Klick"
        description="Punkt auswählen"
      />

      <MapInteraction
        icon={faMagnifyingGlassPlus}
        action="Scrollrad"
        description="In die Karte hinein- oder herauszoomen"
      />
    </div>
  );
};
