const defaultProps = {
  width: 40,
  height: 40,
  fill: "#fff",
};

function SvgPatients({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height} fill="none">
      <rect width={40} height={40} rx={10} fill="#62BBCB" />
      <path
        d="M18.655 21.452c.9-.063 1.804-.063 2.704 0 .49.025.977.08 1.46.162 1.043.186 1.725.49 2.017.979.219.381.219.836 0 1.218-.292.49-.947.812-2.028.979-.482.085-.97.14-1.46.166-.454.044-.908.044-1.368.044h-.827c-.173-.02-.34-.03-.503-.03-.49-.022-.978-.075-1.46-.16-1.044-.177-1.725-.49-2.017-.98a1.213 1.213 0 0 1-.005-1.237c.286-.49.968-.808 2.022-.98a12.06 12.06 0 0 1 1.465-.16ZM20.002 14c1.812 0 3.282 1.33 3.282 2.97 0 1.64-1.47 2.97-3.282 2.97-1.813 0-3.282-1.33-3.282-2.97 0-1.64 1.469-2.97 3.282-2.97Z"
        fill={fill}
      />
    </svg>
  );
}

SvgPatients.defaultProps = defaultProps;

export default SvgPatients;
