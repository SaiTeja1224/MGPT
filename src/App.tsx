import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ChatSection from "./components/ChatSection";
import Icon from "./components/Icon";
import { cn } from "./utils/utils";
import History from "./components/History";
import Citations from "./components/Citations";
import Brand from "./components/Branch";

function App() {
  const [open, setOpen] = useState(false);
  const [openCitation, setOpenCitation] = useState(false);

  const handleOpen = (val: boolean) => {
    setOpen(val);
  };

  const handleCitation = (val?: boolean) => {
    if (val !== undefined) {
      setOpenCitation(val);
    } else {
      setOpenCitation(!openCitation);
    }
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
    <main className={"h-full flex overflow-hidden"}>
      {open && <History onOpen={handleOpen} />}
      <article className="w-full h-full transition-transform">
        {!open && (
          <nav className="sticky top-0 w-full flex items-center gap-4 pt-1 pb-5 px-10">
            <div className="flex gap-2">
              <Icon
                src="/side-bar.svg"
                alt=""
                width={46}
                height={46}
                onClick={() => handleOpen(!open)}
              />
              <Icon src="/new-chat.svg" alt="" width={46} height={46} />
            </div>
            <Brand />
          </nav>
        )}
        <section
          className={cn("h-[80%] w-[70%] mx-auto", {
            "w-[95%]": open || openCitation,
            "mt-20 h-[80%]": open,
          })}
        >
          {chatId === "home" || !chatId ? (
            <Hero />
          ) : (
            <ChatSection onCitation={handleCitation} />
          )}
        </section>
      </article>
      <Citations isOpen={openCitation} onClose={handleCitation} />
    </main>
  );
}

export default App;
