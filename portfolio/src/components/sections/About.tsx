"use client";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="heading text-4xl font-bold text-center mb-10">
            About <span className="text-cyan-400">Me</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
                <div className="w-full flex justify-center lg:justify-end">
                    <img 
                        src="/photo.jpg" 
                        alt="Profile" 
                        className="rounded-2xl border-4 border-slate-800 shadow-2xl hover:scale-105 transition duration-500 object-cover w-full max-w-md"
                    />
                </div>
                <div className="w-full flex flex-col gap-5 text-gray-300 text-lg leading-relaxed">
                    <p>{portfolioData.summary}</p>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors">
                            <h3 className="font-bold text-xl text-white">Experience</h3>
                            <p className="text-cyan-400">Multiple Leadership Roles</p>
                        </div>
                         <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors">
                            <h3 className="font-bold text-xl text-white">Projects</h3>
                            <p className="text-cyan-400">Full Stack & AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};