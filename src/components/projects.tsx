"use client";
import Image from "next/image";
import Link from "next/link";
import { Skill } from "@/utils/skill";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    title: "Alfred Discord Bot",
    src: "/projects/Bat.jpg",
    content: (
      <div className="text-white bg-gradient-to-br from-cyan-700 to-white grid place-items-center border-white rounded-2xl p-8 text-center">
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="grid place-items-center">
            <h1 className="font-bold text-center text-2xl">
              Alfred Discord Bot
            </h1>
            <p className="p-0 lg:ps-16 lg:pe-16">
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
              href="https://github.com/alvinbengeorge/alfred-discord-bot"
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
    src: "/projects/watch.png",
    content: (
      <div className="text-white bg-gradient-to-br from-blue-700 to-violet-900 grid place-items-center border-white rounded-2xl p-8 text-center">
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2">
          <div className="grid place-items-center">
            <h1 className="font-bold text-center text-2xl">
              Parkinson Disease Watch
            </h1>
            <p className="p-0 lg:ps-16 lg:pe-16">
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
  {
    title: "3DUCAT0R5 - SkillUp",
    src: "/projects/skillup.png",
    content: (
      <div className="text-white bg-gradient-to-br from-purple-700 to-violet-900 grid place-items-center border-white rounded-2xl p-8 text-center">
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="grid place-items-center">
            <h1 className="font-bold text-center text-2xl">SkillUp</h1>
            <p className="p-0 lg:ps-16 lg:pe-16">
              SkillUP introduces students to a world where learning is not just
              about observing but interacting. Imagine having the ability to
              explore a 3D model of an Arduino board in AR
            </p>
            <div className="py-2 rounded-xl flex flex-wrap gap-2 place-content-center">
              {[
                "nextjs",
                "python",
                "fastapi",
                "github",
                "git"
              ].map((skill, index) => {
                return <Skill skill={skill} key={index} />;
              })}
            </div>
            <Link
              href="https://github.com/alvinbengeorge/3DUCAT0R5/"
              target="_blank"
            >
              <div className="text-white bg-blue-900 w-full text-xl p-4 rounded-full">
                <h1>🔗 Github</h1>
              </div>
            </Link>
          </div>
          <div className="">
            <Image
              src="/projects/skillup.png"
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
  const cards = data.map((card, index) => {
    return <Card key={card.src} card={
      {
        ...card,
        category: "projects"
      }
    } index={index} />
  })
  return (
    <section id="projects" className="py-8">
      <div className="p-8 lg:ps-32 lg:pe-32">
        <h1 className="text-4xl font-bold py-2">Projects</h1>
        <p className="">Here are some projects I&apos;ve worked on</p>
      </div>
      <div>
        <Carousel items={cards} />
      </div>

    </section>
  )
}