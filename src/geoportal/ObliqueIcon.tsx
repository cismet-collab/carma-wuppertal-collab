import { faImages, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ObliqueIconProps {
  size?: "small" | "default";
}

const ObliqueIcon = ({ size = "default" }: ObliqueIconProps) => {
  const isSmall = size === "small";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: isSmall ? "4px" : "8px",
        padding: isSmall ? "2px 8px" : "4px 15px",
        border: "1px solid #d9d9d9",
        borderRadius: isSmall ? "4px" : "6px",
        backgroundColor: "#ffffff",
        fontSize: isSmall ? "11px" : "14px",
        height: isSmall ? "20px" : "32px",
      }}
    >
      <FontAwesomeIcon icon={faPlane} rotation={270} />
      <FontAwesomeIcon icon={faImages} />
    </div>
  );
};

export default ObliqueIcon;
