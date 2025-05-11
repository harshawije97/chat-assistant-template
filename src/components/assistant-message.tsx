"use client";

import React from "react";
import { Copy, RefreshCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";

interface AssistantMessageProps {
  message: string;
}

function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <div className="relative group flex flex-col justify-center w-full max-w-3xl md:px-4 pb-2 gap-1 items-start">
      <div
        dir="auto"
        className="min-h-7 rounded-3xl break-words text-primary w-full max-w-none border-0 px-4 py-2.5 opacity-100"
      >
        <div className="[&_a]:text-primary [&_a:hover]:underline">
          <p
            dir="auto"
            className="break-words"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {message}
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full justify-between md:px-3">
        <div
          className="flex items-center gap-[3px] w-max rounded-lg text-xs bg-background pb-2 px-2 start-0 md:start-4 -ml-4"
          style={{ bottom: "128px" }}
        >
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Regenerate message"
          >
            <RefreshCcw />
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Copy message"
          >
            <Copy />
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Like message"
          >
            <ThumbsUp />
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Dislike message"
          >
            <ThumbsDown />
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          position: "absolute",
          bottom: "0px",
          zIndex: "1000",
        }}
      ></div>
    </div>
  );
}

export default AssistantMessage;
