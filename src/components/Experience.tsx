"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills: string[] = [
  "docker-plain",
  "python-original",
  "typescript-plain",
  "javascript-plain",
  "nodejs-plain",
  "npm-original-wordmark",
  "nextjs-original",
  "express-original",
  "mongodb-plain",
  "postgresql-plain",
  "mysql-plain",
  "html5-plain",
  "css3-plain",
  "tailwindcss-plain",
  "react-original",
  "svelte-original",
  "arduino-original",
  "raspberrypi-original",
  "bash-original",
  "git-original",
  "github-original",
  "fastapi-original",
  "redhat-original",
  "gcc-original",
  "django-plain",
  "flask-original",
  "fedora-original",
  "debian-original",
  "linux-original",
  "c-original",
  "cplusplus-original",
  "java-original",
];
const roles = ["/srmkzilla.png", "/dsc.png", "/gdsc.png"];

const Skill = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.div
      className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl p-4"
      initial={{ opacity: 0, y: "25%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: index / 12 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="p-2 rounded-full bg-slate-300">
        <Image
          src={`/skills/${skill}.svg`}
          width={40}
          height={40}
          className="p-1"
          alt={skill}
          priority={true}
          quality={10}
        />
      </div>
      {/* <p className="text-xs text-center">{skill.split("-")[0]}</p>  */}
    </motion.div>
  );
};

const Role = ({ role, index }: { role: string; index: number }) => (
  <motion.div
    key={role}
    className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl"
    initial={{ opacity: 0, y: "10%" }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: index * 0.2 }}
    whileHover={{ scale: 1.05 }}
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
  </motion.div>
);

const Experience = () => {
  return (
    <div className="grid grid-cols-1 gap-2 ps-8 pe-8">
      <div className="shadow bg-slate-700 rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Skills</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {skills.map((skill, index) => {
            return (<Skill skill={skill} index={index} key={index} />);
          })}
        </div>
      </div>
      <div className="bg-slate-700 rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Roles</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {roles.map((role, index) => {
            return (<Role role={role} index={index} key={index} />);
          })}
        </div>
      </div>
    </div>
  );
};
export default Experience;
