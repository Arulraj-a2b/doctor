const defaultProps = {
  width: 20,
  height: 22,
  fill: "#302D34",
};

function SvgBell({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none">
      <path
        d="M13.546 17.154v.77a3.077 3.077 0 0 1-6.154 0v-.77m11.331-1.566c-1.235-1.511-2.106-2.28-2.106-6.446 0-3.815-1.948-5.174-3.552-5.834a.856.856 0 0 1-.478-.508c-.281-.957-1.07-1.8-2.118-1.8-1.048 0-1.837.844-2.115 1.801a.848.848 0 0 1-.478.507c-1.606.66-3.552 2.015-3.552 5.834-.002 4.166-.874 4.935-2.109 6.446-.511.626-.063 1.566.832 1.566h14.85c.89 0 1.335-.943.826-1.566Z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

SvgBell.defaultProps = defaultProps;

export default SvgBell;
