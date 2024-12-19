import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

function ChatSection() {
  return (
    <div className="h-full pt-10 pb-5">
      <div className="h-full overflow-y-auto space-y-12">
        <UserMessage />
        <AIMessage />
        <UserMessage />
        <AIMessage />
        <UserMessage />
        <AIMessage />
      </div>
    </div>
  );
}

export default ChatSection;
