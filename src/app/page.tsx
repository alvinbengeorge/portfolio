import Image from "next/image";
import React from "react";
import Socials from "@/components/Socials";
import { about_heading_font } from "../utils/fonts";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <section id="home" className="p-0 bg-[url('/background.webp')] bg-center sm:p-8">
        <div className="backdrop-blur-lg bg-slate-800/30 rounded-3xl sm:border border-slate-500">
          <div className="flex justify-center items-center">
            <Image
              src="/Alvin.webp"
              width={200}
              height={200}
              className="rounded-full grayscale"
              alt="Alvin Ben George"
              priority={true}
              quality={50}
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
              <span className="text-slate-400">Backend Developer</span> from India
            </p>
            <Socials />
          </div>
        </div>
      </section>
      <section id="about" className="py-8 place-items-center bg-slate-950">
        <div className="ps-8 pe-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-1 bg-slate-950 bg-center shadow shadow-slate-400 rounded-3xl">
            <div className="rounded-3xl w-full">
              <h1 className={about_heading_font.className + " text-center text-6xl h-full text-center text-white"}>About</h1>
            </div>
            <div className="rounded-3xl bg-slate-800">
              <p className="text-white text-left text-md p-4">
                Hello, I am Alvin Ben George, a Backend Developer currently interested in Python, TypeScript and Embedded Systems, currently pursuing Electronics and Computer Engineering.
              </p>
            </div>
          </div>
        </div>
        <Education />
      </section>
      <section id="projects" className="py-8 place-items-center bg-gradient-to-b to-black from-slate-950">
        <div className="text-white text-4xl text-center">
          <h1>Projects</h1>
        </div>
        <div>
          <Projects />
        </div>
      </section>
      {/* <section id="experience" className="py-8 place-items-center bg-gradient-to-b from-black to-slate-950">
        <h1 className="text-white text-4xl text-center">Experience</h1>
        <Experience />
      </section> */}

    </>
  );
}
