const defaultProps = {
  width: 78,
  height: 54,
  className:''
};

function SvgRightarrow({ width, height,className }: typeof defaultProps) {
  return (
    <svg width={width} height={height} className={className}>
      <g filter="url(#rightarrow_svg__a)">
        <rect x={10} y={10} width={58} height={34} rx={8} fill="#F3E349" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 26.75a1.25 1.25 0 0 1 1.25-1.25h14.48l-5.366-5.364a1.252 1.252 0 0 1 1.77-1.77l7.499 7.5a1.25 1.25 0 0 1 0 1.77l-7.5 7.499a1.251 1.251 0 1 1-1.77-1.77L44.732 28H30.25A1.25 1.25 0 0 1 29 26.75Z"
        fill="#302D34"
      />
      <defs>
        <filter
          id="rightarrow_svg__a"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_4" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_6_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

SvgRightarrow.defaultProps = defaultProps;

export default SvgRightarrow;
