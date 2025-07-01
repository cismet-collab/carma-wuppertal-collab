import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FeatureInfoIcon = () => {
  return (
    <div
      style={{
        height: "16px",
        position: "relative",
        display: "inline-block",
      }}
    >
      <FontAwesomeIcon
        icon={faSquare}
        size="2x"
        style={{
          color: "grey",
          height: "18px",
          strokeWidth: "4",
        }}
      />
      <FontAwesomeIcon
        icon={faInfo}
        size="xs"
        style={{
          color: "grey",

          position: "absolute",
          left: "0.4rem",
          top: "0.3rem",
        }}
      />
    </div>
  );
};

export default FeatureInfoIcon;
