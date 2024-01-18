import MainBox from "../components/MainBox";
import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="p-0 bg-gradient-to-b from-black to-slate-950 sm:p-8 sm:bg-[url('/background.webp')] sm:bg-center"
      >
        <MainBox />        
      </section>
      <section id="about" className="py-8 place-items-center bg-slate-950">
        <About />
        <Education />
      </section>
      <section
        id="projects"
        className="py-8 place-items-center bg-gradient-to-b to-slate-600 from-slate-950"
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
        className="py-8 place-items-center bg-slate-600"
      >
        <div className="">
          <h1 className="text-white text-4xl text-center p-4">Experience</h1>
        </div>
        <Experience />
      </section>
    </>
  );
}
