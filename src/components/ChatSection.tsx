import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import ChatInput from "./ChatInput";

function ChatSection({ onCitation }: { onCitation: (val?: boolean) => void }) {
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
        <section className="sticky bottom-2 w-[98.5%] mx-auto">
          <ChatInput />
        </section>
      </div>
    </>
  );
}

export default ChatSection;
