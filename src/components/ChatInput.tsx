import TextareaAutosize from "react-textarea-autosize";
import Icon from "./Icon";
import { useRef, useState } from "react";
import EnhanceModal from "./EnhanceModal";

function Input({onSubmit} : {onSubmit : (message : string) => void}) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [openEnhanceModal, setOpenEnhanceModal] = useState(false);

  const handleInputChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleSubmit = () => {
    onSubmit(input);
    setInput("");
    inputRef.current?.focus();
  }

  const handleEnhance = (val = false) => {
    setOpenEnhanceModal(val);
  }

  const handleReplace = (enhancedText : string) => {
    setInput(enhancedText);
    inputRef.current?.focus();
  }

  return (
    <section className="sticky bottom-2 w-[98.5%] mx-auto">
      <TextareaAutosize
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        placeholder="Message Here!"
        autoCorrect="false"
        autoComplete="false"
        className="bg-[#F7F8FA] focus:bg-white font-bold resize-none w-full min-h-[103px] p-6 pe-24 pb-3 rounded-[10px] border border-[#CACACA] text-lg focus-visible:outline-none focus-visible:border-[#444F74] transition"
      />
      <p className="text-[12px] text-center text-slate-500 mb-4">
        MATGPT can make mistakes. Check important info.
      </p>
      <Icon
        onClick={handleSubmit}
        containerClassName="absolute right-5 bottom-[30%]"
        src="/send-message.svg"
        alt="send message"
        title="Submit"
      />
      {input.length > 5 && <Icon
        onClick={() => handleEnhance(true)}
        containerClassName="absolute right-16 bottom-[30%]"
        src="/enhance-message.svg"
        alt="enhance message"
        title="Enhance"
      />}
      <EnhanceModal open={openEnhanceModal} onClose={handleEnhance} input={input} onReplace={handleReplace}/>
    </section>
  );
}

export default Input;

