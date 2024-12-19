import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Hero from "./components/Hero";
import ChatInput from "./components/ChatInput";
import ChatSection from "./components/ChatSection";
import Icon from "./components/Icon";
import { cn } from "./utils/utils";
import History from "./components/History";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = (val: boolean) => {
    setOpen(val);
  };
  const [chatId, setChatId] = useState("home");
  useEffect(() => {
    setChatId(window.location.hash.slice(1));
    const handleHashChange = () => {
      setChatId(window.location.hash.slice(1)); // Update state when hash changes
    };

    // Attach the hashchange event listener
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="h-full flex">
      {open && <History onOpen={handleOpen} />}
      <article className="w-full h-full">
        <nav className="sticky top-0 w-full flex items-center justify-between py-5 px-10">
          {!open ? (
            <div className="flex gap-3">
              <Icon
                src="/side-bar.svg"
                alt=""
                width={46}
                height={46}
                onClick={() => handleOpen(!open)}
              />
              <Icon src="/new-chat.svg" alt="" width={46} height={46} />
            </div>
          ) : (
            <div></div>
          )}
          <h1
            className="text-3xl font-bold cursor-pointer active:scale-95"
            onClick={() => {
              window.location.hash = "home";
            }}
          >
            MGPT
          </h1>
          <Avatar />
        </nav>
        <section
          className={cn("h-[78%] w-[70%] mx-auto", {
            "w-[80%]": open,
          })}
        >
          {chatId === "home" || !chatId ? <Hero /> : <ChatSection />}
        </section>
        <section className="relative w-[60%] mx-auto">
          <ChatInput />
        </section>
      </article>
    </main>
  );
}

export default App;
