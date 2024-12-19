import { cn } from "../utils/utils";

function HistoryItem({ isActive }: { isActive?: boolean }) {
  return (
    <div
      onClick={() => {
        window.location.hash = "1";
      }}
      className={cn(
        "rounded-lg p-3 text-black font-[500] cursor-pointer hover:scale-105 active:scale-95 hover:bg-secondary transition",
        {
          "bg-active text-white": isActive,
        }
      )}
    >
      <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
        Bharath Nallamothu
      </p>
      <small className={cn("text-slate-500", { "text-slate-200": isActive })}>
        2 hours ago
      </small>
    </div>
  );
}

export default HistoryItem;
