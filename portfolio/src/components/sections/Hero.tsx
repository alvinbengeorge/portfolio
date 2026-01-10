"use client";
import React from "react";
import { GridBackground } from "../ui/background-grid";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { MagicButton } from "../ui/magic-button";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Spotlight } from "../ui/Spotlight";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center scroll-mt-0 relative" id="home">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <GridBackground className="h-full">
        <div className="flex justify-center relative z-10 w-full">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img
                src="/photo.jpg"
                alt="Alvin Ben George"
                className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full mb-6 opacity-60 hover:opacity-100 transition-opacity duration-500 border-2 border-slate-700/50 object-cover"
              />
            </motion.div>

            <TypewriterEffect
              words={[
                { text: "Hi," },
                { text: "I'm" },
                { text: portfolioData.name, className: "text-purple-500 dark:text-purple-500" },
              ]}
              className="text-center text-3xl md:text-5xl lg:text-6xl"
              cursorClassName="bg-purple-500"
            />
            <p className="text-center text-xl md:text-3xl lg:text-4xl mt-2 text-purple-500 font-bold tracking-wide">
              Full Stack Developer
            </p>
            <p className="text-center text-base md:text-lg lg:text-xl mt-4 text-gray-400">
              Code. Create. Innovate.
            </p>

            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<ArrowDown size={18} />}
                position="right"
              />
            </a>
          </div>
        </div>
      </GridBackground>
    </div>
  );
};
