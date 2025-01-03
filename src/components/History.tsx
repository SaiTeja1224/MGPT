import { useState } from "react";
import CloseButton from "./CloseButton";
import HistoryItem from "./HistoryItem";
import Brand from "./Branch";
import Avatar from "./Avatar";

function History({ onOpen }: { onOpen: (val: boolean) => void }) {
  const [openOption, setOpenOption] = useState("");

  const handleOpenOption = (val: string) => {
    if (openOption !== val) {
      setOpenOption(val);
    } else {
      setOpenOption("");
    }
  };

  return (
    <aside id="side-bar" className="h-full w-[20%] px-2">
      <header className="sticky top-0 w-full flex justify-between py-5 px-3 mb-4">
        <div className="w-full flex justify-between">
          <Brand />
          <CloseButton onClick={() => onOpen(false)} />
        </div>
      </header>
      <button className="text-[#444F74] flex gap-2 items-center justify-center font-semibold bg-white w-full border border-gray-300 py-3 px-4 mb-7 rounded-3xl">
        <img src="/add-btn.svg" /> New Chat
      </button>
      <div className="mb-3">
        <h3 className="text-[#AFB5C3] font-bold mb-1">Folders</h3>
        <div className="flex gap-3 p-3 px-4 text-[#444F74] cursor-pointer hover:text-black hover:bg-secondary rounded-lg">
          <img src="/folder-icon.svg" />{" "}
          <p className="font-semibold">Folder Saved</p>{" "}
        </div>
      </div>
      <div className="side-bar-scroll h-[70%] overflow-y-auto pt-5 pe-2">
        <div>
          <HistoryItem
            isActive
            id="1"
            openOption={openOption}
            onOption={handleOpenOption}
          />
          <h3 className="font-bold mt-10">Yesterday</h3>
          <HistoryItem
            id="3"
            openOption={openOption}
            onOption={handleOpenOption}
          />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <h3 className="font-bold mt-10">Last 30 Days</h3>
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <h3 className="font-bold mt-10">Last Month</h3>
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <h3 className="font-bold mt-10">Last 3 Months</h3>
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
          <HistoryItem openOption={openOption} onOption={handleOpenOption} />
        </div>
      </div>
      <div className="side-bg flex items-center gap-1 sticky bottom-0 mt-8">
        <Avatar width={32} height={32} />
        <p className="font-bold text-lg">Bharath Nallamothu</p>
      </div>
    </aside>
  );
}

export default History;
