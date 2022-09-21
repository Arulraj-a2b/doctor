const defaultProps = {
  width: 21,
  height: 20,
  fill: "#000",
};

function SvgUser({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height}>
      <path
        d="M14.52 10.71a5.997 5.997 0 1 0-7.415 0A9.994 9.994 0 0 0 .89 18.884a1.005 1.005 0 1 0 1.999.22 7.995 7.995 0 0 1 15.89 0 .999.999 0 0 0 1 .889h.11a1 1 0 0 0 .88-1.1 9.994 9.994 0 0 0-6.247-8.185ZM10.814 10a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996Z"
        fill={fill}
      />
    </svg>
  );
}

SvgUser.defaultProps = defaultProps;

export default SvgUser;
