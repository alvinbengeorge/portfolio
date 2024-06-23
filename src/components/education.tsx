"use client";
import { raleway } from "@/utils/fonts";
import { ContainerScroll } from "@/components/ui/container_scroll";
import { BackgroundGradient } from "@/components/ui/background_gradient";
import React from "react";

const education = [
  {
    name: "Baldwin Boys' High School",
    year: "2012-2020",
    activities: ["Rock Band", "Brass Band", "Synchronize Runner Up"],
  },
  {
    name: "Delhi Public School",
    year: "2020-2022",
    activities: [
      "Conducted Econhacks",
      "Participated in Rock band competition",
      "Participated in National Hackathon",
    ],
  },
  {
    name: "SRMIST Kattankulathur",
    year: "2022-present",
    activities: [
      "SRMKZILLA Technical Lead",
      "GDSC Associate Lead",
      "HackNova Winner",
      "Hackstreet 1.0 RunnerUp",
      "Innofusion '24 2nd RunnerUp",
    ],
  },
];

const Institution = ({
  name,
  year,
  activities,
}: {
  name: string;
  year: string;
  activities: string[];
}) => {
  return (
    <div className="w-full">
      <BackgroundGradient
        className=" dark:bg-zinc-950 p-4 w-full rounded-3xl"
        animate={true}
      >
        <div className="p-2">
          <h2 className="text-md lg:text-2xl text-wrap">{name}</h2>
          <p>{year}</p>
        </div>
        <div className="">
          <div className="p-4 ps-8 pe-8 rounded-2xl bg-zinc-800">
            <h2 className="text-lg font-bold">Activity</h2>
            <ul role="list" className="marker:text-sky-400 list-disc">
              {activities.map((activity) => {
                return <li key={activity}>{activity}</li>;
              })}
            </ul>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default function Education() {
  return (
    <div className="grid place-items-center w-full h-full py-8">
      <h1 className={raleway.className + " text-2xl lg:text-6xl w-full text-center"}>Education</h1>
      <div
        className={
          raleway.className + " grid place-items-center grid-cols-1 gap-4 p-4"
        }
      >
        {education.map((edu, index) => {
          return (
            <Institution
              key={index}
              name={edu.name}
              year={edu.year}
              activities={edu.activities}
            />
          );
        })}
      </div>
    </div>
  );
}
