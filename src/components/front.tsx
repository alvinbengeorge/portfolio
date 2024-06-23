"use client"
import React from "react";

import { TypewriterEffect } from "./ui/typewrite_effect";
import { FlipWords } from "./ui/flipwords";
import { raleway, mono } from "@/utils/fonts";
import { LampContainer } from "./ui/lamp";

const words = [
  {
    text: "I",
    className: mono.className + " text-2xl lg:text-3xl sm:text-6xl text-3xl",
  },
  {
    text: "am",
    className: mono.className + " text-2xl lg:text-3xl sm:text-6xl text-3xl",
  },
  {
    text: "Alvin",
    className: mono.className + " text-2xl lg:text-3xl sm:text-6xl text-3xl",
  },
  // {
  //   text: "Ben",
  //   className: mono.className + " text-2xl lg:text-3xl sm:text-6xl text-3xl",
  // },
  // {
  //   text: "George",
  //   className: mono.className + " text-2xl lg:text-3xl sm:text-6xl text-3xl",
  // },
].map((word) => {
  return {
    text: word.text,
    className: word.className + " md:text-6xl lg:text-8xl sm:text-6xl text-3xl",
  };
});

export default function Front() {
  return (
    <LampContainer className="p-8 text-white text-6xl rounded-xl">
      <TypewriterEffect words={words} />
      <div className="text-center w-full">
        <div className={raleway.className + " text-sm md:text-xl lg:text-4xl"}><FlipWords words={["Student", "Developer", "Engineer"]} />from India</div>
      </div>
    </LampContainer>
  );
}
