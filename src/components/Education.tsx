import React from 'react';

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
]

export default function Education() {
    return (
        <div>
            <div>
                <h1 className="text-slate-100 text-4xl text-center py-1">Education</h1>
            </div>
            <div className='grid place-content-center gap-2'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="text-white text-center text-md p-4 bg-slate-900 container rounded-full">
                            <h1 className="text-slate-400 text-2xl">{item.institution}</h1>
                            <h2 className="text-slate-400 text-xl">{item.degree}</h2>
                            <h3 className="text-slate-400 text-lg">{item.year}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}