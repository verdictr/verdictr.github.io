"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Keyword Search"
        href="/search"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Verdictr's Keyword Search
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Check the keyword search for yourself!
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
