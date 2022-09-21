const defaultProps = {
  width: 50,
  height: 6,
  fill: "#302D34",
};

function SvgSlide({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height}>
      <rect width={35} height={6} rx={3} fill={fill} />
      <rect x={44} width={6} height={6} rx={3} fill={fill} />
    </svg>
  );
}

SvgSlide.defaultProps = defaultProps;

export default SvgSlide;
