const defaultProps = {
  width: 78,
  height: 54,
  className:''
};

function SvgSearch({ width, height,className }: typeof defaultProps) {
  return (
    <svg width={width} height={height} className={className}>
      <g filter="url(#search_svg__a)">
        <rect x={10} y={10} width={58} height={34} rx={8} fill="#F3E349" />
      </g>
      <path
        d="m48.671 35.094-3.776-3.765a8.797 8.797 0 0 0 1.877-5.443 8.886 8.886 0 1 0-8.886 8.886 8.797 8.797 0 0 0 5.443-1.877l3.765 3.776a1.11 1.11 0 0 0 1.577 0 1.11 1.11 0 0 0 0-1.577Zm-17.45-9.208a6.665 6.665 0 1 1 13.33 0 6.665 6.665 0 0 1-13.33 0Z"
        fill="#302D34"
      />
      <defs>
        <filter
          id="search_svg__a"
          x={0}
          y={0}
          width={78}
          height={54}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_3" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_6_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

SvgSearch.defaultProps = defaultProps;

export default SvgSearch;
