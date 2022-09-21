const defaultProps = {
  width: 25,
  height: 20,
  fill: "#302D34",
  className: "",
};

function SvgHambar({ width, height, fill, className }: typeof defaultProps) {
  return (
    <svg width={width} height={height} className={className}>
      <path
        d="M13.813 18H23M2 2h21H2Zm0 8h21H2Z"
        stroke={fill}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

SvgHambar.defaultProps = defaultProps;

export default SvgHambar;
