"use client";
import { useState } from "react";
import { orbitron_font } from "../utils/fonts";
import Image from "next/image";

const Skill = ({ skill }: { skill: string }) => {
  return (
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
  );
};

export default function Projects() {
  const [isPhone, setIsPhone] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    });
  }

  return (
    <div className="grid place-items-center p-1 lg:p-16">
      <div className="grid place-items-center p-2 w-full lg:p-4 rounded-3xl">
        <div className="grid grid-cols-1 gap-2 w-full rounded-2xl ">
          <div className="p-2  rounded-2xl grid place-items-center hover:scale-105 hover:shadow-slate-300 hover:shadow-xl hover:bg-slate-800 transition duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4 grid gap-1">
                <h1
                  className={
                    orbitron_font.className +
                    " text-xl lg:text-4xl font-bold text-center p-4"
                  }
                >
                  Alfred Discord Bot
                </h1>
                <p className="p-2 text-sm lg:text-xl text-center bg-slate-950 rounded-xl">
                  A multipurpose bot which has various features which could
                  handle moderation functions and many other fun utilities
                </p>
                <div className="p-2 bg-slate-950 rounded-xl flex flex-wrap gap-2 place-content-center">
                  {[
                    "python-original",
                    "bash-original",
                    "git-original",
                    "github-original",
                    "fastapi-original",
                  ].map((skill, index) => {
                    return <Skill skill={skill} key={index} />;
                  })}
                </div>
              </div>
              <div className="grid place-items-center">
                <Image
                  src={"/projects/Bat.jpg"}
                  alt="image"
                  width={1920}
                  height={1080}
                  priority
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="p-2  rounded-2xl grid place-items-center hover:scale-105 hover:shadow-slate-300 hover:shadow-xl hover:bg-slate-800 transition duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              <div className="p-4 grid gap-1">
                <h1
                  className={
                    orbitron_font.className +
                    " text-xl lg:text-4xl font-bold text-center p-4"
                  }
                >
                  Parkinson Disease Watch
                </h1>
                <p className="p-2 text-sm lg:text-xl text-center bg-slate-950 rounded-xl">
                  A watch that can detect Parkinson&apos;s disease by analyzing the movements and jitters of the patient using ESP32 and MPU6050
                </p>
                <div className="p-2 bg-slate-950 rounded-xl flex flex-wrap gap-2 place-content-center">
                  {[
                    "python-original",
                    "fastapi-original",
                    "arduino-original",
                    "c-original",
                    "cplusplus-original",
                    "typescript-plain"
                  ].map((skill, index) => {
                    return <Skill skill={skill} key={index} />;
                  })}
                </div>
              </div>
              <div className="grid place-items-center">
                <Image
                  src={"/projects/watch.png"}
                  alt="image"
                  width={1920}
                  height={1080}
                  priority
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
