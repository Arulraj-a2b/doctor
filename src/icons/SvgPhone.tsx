const defaultProps = {
  width: 21,
  height: 20,
  fill: "#000",
};

function SvgPhone({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none">
      <path
        d="M4.816 2.222c.067.99.233 1.956.5 2.878L3.983 6.433a16.473 16.473 0 0 1-.845-4.21h1.678Zm10.956 13.356c.944.266 1.91.433 2.888.5v1.655a17.143 17.143 0 0 1-4.222-.833l1.334-1.322ZM5.882 0H1.995C1.383 0 .883.5.883 1.111.883 11.544 9.338 20 19.772 20c.61 0 1.11-.5 1.11-1.111V15.01c0-.611-.5-1.111-1.11-1.111-1.378 0-2.723-.222-3.967-.633a.932.932 0 0 0-.345-.056c-.288 0-.566.111-.788.322l-2.445 2.445a16.832 16.832 0 0 1-7.322-7.322L7.349 6.21c.312-.311.4-.744.278-1.133a12.622 12.622 0 0 1-.633-3.967C6.994.5 6.494 0 5.883 0Z"
        fill={fill}
      />
    </svg>
  );
}

SvgPhone.defaultProps = defaultProps;

export default SvgPhone;
