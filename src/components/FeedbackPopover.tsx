import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function FeedbackPopover() {
  return (
    <div className="absolute right-4 bottom-4">
      <Popover>
        {() => (
          <>
            {/* Popover Trigger */}
            <PopoverButton className="flex items-center border border-gray-300 py-1 px-3 justify-center bg-gray-50 rounded-full hover:bg-gray-200 focus:outline-none">
              ?
            </PopoverButton>

            {/* Popover Panel */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute z-10 w-48 -top-[310%] left-auto right-0 mb-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-2">
                  {/* Option 1 */}
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Help & FAQ
                  </button>
                  {/* Option 2 */}
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Release Notes
                  </button>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
