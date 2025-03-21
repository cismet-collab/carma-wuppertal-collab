const CompassNeedle = ({
  width = 29,
  height = 29,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="#333"
    >
      <path d="m10.5 14 4-8 4 8z" />
      <path d="m10.5 16 4 8 4-8z" fill="#ccc" />
    </svg>
  );
};

export default CompassNeedle;
