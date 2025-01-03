import Icon from "./Icon";

function Avatar({
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
}) {
  return <Icon {...rest} src="/image.png" alt="logged-in-user" />;
}

export default Avatar;
