import { cn } from "../utils/utils";
import CitationsItem from "./CitationsItem";
import CloseButton from "./CloseButton";

function Citations({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (val: boolean) => void;
}) {
  return (
    <aside
      id="side-bar"
      className={cn(
        "h-full fixed invisible right-0 w-[20%] ps-4 pe-1 translate-x-[100%] transition",
        {
          "translate-x-0 static visible": isOpen,
        }
      )}
    >
      <header className="sticky top-0 w-full flex justify-between pt-5 pe-3">
        <div className="w-full pb-3 mb-3 border-b border-gray-300 flex gap-3 items-center justify-between">
          <h4 className="text-lg font-bold">Citations</h4>
          <CloseButton onClick={() => onClose(false)} />
        </div>
      </header>
      <ul className="side-bar-scroll h-[85%] overflow-y-auto">
        <CitationsItem />
        <CitationsItem />
        <CitationsItem />
        <CitationsItem />
      </ul>
    </aside>
  );
}

export default Citations;
