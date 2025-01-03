import { createPortal } from "react-dom";
import { cn } from "../utils/utils";
import { useEffect, useRef, useState } from "react";

function HistoryItem({
  id = "2",
  openOption,
  onOption,
  isActive,
}: {
  id?: string;
  openOption: string;
  onOption: (val: string) => void;
  isActive?: boolean;
}) {
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const itemRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover manually
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (openOption === id && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top + rect.height - (isActive ? 18 : 10) + window.scrollY, // Add vertical position
        left: rect.left + rect.width - 40 + window.scrollX, // Add horizontal position (adjusted for dropdown width)
      });
    }
  }, [openOption, isActive, id]);

  const handleOptionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOption(id);
  };

  return (
    <div
      ref={itemRef}
      onClick={() => {
        window.location.hash = "1";
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex items-center justify-between rounded-lg p-3 text-gray-500 font-[500] cursor-pointer active:scale-95 transition",
        {
          "bg-active text-white": isActive,
          "hover:text-black hover:bg-secondary": !isActive,
        }
      )}
    >
      <div>
        <p className={"whitespace-nowrap overflow-hidden text-ellipsis w-full"}>
          Bharath Nallamothu
        </p>
        {isActive && (
          <small
            className={cn("text-slate-500", { "text-slate-200": isActive })}
          >
            2 hours ago
          </small>
        )}
      </div>

      {/* Show the icon when hovered */}
      {(isHovered || isActive) && (
        <div onClick={handleOptionClick}>
          <img src="/ellipses.svg" alt="Options" />
        </div>
      )}

      {/* Options popover */}
      {openOption === id &&
        createPortal(
          <article
            style={{
              position: "absolute",
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
            }}
            className={`p-8 rounded-2xl bg-white border border-gray-300`}
          >
            <ul className="space-y-6">
              <li className="flex items-center font-semibold gap-3">
                <img src="/folder-icon.svg" /> Add to Project{" "}
                <img src="/arrow-right.svg" />
              </li>
              <li className="flex items-center text-[#DE0000] font-bold gap-3">
                <img src="/delete-icon.svg" /> Delete{" "}
              </li>
            </ul>
          </article>,
          document.body
        )}
    </div>
  );
}

export default HistoryItem;
