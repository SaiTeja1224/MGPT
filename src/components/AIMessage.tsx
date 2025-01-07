function AIMessage({ onCitation }: { onCitation: (val?: boolean) => void }) {
  return (
    <div className="px-7 py-6 border border-gray-400 rounded-[20px] gap-24 mx-3 text-[#0B2661] mb-20 text-lg">
      <div className="flex items-center gap-4 text-xl py-3">
        <img src="/mgpt-icon.svg" alt="m-gpt" />{" "}
        <p className="text-black font-bold">MATGPT</p>
        <div className="border-l-2 border-gray-300 self-stretch my-1"></div>
        <p className="text-gray-500">2:40pm</p>
      </div>
      <p className="whitespace-pre-line pt-3 pb-5">
        Motion design is more than just making graphics move. It's about
        creating a story, engaging your audience, and enhancing user experience.
        Whether you're a seasoned designer or a newbie, understanding the core
        principles of motion design can elevate your work to new heights. <br />
        <br />
        Motion design is more than just making graphics move. It's about
        creating a story, engaging your audience, and enhancing user experience.
        Whether you're a seasoned designer or a newbie, understanding the core
        principles of motion design can elevate your work to new heights. <br />
        <br />
        Motion design is more than just making graphics move. It's about
        creating a story, engaging your audience, and enhancing user experience.
        Whether you're a seasoned designer or a newbie, understanding the core
        principles of motion design can elevate your work to new heights.
      </p>
      <button
        onClick={() => {
          onCitation();
        }}
        className="bg-gray-50 border hover-effect border-gray-300 rounded-md px-3 py-1 mb-4 font-semibold"
      >
        Source
      </button>
      <div className="flex gap-5 pt-5 border-t border-secondary">
        <img src="/speak-out-icon.svg" alt="" className="hover-effect cursor-pointer"/>
        <img src="/copy-icon.svg" alt="" className="hover-effect cursor-pointer"/>
      </div>
    </div>
  );
}

export default AIMessage;
