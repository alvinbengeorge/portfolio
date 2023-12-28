import Image from "next/image";
import React from "react";
import Socials from "@/components/Socials";
import { Rubik_80s_Fade } from "next/font/google";

const heading_font = Rubik_80s_Fade({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="flex justify-center rounded-full items-center">
        <Image
          src="/Alvin.png"
          width={200}
          height={200}
          className="bg-slate-900 rounded-full grayscale"
          alt="Alvin Ben George"
        />
      </div>
      <div className="text-center">
        <h1
          className={
            "text-8xl text-center p-2 rounded-md text-white  inline " +
            heading_font.className +
            " hover:animate-pulse"
          }
        >
          Hello World!
        </h1>
      </div>
      <p className="text-center text-slate-100 p-4 text-wrap">
        Hi, I am <span className="text-slate-400">Alvin Ben George</span>
        <br></br>
        <span className="text-slate-400">Backend Developer</span> from India
      </p>
      <Socials />
    </>
  );
}
