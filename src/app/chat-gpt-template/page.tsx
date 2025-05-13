import React from "react";

function ChatGPTPage() {
  return (
    <main
      className="transition-width relative h-full w-full flex-1 overflow-auto"
      id="main"
      style={{ zIndex: -1 }}
    >
      <div>
        <div>
          <nav
            id="header"
            className="h-[var(--header-height)] font-semibold pointer-events-none bg-primary flex items-center 
            justify-between max-md:hidden absolute start-0 end-0 top-0 z-20 p-3 
            @[84rem]/thread:absolute @[84rem]/thread:start-0 @[84rem]/thread:end-0 @[84rem]/thread:bg-transparent
            @[84rem]/thread:shadow-none! [box-shadow:var(--sharp-edge-top-shadow-placeholder)]"
          >
            <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2"></div>
            <div className="flex items-center gap-0 overflow-hidden"></div>
            <div
              id="conversation-header"
              className="flex items-center gap-2 pe-1 leading-[0]"
            ></div>
          </nav>
          <div className="flex basis-auto 
          flex-col shrink min-[510px]:max-[768px]:mt-[25dvh]! 
          @max-[31.9rem]/thread:grow @max-[31.9rem]/thread:justify-center 
          @lg/thread:mt-[calc(30dvh+25px)]"></div>

          <div id="thread-bottom" className="isolate z-3 w-full basis-auto 
          md:border-transparent md:pt-0 dark:border-white/20 md:dark:border-transparent mb-4 @lg/thread:grow flex flex-col">
            <div>
                <div>
                    <div>
                        <div></div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChatGPTPage;
