import TextareaAutosize from "react-textarea-autosize";
import Icon from "./Icon";

function Input() {
  return (
    <>
      <TextareaAutosize
        placeholder="Message here"
        autoCorrect="false"
        autoComplete="false"
        className="resize-none w-full min-h-[75px] px-5 pt-6 rounded-3xl border border-[#CBD5E1] text-base"
      />
      <p className="text-[12px] text-center text-slate-500">
        This is your public display name. It can be your real name or a
        pseudonym. You can only change this once every 30 days.
      </p>
      <Icon containerClassName="absolute right-5 top-4" src="/send-message.svg" alt="send message"/>
    </>
  );
}

export default Input;
