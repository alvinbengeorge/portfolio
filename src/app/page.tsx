import Image from "next/image";
import React from "react";
import Socials from "@/components/Socials";
import { Rubik_80s_Fade, Raleway } from "next/font/google";
import Education from "../components/Education";
import Card from "../components/Card";

const main_font = Rubik_80s_Fade({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <section className="py-8">
        <div className="flex justify-center rounded-full items-center">
          <Image
            src="/Alvin.png"
            width={200}
            height={200}
            className="rounded-full grayscale bg-gray-950"
            alt="Alvin Ben George"
          />
        </div>
        <div className="text-center">
          <h1
            className={
              "text-8xl text-center p-2 rounded-md text-white  inline " +
              main_font.className +
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
      </section >
      <section id="about" className="py-8">
        <div className="text-white text-4xl text-center">
          <h1>About</h1>
        </div>
        <div>
          <p className="text-white text-center text-md p-4">
          Hello, I am Alvin Ben George, a Backend Developer currently interested in Python, TypeScript and Embedded Systems, currently pursuing Electronics and Computer Engineering. 
          </p>
        </div>
        <Education />
      </section>
    </>
  );
}
