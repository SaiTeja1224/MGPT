import { cn } from "../utils/utils";

function Icon({
  containerClassName,
  onClick,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-2 cursor-pointer rounded-full  hover-effect",
        containerClassName
      )}
    >
      <img {...rest} />
    </div>
  );
}

export default Icon;
//hover:bg-secondary/25
