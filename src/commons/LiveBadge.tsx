interface LiveBadgeProps {
  isLive?: boolean;
}

const LiveBadge = ({ isLive = true }: LiveBadgeProps) => {
  return (
    <span
      style={{
        background: isLive ? "#ff1a1a" : "#9e9e9e",
        color: "white",
        padding: "0px 4px",
        borderRadius: "2px",
        fontSize: "9px",
        fontWeight: "bold",
        boxShadow: "0 0 2px rgba(0,0,0,0.3)",
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "1.2",
        position: "relative",
        top: "-1px",
        overflow: "hidden",
      }}
    >
      LIVE
      {!isLive && (
        <span
          style={{
            position: "absolute",
            left: "-10%",
            top: "calc(50% - 1px)",
            width: "120%",
            height: "1.5px",
            background: "#fff",
            transform: "rotate(-20deg)",
          }}
        />
      )}
    </span>
  );
};

export default LiveBadge;
