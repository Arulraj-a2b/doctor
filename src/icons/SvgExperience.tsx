const defaultProps = {
  width: 40,
  height: 40,
  fill: "#fff",
};

function SvgExperience({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height}>
      <rect width={40} height={40} rx={10} fill="#62BBCB" />
      <path
        d="M24.8 16.316h-2.4v-1.158c0-.643-.534-1.158-1.2-1.158h-2.4c-.666 0-1.2.515-1.2 1.158v1.158h-2.4c-.666 0-1.194.515-1.194 1.158L14 23.842c0 .643.534 1.158 1.2 1.158h9.6c.666 0 1.2-.515 1.2-1.158v-6.368c0-.643-.534-1.158-1.2-1.158Zm-3.6 0h-2.4v-1.158h2.4v1.158Z"
        fill={fill}
      />
    </svg>
  );
}

SvgExperience.defaultProps = defaultProps;

export default SvgExperience;
