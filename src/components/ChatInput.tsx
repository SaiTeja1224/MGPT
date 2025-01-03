import TextareaAutosize from "react-textarea-autosize";
import Icon from "./Icon";

function Input() {
  return (
    <>
      <TextareaAutosize
        placeholder="Message Here!"
        autoCorrect="false"
        autoComplete="false"
        className="bg-[#F7F8FA] focus:bg-white font-bold resize-none w-full min-h-[103px] p-6 pb-3 rounded-[10px] border border-[#CACACA] text-lg focus-visible:outline-none focus-visible:border-[#444F74] transition"
      />
      <p className="text-[12px] text-center text-slate-500 mb-4">
        M GPT can make mistakes. Check important info.
      </p>
      <Icon
        containerClassName="absolute right-5 bottom-[35%]"
        src="/send-message.svg"
        alt="send message"
      />
    </>
  );
}

export default Input;
