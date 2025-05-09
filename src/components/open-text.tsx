"use client";

import React from "react";

function OpenText() {
  return (
    <div className="flex flex-col items-start justify-center w-full @sm:px-4 px-2 gap-6 @sm:gap-4 @xl:w-4/5 flex-initial pb-0 max-w-[51rem]">
      <h2 className="w-full text-2xl flex flex-col justify-center items-center text-center text-primary @sm:text-3xl tracking-tight ">
        Good morning, User
        <span className="text-secondary-foreground">subtitle</span>
      </h2>
    </div>
  );
}

export default OpenText;
