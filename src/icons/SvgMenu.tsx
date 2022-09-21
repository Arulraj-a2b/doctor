const defaultProps = {
  width: 26,
  height: 20,
  fill: "#000",
};

function SvgMenu({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none">
      <path
        d="M1.177 9.412h7.059a1.176 1.176 0 0 0 1.176-1.177V1.176A1.176 1.176 0 0 0 8.236 0h-7.06A1.176 1.176 0 0 0 0 1.176v7.06a1.176 1.176 0 0 0 1.177 1.176Zm1.176-7.06H7.06V7.06H2.353V2.353ZM24.706 3.53H12.942a1.176 1.176 0 1 0 0 2.353h11.764a1.177 1.177 0 0 0 0-2.353Zm0 11.765H12.942a1.177 1.177 0 0 0 0 2.353h11.764a1.177 1.177 0 0 0 0-2.353ZM3.462 20h.014c.308-.001.604-.123.823-.34l4.76-4.706a1.177 1.177 0 1 0-1.647-1.673l-3.916 3.87-1.473-1.53A1.176 1.176 0 1 0 .33 17.258l2.299 2.39a1.178 1.178 0 0 0 .832.352Z"
        fill={fill}
      />
    </svg>
  );
}

SvgMenu.defaultProps = defaultProps;

export default SvgMenu;
