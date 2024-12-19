import { cn } from "../utils/utils";

function Icon({
  containerClassName,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "p-2 cursor-pointer rounded-full hover:bg-secondary/25 hover:scale-110 active:scale-95 transition",
        containerClassName
      )}
    >
      <img {...rest} />
    </div>
  );
}

export default Icon;
