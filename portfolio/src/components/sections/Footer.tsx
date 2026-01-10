"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { MagicButton } from "../ui/magic-button";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
             <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 " />
        </div>

      <div className="flex flex-col items-center justify-center relative z-10">
        <h1 className="heading text-4xl lg:text-5xl font-bold text-center max-w-4xl lg:leading-normal">
          Ready to take <span className="text-cyan-400">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-gray-400">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href={`mailto:${portfolioData.email}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<Mail size={18} />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full container mx-auto px-6 max-w-7xl">
        <p className="md:text-base text-sm md:font-normal font-light text-gray-400">
          Copyright © {new Date().getFullYear()} {portfolioData.name}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-slate-900 rounded-lg border border-slate-800 text-white hover:bg-cyan-900/30 hover:border-cyan-500/50 transition-all">
                <Github size={20} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-slate-900 rounded-lg border border-slate-800 text-white hover:bg-cyan-900/30 hover:border-cyan-500/50 transition-all">
                <Linkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-slate-900 rounded-lg border border-slate-800 text-white hover:bg-cyan-900/30 hover:border-cyan-500/50 transition-all">
                <Mail size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};
