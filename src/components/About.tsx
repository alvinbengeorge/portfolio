"use client";
import React from 'react';
import { about_heading_font } from '../utils/fonts';

export default function About() {
    return (
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-1 bg-slate-950 bg-center shadow shadow-slate-400 rounded-3xl p-1">
            <div className="rounded-3xl w-full">
              <h1
                className={
                  about_heading_font.className +
                  " text-6xl h-full text-center text-white"
                }
              >
                About
              </h1>
            </div>
            <div className="rounded-3xl bg-slate-800">
              <p className="text-white text-left text-md p-4">
                Hello, I am Alvin Ben George, a Backend Developer currently
                interested in Python, TypeScript and Embedded Systems, currently
                pursuing Electronics and Computer Engineering.
              </p>
            </div>
          </div>
        </div>
    );
}