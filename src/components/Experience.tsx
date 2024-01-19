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
  "cplusplus-plain",
  "java-plain",
];
const roles = ["/srmkzilla.png", "/dsc.png", "/gdsc.png"];

const Skill = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.div
      className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl"
      initial={{ opacity: 0, y: "25%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: index / 12 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-4">
        <span className={`devicon-${skill} text-3xl rounded-full`}></span>
      </div>
      {/* <p className="text-xs text-center">{skill.split("-")[0]}</p>  */}
    </motion.div>
  );
};

const Role = ({ role, index }: { role: string; index: number }) => (
  <motion.div
    key={role}
    className="bg-slate-900 flex flex-col transition duration-500 ease-in-out place-content-center items-center rounded-xl"
    initial={{ opacity: 0, y: "25%" }}
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
          {skills.map((skill, index) => (
            <Skill skill={skill} key={index} index={index} />
          ))}
        </div>
      </div>
      <div className="bg-slate-700 rounded-3xl">
        <h1 className="text-4xl text-center text-white p-4">Roles</h1>
        <div className="flex flex-wrap gap-2 pe-8 ps-8 py-4 place-content-center">
          {roles.map((role, index: number) => Role({ role, index }))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
