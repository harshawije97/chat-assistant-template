"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

function LLmModels() {
  return (
    <div className="flex items-center mr-3">
      <Popover modal>
        <PopoverTrigger className="flex flex-row items-center gap-1">
          <span className="text-sm">Model</span>
          <ChevronDown size={15} />
        </PopoverTrigger>
        <PopoverContent className="w-fit mt-1">
          <div className="max-w-fit">Your models go here</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LLmModels;
