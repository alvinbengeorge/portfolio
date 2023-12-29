import React from "react";

const data = [
  {
    institution: "SRMIST, Kattankulathur",
    degree: "B.Tech in Electronics and Computer Engineering",
    year: "2022 - 2026",
  },
  {
    institution: "Delhi Public School, Bangalore East",
    degree: "Higher Secondary Education",
    year: "2020 - 2022",
  },
  {
    institution: "Baldwin Boys' High School, Bangalore",
    degree: "Secondary Education",
    year: "2012 - 2020",
  },
];

export default function Education() {
  return (
    <div className="ps-8 pe-8 py-2">
      <div className="py-2">
        <h1 className="text-slate-100 text-4xl text-center py-8 bg-slate-800 rounded-full md:rounded-lg">
          Education
        </h1>
      </div>
      <div className="grid place-content-center grid-cols-1 gap-2 md:grid-cols-3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white text-center p-4 bg-slate-900 container rounded-full md:rounded-lg p-1"
            >
              <div>
                <h1 className="text-slate-400 text-2xl">{item.institution}</h1>
              </div>
              <div>
                <h2 className="text-slate-400 text-lg">{item.degree}</h2>
              </div>
              <div>
                <h3 className="text-slate-400 text-md">{item.year}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
