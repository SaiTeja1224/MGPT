import TextareaAutosize from "react-textarea-autosize";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

function EnhanceModal({
  open,
  onClose,
  input,
  onReplace
}: {
  open: boolean;
  onClose: () => void;
  input: string;
  onReplace : (enhancedText : string) => void;
}) {
    const [enhancedText, setEnhancedText] = useState("");

    // Automatically enhance the input when the modal opens
    useEffect(() => {
      if (open) {
        enhanceInput(input);
      }
    }, [open, input]);
  
    const enhanceInput = (text : string) => {
      // Add your enhancement logic here
      const enhanced = text.toUpperCase() + " 🚀"; // Example logic
      setEnhancedText(enhanced);
    };

  return (
<Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* Background overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
              <DialogTitle className="text-lg font-medium">
                Enhanced Text
              </DialogTitle>
              <div className="mt-4">
              <TextareaAutosize
                  value={enhancedText}
                  readOnly
                  minRows={3}
                  className="w-full px-4 py-2 border rounded bg-gray-100 focus:outline-none resize-none"
                />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => onClose()}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onReplace(enhancedText);
                    onClose();
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Replace
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default EnhanceModal;
