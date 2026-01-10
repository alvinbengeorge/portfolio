"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}