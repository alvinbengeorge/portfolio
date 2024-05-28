"use client"
import React from "react";

import { TypewriterEffect } from "./ui/typewrite_effect";
import { FlipWords } from "./ui/flipwords";
import { raleway, caveat } from "@/utils/fonts";
import { text } from "stream/consumers";
import { LampContainer } from "./ui/lamp";

const words = [
  {
    text: "I",
    className: caveat.className,
  },
  {
    text: "am",
    className: caveat.className,
  },
  {
    text: "Alvin",
    className: caveat.className
  },
  {
    text: "Ben",
    className: caveat.className
  },
  {
    text: "George",
    className: caveat.className
  },
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
