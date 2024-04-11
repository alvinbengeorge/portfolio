"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { about_heading_font } from "../utils/fonts";
import { useState, useEffect } from "react";

export default function MainBox() {
  const [currentTrack, setCurrentTrack] = useState("5r7egnfTIQjaKSGREhIky9");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full gap-2">
      <div className="grid place-items-center bg-slate-900 rounded-2xl p-4">
        <Image
          src={"/Alvin.webp"}
          height={460}
          width={460}
          className="rounded-full grayscale"
          alt="Alvin"
          priority
        />
        <div className="text-center">
          <p className={about_heading_font.className + " text-center text-6xl"}>
            Hello world!!
          </p>
        </div>
      </div>
      <div className="grid place-items-center grid-cols-2 rounded-2xl gap-2">
        <div className="bg-[#282828] rounded-2xl w-full h-full col-span-2">
          <iframe
            src="https://open.spotify.com/embed/track/5r7egnfTIQjaKSGREhIky9?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="bg-slate-900  rounded-2xl w-full h-full col-span-2 p-4 grid place-items-center">
          <p className="text-center text-slate-100 text-wrap text-2xl">
            Hi, I am <span className="text-slate-400">Alvin Ben George</span>
            <br></br>
            <span className="text-slate-400">Backend Developer</span> from
            Bangalore
          </p>
        </div>
      </div>
      <div className="grid place-items-center grid-cols-2 rounded-2xl gap-2">
        <div className="bg-white/10 backdrop-blur-lg hover:backdrop-blur-2xl duration-500 rounded-2xl w-full h-full p-4">
          <Link
            href="https://github.com/alvinbengeorge"
            className="w-full h-full grid place-items-center"
            target="_blank"
          >
            <div className="bg-white p-2 rounded-full scale-100 hover:scale-150 duration-500">
              <Image
                src={"/socials/github.svg"}
                height={50}
                width={50}
                alt="GitHub"
                priority
                className=""
              />
            </div>
          </Link>
        </div>
        <div className="bg-[#0077B5]/30 rounded-2xl w-full h-full p-4 backdrop-blur-lg hover:backdrop-blur-2xl duration-500">
          <Link
            href="https://linkedin.com/in/alvinbengeorge"
            className="w-full h-full grid place-items-center"
            target="_blank"
          >
            <div className="bg-white p-2 rounded-full scale-100 hover:scale-150 duration-500">
              <Image
                src={"/socials/linkedin.svg"}
                height={50}
                width={50}
                alt="GitHub"
                priority
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
