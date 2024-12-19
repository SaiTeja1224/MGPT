function Hero() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-5xl font-bold">Anything I can do for you Today?</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Prompt text={"Write a Short Note on Historical Models"} />
        <Prompt text={"Tell me More about How Super engine works"} />
        <Prompt text={"How to Proceed with Safety Innovations"} />
        <Prompt text={"Tell me ten points about Sustainability Initiatives"} />
      </div>
    </div>
  );
}

function Prompt({ text }: { text: string }) {
  return (
    <div
      className="max-w-60 flex items-center justify-center px-6 py-4 border-2 border-secondary rounded-md shadow-md
    cursor-pointer hover:bg-secondary active:bg-secondary hover:scale-105 active:scale-95 transition"
    >
      <p className="font-[500] text-lg text-center">{`"${text}"`}</p>
    </div>
  );
}

export default Hero;
