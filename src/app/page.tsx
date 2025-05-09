import HistoryWrapper from "@/components/history-wrapper";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Paperclip, SendHorizontal, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <div className="w-full relative @container/nav z-40">
            <nav
              className="h-16 top-0 @[80rem]/nav:h-0 @[80rem]/nav:top-8 
            absolute z-10 flex flex-row items-center justify-center 
            w-full bg-gradient-to-b from-background 
            via-background via-80% to-transparent @[80rem]/nav:from-transparent @[80rem]/nav:via-transparent"
            >
              <div className="absolute flex flex-row items-center start-1">
                <a
                  aria-label="Home Page"
                  href="#"
                  className="ms-2 me-[0.5] rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-ring w-8 sm:w-auto"
                >
                  Logo
                </a>
              </div>
              <div className="grow max-w-[50%] @[640px]/nav:flex justify-center hidden"></div>
              <div className="absolute flex flex-row items-center md:gap-4 gap-0.5 ml-auto end-3">
                <ThemeToggle />
                <HistoryWrapper />
                <Button>Profile</Button>
              </div>
            </nav>
          </div>
          <div className="w-full h-full flex flex-col items-center p-2 mx-auto justify-center @sm:p-4 @sm:gap-9 @xl:w-4/5 isolate">
            <div className="flex flex-col items-center gap-6 @sm:gap-9 h-[450px] w-full @sm:pt-12 isolate">
              <div className="flex flex-col items-start justify-center w-full @sm:px-4 px-2 gap-6 @sm:gap-4 @xl:w-4/5 flex-initial pb-0 max-w-[51rem]">
                <h2 className="w-full text-2xl flex flex-col justify-center items-center text-center text-primary @sm:text-3xl tracking-tight ">
                  Good morning, User
                  <span className="text-secondary-foreground">subtitle</span>
                </h2>
              </div>
              {/* Chat form -- startup */}
              <div
                className="absolute bottom-0 mx-auto inset-x-0 w-full max-w-[51rem] @sm:relative flex flex-col items-center 
              justify-center gap-1 @sm:gap-4 @sm:bottom-auto @sm:inset-x-auto @sm:max-w-full"
              >
                <div className="flex flex-col-reverse items-center justify-between flex-1 w-full gap-0 @sm:gap-5 @sm:flex-col relative p-2 @sm:p-0">
                  <form
                    className="bottom-0 relative z-10 items-center justify-center w-full mt-2 flex flex-col gap-2 text-base"
                    data-id="1"
                  >
                    <div className="flex flex-row gap-2 justify-center w-full relative @xl:w-4/5">
                      <input type="file" multiple className="hidden" />
                      <div
                        className="group bg-card ring-border 
                      hover:ring-2 hover:focus-within:ring-border-2 duration-100 relative w-full 
                      overflow-hidden @container/input shadow shadow-black/5 max-w-[51rem] ring-1 ring-inset focus-within:ring-1 pb-12 px-2 @[480px]/input:px-3 rounded-3xl"
                      >
                        <div
                          className="w-full flex-row gap-2 
                        mt-3 px-1 whitespace-nowrap hidden flex-wrap will-change-[mask-image] @sm:[mask-image:none] 
                        [mask-image:linear-gradient(to_right,transparent_0,black_0px,black_calc(100%_-_40px),transparent_100%)]"
                          style={{ opacity: 1, transform: "none" }}
                        ></div>
                        <div className="relative z-10">
                          <span className="absolute px-2 @[480px]/input:px-3 py-5 text-neutral-400 pointer-events-none select-none">
                            What do you want to ask ?
                          </span>
                          <textarea
                            dir="auto"
                            aria-label="Ask me a question"
                            name=""
                            id=""
                            style={{
                              resize: "none",
                              height: "44px !important",
                            }}
                            className="w-full px-2 @[480px]/input:px-3 bg-transparent 
                            focus:outline-none text-foreground align-bottom min-h-14 pt-5 my-0 mb-5"
                          ></textarea>
                        </div>
                        <div
                          className="flex gap-1.5 absolute inset-x-0 bottom-0 border-2 
                        border-transparent p-3 @[480px]/input:p-2.5 max-w-full"
                        >
                          {/* form footer */}
                          <Button
                            className="rounded-full h-10"
                            variant={"outline"}
                          >
                            <Paperclip />
                          </Button>
                          <div className="flex grow gap-1.5 max-w-full">
                            <div></div>
                            <div></div>
                          </div>
                          <div className="flex items-center mr-3">
                            <Popover modal>
                              <PopoverTrigger className="flex flex-row items-center gap-1">
                                <span className="text-sm">Model</span>
                                <ChevronDown size={15} />
                              </PopoverTrigger>
                              <PopoverContent className="w-fit mt-1">
                                <div className="max-w-fit">
                                  Your models go here
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="ml-auto flex flex-row items-end gap-1">
                            <Button
                              className="rounded-full h-11 w-11"
                              aria-label="Submit"
                              type="submit"
                              style={{
                                opacity: 1,
                              }}
                              disabled
                            >
                              <SendHorizontal />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <section className="w-full flex justify-center">
                    <div
                      className="z-10 w-full @xl:w-4/5 
                    no-touch-scrollbar will-change-[mask-image] @sm:[mask-image:none] min-h-10 max-w-[51rem] hidden @sm:block overflow-visible"
                    >
                      <div className="absolute bg-background w-full max-w-[51rem]"></div>
                      <div className="flex flex-row flex-wrap w-full gap-2 @sm:gap-2 justify-center items-center">
                        <Button variant={"secondary"} className="rounded-full">
                          <Star />
                          Suggestion 01
                        </Button>
                        <Button variant={"secondary"} className="rounded-full">
                          <Star />
                          Suggestion 02
                        </Button>
                        <Button variant={"secondary"} className="rounded-full">
                          <Star />
                          Suggestion 03
                        </Button>
                        <Button variant={"secondary"} className="rounded-full">
                          <Star />
                          Suggestion 04
                        </Button>
                        <Button variant={"secondary"} className="rounded-full">
                          <Star />
                          Suggestion 05
                        </Button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
