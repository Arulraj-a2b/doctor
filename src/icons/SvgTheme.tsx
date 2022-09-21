const defaultProps = {
  width: 74,
  height: 74,
};

function SvgTheme({ width, height }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill='none'>
      <g filter="url(#Theme_svg__a)">
        <circle cx={37} cy={37} r={27} fill="#F3E349" />
      </g>
      <path
        d="M27 37c0 5.52 4.48 10 10 10 5.456-.005 10-4.8 10-9.6-1.6.8-6.4 2.4-9.6-.8-3.2-3.2-1.6-8-.8-9.6-4.8 0-9.6 4.544-9.6 10Z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="Theme_svg__a"
          x={0}
          y={0}
          width={74}
          height={74}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_13" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_6_13"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

SvgTheme.defaultProps = defaultProps;

export default SvgTheme;
