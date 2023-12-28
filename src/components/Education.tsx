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
            <div className='grid flex items-left gap-4'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='bg-slate-900 p-4 inline'>
                            <h1 className="text-slate-100 text-xl">{item.institution}</h1>
                            <p className="text-slate-200 text-md">{item.degree}</p>
                            <p className="text-slate-500 text-sm">{item.year}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}