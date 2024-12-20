"use client";
import React from "react";
import { mono } from "@/utils/fonts";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { FlipWords } from "./ui/flipwords";

export default function Front() {
  return (
    <section className="p-8 text-white text-6xl rounded-xl">
      <TextHoverEffect text="Alvin" />
      <div className="grid place-items-center">
        <FlipWords
          words={["Developer", "Designer", "Creator"]}
          className={mono.className + " text-3xl lg:text-6xl"}
        />
      </div>
    </section>
  );
}
