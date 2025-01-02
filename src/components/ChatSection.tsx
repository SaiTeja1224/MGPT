import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import ChatInput from "./ChatInput";

function ChatSection() {
  return (
    <div className="h-full pt-10 pb-5">
      <div className="h-full overflow-y-auto space-y-12 mb-4">
        <UserMessage />
        <AIMessage />
        <UserMessage />
        <AIMessage />
        <UserMessage />
        <AIMessage />
      </div>
        <section className="sticky bottom-0 w-[80%] mx-auto">
          <ChatInput />
        </section>
    </div>
  );
}

export default ChatSection;
