const LiveBadge = () => {
  return (
    <span
      style={{
        background: "#ff1a1a",
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
      }}
    >
      LIVE
    </span>
  );
};

export default LiveBadge;
