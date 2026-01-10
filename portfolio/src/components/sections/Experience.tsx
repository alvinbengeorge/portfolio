"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="heading text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Experience</span>
        </h1>

        <div className="w-full mt-12 grid grid-cols-1 gap-10">
            {portfolioData.experience.map((card, i) => (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex gap-4 md:gap-8 border-l-2 border-slate-800 pl-6 md:pl-10 relative"
                >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                    
                    <div className="flex-1 p-6 md:p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-white">{card.role}</h2>
                            <p className="text-sm text-gray-400 font-mono bg-slate-800 px-3 py-1 rounded-full w-fit">{card.period}</p>
                        </div>
                        <h3 className="text-lg text-cyan-400 mb-4">{card.company}</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                             {card.description.map((desc, idx) => (
                                <li key={idx} className="leading-relaxed">{desc}</li>
                             ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
