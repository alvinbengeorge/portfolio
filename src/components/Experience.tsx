"use client";
import Image from "next/image";

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
    <div className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl">
      <div className="p-4 transition duration-500 ease-in-out hover:bg-slate-950">
        <span
          className={`devicon-${skill} text-6xl text-white rounded-full`}
        ></span>
      </div>
      {/* <p className="text-xs text-center">{skill.split("-")[0]}</p> */}
    </div>
  );
};

const Role = ({ role }: { role: string }) => (
  <div
    key={role}
    className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl"
  >
    <div className="p-4 transition duration-500 ease-in-out hover:bg-slate-950 h-full">
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
    <div>
      <div className="flex flex-wrap gap-2 p-8 place-content-center">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
      <div>
        <h1 className="text-4xl text-center text-white">Roles</h1>
        <div className="flex flex-wrap gap-2 p-8 place-content-center">
          {roles.map((role) => Role({ role }))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
