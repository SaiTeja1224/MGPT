import { cn } from "../utils/utils";

function HistoryItem({ isActive }: { isActive?: boolean }) {
  return (
    <div
      onClick={() => {
        window.location.hash = "1";
      }}
      className={cn(
        "rounded-lg p-3 text-gray-500 font-[500] cursor-pointer hover:scale-105 active:scale-95 transition",
        {
          "bg-active text-white": isActive,
          "hover:text-black hover:bg-secondary": !isActive,
        }
      )}
    >
      <p className={"whitespace-nowrap overflow-hidden text-ellipsis w-full"}>
        Bharath Nallamothu
      </p>
      {isActive && <small className={cn("text-slate-500", { "text-slate-200": isActive })}>
        2 hours ago
      </small>}
    </div>
  );
}

export default HistoryItem;
