const defaultProps = {
  width: 40,
  height: 40,
  fill: "#FFF",
};

function SvgAwards({ width, height, fill }: typeof defaultProps) {
  return (
    <svg width={width} height={height}>
      <rect width={40} height={40} rx={10} fill="#62BBCB" />
      <path
        d="M16.649 23.776a.133.133 0 0 1 .002.187l-.187.192a.136.136 0 0 1-.192.002c-.19-.19-.37-.385-.543-.585a2.142 2.142 0 0 1-1.375.338c-.565-.05-1.028-.284-1.457-.736a.267.267 0 0 1 .036-.4c.502-.368 1.001-.516 1.564-.466.114.01.222.03.328.055a8 8 0 0 1-.441-.79 2.124 2.124 0 0 1-1.301-.227c-.505-.265-.843-.66-1.065-1.24a.267.267 0 0 1 .187-.356c.605-.146 1.12-.093 1.624.17l.005.003a5.462 5.462 0 0 1-.082-.747 2.144 2.144 0 0 1-1.24-.74c-.365-.435-.527-.928-.511-1.55a.27.27 0 0 1 .309-.258c.615.095 1.071.342 1.435.777.054.064.102.13.147.197.064-.294.15-.58.257-.857a2.145 2.145 0 0 1-.863-1.16c-.169-.542-.13-1.06.124-1.628a.267.267 0 0 1 .384-.12c.532.324.858.727 1.027 1.269.03.096.051.191.068.287.146-.2.306-.39.478-.57a2.129 2.129 0 0 1-.29-1.293c.054-.568.288-1.03.737-1.456a.27.27 0 0 1 .4.036c.369.504.517 1 .467 1.564-.03.343-.129.645-.302.925a.27.27 0 0 1-.047.057c-.17.135-.31.26-.432.38l-.01.01c-1.055 1.023-1.612 2.373-1.612 3.903 0 .527.089 1.064.264 1.597l.005.007c.063.197.142.404.235.614.39.872 1.05 1.795 1.867 2.61Zm10.328-3.89a.268.268 0 0 0-.174-.136c-.606-.146-1.12-.093-1.624.17l-.006.003a5.46 5.46 0 0 0 .083-.747 2.144 2.144 0 0 0 1.24-.74c.364-.435.526-.928.51-1.55a.27.27 0 0 0-.308-.258c-.616.095-1.071.342-1.436.777-.053.064-.101.13-.146.197a5.968 5.968 0 0 0-.257-.857c.435-.305.712-.678.863-1.161.168-.541.129-1.059-.125-1.627a.267.267 0 0 0-.384-.12c-.532.324-.858.727-1.026 1.269-.03.096-.051.191-.068.286-.147-.199-.306-.389-.479-.57.236-.408.331-.832.29-1.292-.053-.568-.288-1.03-.736-1.457a.269.269 0 0 0-.401.036c-.368.505-.516 1.002-.466 1.565.03.343.128.645.302.925a.27.27 0 0 0 .047.057c.17.135.309.259.431.38l.01.01c1.055 1.023 1.613 2.373 1.613 3.903 0 .527-.09 1.064-.265 1.597l-.004.007a6.302 6.302 0 0 1-.235.614c-.39.872-1.051 1.795-1.867 2.61a.133.133 0 0 0-.002.186l.187.192c.052.054.139.055.192.002.19-.19.37-.385.543-.585a2.143 2.143 0 0 0 1.375.338c.564-.05 1.027-.284 1.457-.736a.268.268 0 0 0-.036-.4c-.503-.368-1.002-.516-1.565-.466-.113.01-.221.03-.327.055.167-.264.314-.528.441-.79a2.125 2.125 0 0 0 1.301-.227c.505-.265.843-.66 1.065-1.24a.268.268 0 0 0-.013-.22Zm-5.429 2.04c.38-.37.701-.784.953-1.225a5.602 5.602 0 0 0 .755-2.815 5.59 5.59 0 0 0-.468-2.25.268.268 0 0 0-.245-.162h-6.078a.268.268 0 0 0-.246.161 5.59 5.59 0 0 0-.467 2.251 5.6 5.6 0 0 0 .753 2.813 5.62 5.62 0 0 0 1.927 1.982v.03c0 .748-.167 1.477-.48 2.145h3.103a5.053 5.053 0 0 1-.48-2.146v-.03c.35-.213.675-.465.973-.754Zm-.168 3.466h-3.752a.805.805 0 0 0-.804.804v.536c0 .148.12.268.268.268h4.824c.148 0 .268-.12.268-.268v-.536a.805.805 0 0 0-.804-.804Z"
        fill={fill}
      />
    </svg>
  );
}

SvgAwards.defaultProps = defaultProps;

export default SvgAwards;