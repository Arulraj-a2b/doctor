const defaultProps = {
  width: 30,
  height: 30,
};

function SvgEllipse({ width, height }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 35 35">
      <path
        d="M35 17.5C35 27.165 27.165 35 17.5 35S0 27.165 0 17.5 7.835 0 17.5 0 35 7.835 35 17.5Zm-27.98 0c0 5.788 4.692 10.48 10.48 10.48s10.48-4.692 10.48-10.48S23.289 7.02 17.5 7.02 7.02 11.711 7.02 17.5Z"
        fill="#F3E349"
      />
      <path
        d="M31.4 17.5c.883 0 1.609.718 1.517 1.598a15.5 15.5 0 1 1-7.095-14.674c.746.474.859 1.489.31 2.182-.55.693-1.552.799-2.31.345a12.299 12.299 0 1 0 5.873 12.145c.115-.876.82-1.596 1.704-1.596Z"
        fill="#62BBCB"
      />
    </svg>
  );
}

SvgEllipse.defaultProps = defaultProps;

export default SvgEllipse;
