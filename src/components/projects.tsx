"use client";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

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

const tabs = [
  {
    title: "Alfred Discord Bot",
    value: "alfred",
    content: (
      <div className="text-white bg-gradient-to-br from-cyan-700 to-white grid place-items-center border-white rounded-2xl p-8 text-center">
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="grid place-items-center">
            <h1 className="font-bold text-center text-2xl">
              Alfred Discord Bot
            </h1>
            <p className="p-0 lg:ps-64 lg:pe-64">
              A multipurpose bot which has various features which could handle
              moderation functions and many other fun utilities
            </p>
            <div className="p-2 rounded-xl flex flex-wrap gap-2 place-content-center">
              {["python", "bash", "git", "github", "fastapi"].map(
                (skill, index) => {
                  return <Skill skill={skill} key={index} />;
                }
              )}
            </div>
            <Link
              href="https://github.com/alvinbengeorge/parkinson-project"
              target="_blank"
            >
              <div className="text-white bg-cyan-900 w-full text-xl p-4 rounded-full">
                <h1>🔗 Github</h1>
              </div>
            </Link>
          </div>
          <div className="">
            <Image
              src="/projects/Bat.jpg"
              width={400}
              height={400}
              alt="Alfred Discord Bot"
              priority={true}
              quality={10}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Parkinson Disease Watch",
    value: "parkinson",
    content: (
      <div className="text-white bg-gradient-to-br from-blue-700 to-violet-900 grid place-items-center border-white rounded-2xl p-8 text-center">
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2">
          <div className="grid place-items-center">
            <h1 className="font-bold text-center text-2xl">
              Parkinson Disease Watch
            </h1>
            <p className="p-0 lg:ps-64 lg:pe-64">
              A watch that can detect Parkinson&apos;s disease by analyzing the
              movements and jitters of the patient using ESP32 and MPU6050
            </p>
            <div className="p-2 rounded-xl flex flex-wrap gap-2 place-content-center">
              {[
                "python",
                "fastapi",
                "arduino",
                "c",
                "cplusplus",
                "typescript",
              ].map((skill, index) => {
                return <Skill skill={skill} key={index} />;
              })}
            </div>
            <Link
              href="https://github.com/alvinbengeorge/parkinson-project"
              target="_blank"
            >
              <div className="text-white bg-blue-900 w-full text-xl p-4 rounded-full">
                <h1>🔗 Github</h1>
              </div>
            </Link>
          </div>
          <div className="">
            <Image
              src="/projects/watch.png"
              width={400}
              height={400}
              alt="Parkinson Disease Watch"
              priority={true}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 p-2 md:p-32 lg:p-32 w-full [perspective:1000px]"
    >
      <Tabs tabs={tabs} />
    </section>
  );
}
