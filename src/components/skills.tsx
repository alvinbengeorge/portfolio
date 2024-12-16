"use client";
import SimpleParallax from "simple-parallax-js";
import { useEffect } from "react";
import { Skill, Role } from "@/utils/skill";

const skills = [
  "arduino",
  "bash",
  "c",
  "cplusplus",
  "css3",
  "debian",
  "django",
  "docker",
  "express",
  "fastapi",
  "fedora",
  "flask",
  "gcc",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "linux",
  "mongodb",
  "mysql",
  "nextjs",
  "nodejs",
  "npm-wordmark",
  "postgresql",
  "python",
  "raspberrypi",
  "react",
  "redhat",
  "svelte",
  "tailwindcss",
  "typescript",
];

const roles = ["/srmkzilla.png", "/dsc.png", "/gdsc.png"];

const Experience = () => {
  return (
    <section className="grid grid-cols-1 gap-2 ps-8 pe-8" id="experience">
      <div className="shadow-sm hover:shadow-xl duration-500 shadow-white rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Skills</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {skills.map((skill, index) => {
            return (<Skill skill={skill} key={index} />);
          })}
        </div>
      </div>
      <div className="shadow-sm hover:shadow-xl duration-500 shadow-white rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Roles</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {roles.map((role, index) => {
            return (<Role role={role} key={index} />);
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;