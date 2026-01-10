"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const TechStack = () => {
    return (
        <section id="techstack" className="py-20 w-full bg-slate-950/30">
            <div className="container mx-auto px-6 max-w-7xl">
                <h1 className="heading text-4xl font-bold text-center mb-16">
                    My <span className="text-cyan-400">Tech Stack</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {portfolioData.techStack.map((category, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col"
                        >
                            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-slate-800/50 text-gray-300 text-sm rounded-md border border-slate-700 hover:bg-slate-700 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};