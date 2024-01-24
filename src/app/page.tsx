import MainBox from "../components/MainBox";
import React from "react";
import Image from "next/image";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="p-3 bg-gradient-to-b overlay-hidden from-black to-slate-950 sm:p-8"
      >
          <MainBox />
      </section>
      <section id="about" className="py-8 place-items-center bg-slate-950 overlay-hidden">
        <About />
        <Education />
      </section>
      <section
        id="projects"
        className="py-8 place-items-center bg-gradient-to-b to-slate-600 from-slate-950 overlay-hidden"
      >
        <div className="text-white text-4xl text-center">
          <h1>Projects</h1>
        </div>
        <div>
          <Projects />
        </div>
      </section>
      <section
        id="experience"
        className="py-8 place-items-center bg-slate-600 overlay-hidden"
      >
        <div className="ps-8 pe-8 py-2">
          <div className="rounded-3xl bg-slate-700">
            <h1 className="text-white text-4xl text-center p-8">Experience</h1>
          </div>
        </div>
        <Experience />
      </section>
    </>
  );
}
