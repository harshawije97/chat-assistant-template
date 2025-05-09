"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import HistoryWrapper from "./history-wrapper";
import { ThemeToggle } from "./theme-toggle";

function Navbar() {
  return (
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
  );
}

export default Navbar;
