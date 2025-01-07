import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import ChatInput from "./ChatInput";

function ChatSection({ onCitation }: { onCitation: (val?: boolean) => void }) {

  const handleMessageSubmit = (message : string) => {
    console.log(message);
  }

  return (
    <>
      <div className="h-full">
        <div className="h-full overflow-y-auto space-y-12 mb-10">
          <UserMessage />
          <AIMessage onCitation={onCitation} />
          <UserMessage />
          <AIMessage onCitation={onCitation} />
          <UserMessage />
          <AIMessage onCitation={onCitation} />
        </div>
        <ChatInput onSubmit={handleMessageSubmit}/>
      </div>
    </>
  );
}

export default ChatSection;
