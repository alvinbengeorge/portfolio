"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { CardSpotlight } from "../ui/card-spotlight";
import { BentoGrid } from "../ui/bento-grid";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Projects = () => {
  // Define grid spans for a bento layout: 2-1, 1-2, 1-2 pattern for 6 items
  const spanClasses = [
    "md:col-span-2", "md:col-span-1", 
    "md:col-span-1", "md:col-span-2",
    "md:col-span-1", "md:col-span-2" 
  ];

  return (
    <section id="projects" className="py-20 w-full">
        <div className="container mx-auto px-6 max-w-7xl">
            <h1 className="heading text-4xl font-bold text-center mb-16">
                Recent <span className="text-cyan-400">Projects</span>
            </h1>
            
            <BentoGrid>
                {portfolioData.projects.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={cn("h-full", spanClasses[i] || "md:col-span-1")}
                    >
                        <CardSpotlight className="flex flex-col items-start justify-between p-6 h-full min-h-[300px]">
                            <div className="w-full">
                                <div className="flex justify-between items-start w-full mb-2">
                                     <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                                     <div className="flex gap-2">
                                        {item.repoUrl && item.repoUrl !== '#' && (
                                            <a href={item.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {item.liveUrl && item.liveUrl !== '#' && (
                                            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                     </div>
                                </div>
                               
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-4">{item.description}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-800/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardSpotlight>
                    </motion.div>
                ))}
            </BentoGrid>
        </div>
    </section>
  );
};