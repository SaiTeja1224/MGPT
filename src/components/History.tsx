import HistoryItem from "./HistoryItem";
import Icon from "./Icon";

function History({ onOpen }: { onOpen: (val: boolean) => void }) {
  return (
    <aside id="side-bar" className="h-full w-[20%] bg-white px-2">
      <header className="sticky top-0 w-full flex justify-between py-5 px-3">
        <div className="flex gap-3">
          <Icon
            src="/side-bar.svg"
            alt=""
            width={46}
            height={46}
            onClick={() => onOpen(false)}
          />
          <Icon src="/new-chat.svg" alt="" width={46} height={46} />
        </div>
      </header>
      <div className="side-bar-scroll h-[75%] overflow-y-auto px-3">
        <div className="space-y-3">
          <HistoryItem isActive />
          <h3 className="font-bold">Yesterday</h3>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <h3 className="font-bold">Last 30 Days</h3>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <h3 className="font-bold">Last Month</h3>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <h3 className="font-bold">Last 3 Months</h3>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
      </div>
    </aside>
  );
}

export default History;
