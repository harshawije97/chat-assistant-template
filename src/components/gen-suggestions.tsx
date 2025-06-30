"use client";

import React from "react";
import { Separator } from "./ui/separator";

function GenerateSuggestions() {
  return (
    <>
      <div className="flex flex-col w-full gap-3 @md:pt-16 pt-8">
        <section className="grid grid-cols-1 text-start w-full px-2.5">
          <p className="text-secondary-foreground text-lg text-wrap @sm:text-sm">
            Explain how blockchain works like I&apos;m 5.
          </p>
        </section>
        <Separator />
        <section className="grid grid-cols-1 text-start w-full px-2.5">
          <p className="text-secondary-foreground text-lg text-wrap @sm:text-sm">
            Summarize this article into key points.
          </p>
        </section>
        <Separator />
        <section className="grid grid-cols-1 text-start w-full px-2.5">
          <p className="text-secondary-foreground text-lg text-wrap @sm:text-sm">
            Write me a professional email to follow up after a job interview
          </p>
        </section>
      </div>
    </>
  );
}

export default GenerateSuggestions;
