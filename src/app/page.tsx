"use client";

import InputForm from "@/components/input-form";
import Navbar from "@/components/navbar";
import OpenText from "@/components/open-text";
import { useMessagesStore } from "@/lib/zustand/use-message-store";

export default function Home() {
  const { messages } = useMessagesStore();

  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <div className="w-full relative @container/nav z-40">
            <Navbar />
          </div>
          {messages.length < 1 && (
            <div className="w-full h-full flex flex-col items-center p-2 mx-auto justify-center @sm:p-4 @sm:gap-9 @xl:w-4/5 isolate">
              <div className="flex flex-col items-center gap-6 @sm:gap-9 h-[450px] w-full @sm:pt-12 isolate">
                <OpenText />
                {/* Chat form -- startup */}
                <InputForm isStartup={true} />
              </div>
            </div>
          )}
          <div className="relative flex flex-col items-center h-full @container/main">
            <div
              className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center px-5"
              style={{
                scrollbarGutter: "stable both-edges",
                overflowAnchor: "none",
              }}
            >
              <div className="relative w-full flex flex-col items-center pt-20 pb-4">
                <div></div>
                <div className="w-full max-w-[799px] flex flex-col">
                  <div>
                    <div className="relative group flex flex-col justify-center w-full max-w-3xl md:px-4 pb-2 gap-1 items-end">
                      <div
                        dir="auto"
                        className="min-h-7 rounded-3xl break-words text-primary max-w-prose border px-4 py-2.5 max-w-[100%] sm:max-w-[90%] rounded-br-lg bg-primary/10"
                      >
                        <span className="whitespace-pre-wrap">Hello World</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div></div>
                  <div style={{ width: "100%", paddingBottom: "144px" }}></div>
                </div>
              </div>
            </div>
            {/* Chat form */}
            <InputForm isStartup={false} />
          </div>
        </main>
      </div>
    </div>
  );
}
