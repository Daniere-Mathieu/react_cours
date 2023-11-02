function Loading({
  size = "40px",
  borderSize = "4px",
}: {
  size?: string;
  borderSize?: string;
}) {
  const loaderStyle = {
    width: size,
    height: size,
    borderWidth: borderSize,
    borderTopWidth: borderSize,
  };
  return <div className="loader" style={loaderStyle}></div>;
}
export default Loading;
