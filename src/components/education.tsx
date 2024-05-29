"use client";
import { raleway } from "@/utils/fonts";
import { ContainerScroll } from "@/components/ui/container_scroll";
import { BackgroundGradient } from "@/components/ui/background_gradient";
import React from "react";

export default function Education() {
  return (
    <div className="grid place-items-center w-full h-full py-8">
      <h1 className={raleway.className + " text-2xl lg:text-6xl"}>Education</h1>
      <div
        className={
          raleway.className +
          " grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2 p-8"
        }
      >
        <BackgroundGradient
          className=" dark:bg-zinc-950 p-4 w-96 rounded-3xl"
          animate={true}
        >
          <h2 className="text-md lg:text-2xl text-wrap">
            Baldwin Boys&apos; High School
          </h2>
          <p>2012-2020</p>
          <div className="">
            <div className="p-4 ps-8 pe-8 rounded-xl bg-zinc-900">
                <h2 className="text-lg font-bold">Activity</h2>
                <ul role="list" className="marker:text-sky-400 list-disc">
                    <li>Class Leader</li>
                    <li>Quiz Club Member</li>
                    <li>Science Club Member</li>
                </ul>
            </div>
        </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
