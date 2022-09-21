const defaultProps = {
  width: 18,
  height: 20,
  fill: "#302D34",
};

function SvgHome({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height}>
      <path
        d="M16.98 6.017 10.987.763a2.996 2.996 0 0 0-3.995 0L.999 6.017A2.996 2.996 0 0 0 0 8.274v8.73A2.997 2.997 0 0 0 2.997 20h11.985a2.997 2.997 0 0 0 2.997-2.996v-8.74a2.999 2.999 0 0 0-1-2.247Zm-5.993 11.985H6.992v-4.994a.999.999 0 0 1 .999-.998h1.997a.999.999 0 0 1 .999.998v4.994Zm4.994-.998a.999.999 0 0 1-.999.998h-1.997v-4.994a2.996 2.996 0 0 0-2.997-2.996H7.991a2.996 2.996 0 0 0-2.997 2.996v4.994H2.997a.998.998 0 0 1-1-.998v-8.74a.999.999 0 0 1 .34-.75L8.33 2.272a.999.999 0 0 1 1.319 0l5.992 5.244a1 1 0 0 1 .34.749v8.74Z"
        fill={fill}
      />
    </svg>
  );
}

SvgHome.defaultProps = defaultProps;

export default SvgHome;
