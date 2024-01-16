"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills: string[] = [
  "docker-plain",
  "python-plain",
  "typescript-plain",
  "javascript-plain",
  "nodejs-plain",
  "npm-original-wordmark",
  "nextjs-plain",
  "express-original",
  "mongodb-plain",
  "postgresql-plain",
  "mysql-plain",
  "html5-plain",
  "css3-plain",
  "tailwindcss-plain",
  "react-plain",
  "svelte-plain",
  "arduino-plain",
  "raspberrypi-line",
  "bash-plain",
  "git-plain",
  "github-plain",
  "gentoo-plain",
  "fastapi-plain",
  "redhat-plain",
  "gcc-plain",
  "django-plain",
  "flask-original",
  "fedora-plain",
  "debian-plain",
  "linux-plain",
  "c-plain",
  "java-plain",
];
const roles = ["/srmkzilla.png", "/dsc.png", "/gdsc.png"];

const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className="bg-slate-900 transition duration-500 ease-in-out flex flex-col place-content-center items-center rounded-xl hover:scale-110">
      <div className="p-4">
        <span
          className={`devicon-${skill} text-3xl rounded-full`}
        ></span>
      </div>
      {/* <p className="text-xs text-center">{skill.split("-")[0]}</p> */}
    </div>
  );
};

const Role = ({ role }: { role: string }) => (
  <div
    key={role}
    className="bg-slate-900 flex flex-col transition duration-500 ease-in-out place-content-center items-center rounded-xl hover:scale-105"
  >
    <div className="p-4 h-full">
      <Image
        src={role}
        width={200}
        height={200}
        className="rounded-full"
        alt="Alvin Ben George"
        priority={true}
        quality={10}
      />
    </div>
  </div>
);

const Experience = () => {
  return (
    <motion.div className="grid grid-cols-1 gap-2 p-8 sm:grid-cols-2">
      <div className="shadow bg-slate-700 rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Skills</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </div>
      </div>
      <div className="bg-slate-700 rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Roles</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {roles.map((role) => Role({ role }))}
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
