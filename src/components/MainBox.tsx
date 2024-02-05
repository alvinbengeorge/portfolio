"use client";
import Image from "next/image";
import React from "react";
import Socials from "./Socials";
import { about_heading_font } from "../utils/fonts";

export default function MainBox() {
  return (
    <div className="bg-transparent hover:scale-105 transition duration-500 ease-in-out border border-transparent rounded-3xl sm:hover:bg-slate-900 sm:hover:border-slate-400">
      <div className="flex justify-center items-center">
        <Image
          src="/Alvin.webp"
          width={200}
          height={200}
          className="rounded-full grayscale"
          alt="Alvin Ben George"
          priority={true}
          quality={40}
        />
      </div>
      <div className="text-center">
        <h1
          className={
            "text-8xl text-center p-2 rounded-md text-white  inline " +
            about_heading_font.className +
            " hover:animate-pulse"
          }
        >
          Hello World!
        </h1>
      </div>
      <div className="p-4">
        <p className="text-center text-slate-100 text-wrap">
          Hi, I am <span className="text-slate-400">Alvin Ben George</span>
          <br></br>
          <span className="text-slate-400">Backend Developer</span> from
          Bangalore
        </p>
        <Socials />
      </div>
    </div>
  );
}
