"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Socials from "./Socials";
import { about_heading_font } from "../utils/fonts";

export default function MainBox() {
  return (
    <motion.div className="rounded-none bg-transparent sm:border sm:border-slate-500 sm:backdrop-blur-lg bg-slate-800/30 sm:shadow-2xl sm:rounded-3xl"
    initial={{opacity: 0, y:"10%"}}
    whileInView={{opacity: 1, y:0}}
    whileHover={{scale: 1.05}}
    transition={{duration: 1}}
    viewport={{once: true}}
    >
      <div className="flex justify-center items-center">
        <Image
          src="/Alvin.webp"
          width={200}
          height={200}
          className="rounded-full grayscale"
          alt="Alvin Ben George"
          priority={true}
          quality={40}
        />
      </div>
      <div className="text-center">
        <h1
          className={
            "text-8xl text-center p-2 rounded-md text-white  inline " +
            about_heading_font.className +
            " hover:animate-pulse"
          }
        >
          Hello World!
        </h1>
      </div>
      <div className="p-4">
        <p className="text-center text-slate-100 text-wrap">
          Hi, I am <span className="text-slate-400">Alvin Ben George</span>
          <br></br>
          <span className="text-slate-400">Backend Developer</span> from
          Bangalore
        </p>
        <Socials />
      </div>
    </motion.div>
  );
}
