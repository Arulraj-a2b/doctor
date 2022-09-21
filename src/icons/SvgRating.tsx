const defaultProps = {
  width: 40,
  height: 40,
  fill: "#fff",
};

function SvgRating({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none">
      <rect width={40} height={40} rx={10} fill="#62BBCB" />
      <path
        d="m20.497 14.296 1.425 2.771c.04.077.099.144.171.195.073.05.157.083.246.095l3.188.445a.564.564 0 0 1 .276.12.51.51 0 0 1 .03.786l-2.307 2.156a.518.518 0 0 0-.16.47l.545 3.046a.51.51 0 0 1-.033.29.534.534 0 0 1-.187.229.567.567 0 0 1-.582.04L20.257 23.5a.572.572 0 0 0-.514 0l-2.852 1.44a.572.572 0 0 1-.582-.041.534.534 0 0 1-.187-.23.51.51 0 0 1-.033-.289l.544-3.046a.508.508 0 0 0-.159-.47l-2.307-2.157a.51.51 0 0 1 .03-.786.564.564 0 0 1 .276-.12l3.188-.444a.565.565 0 0 0 .246-.095.537.537 0 0 0 .17-.195l1.426-2.771c.205-.394.79-.394.994 0Z"
        fill={fill}
      />
    </svg>
  );
}

SvgRating.defaultProps = defaultProps;

export default SvgRating;
