"use client";

const Experience = () => {
  const skills: string[] = [
    "docker-plain",
    "python-plain",
    "typescript-plain",
    "nextjs-plain",
    "express-original",
    "mongodb-plain",
    "postgresql-plain",
    "mysql-plain",
    "html5-plain",
    "css3-plain",
    "tailwindcss-plain",
    "react-plain",
    "svelte-plain",
    "arduino-plain",
    "raspberrypi-line",
    "bash-plain",
    "git-plain",
    "github-plain",
    "gentoo-plain",
    "fastapi-plain",
    "redhat-plain",
    "gcc-plain",
    "django-plain",
    "flask-original",
  ];
  return (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2">
      <div className="bg-slate-900 rounded-3xl p-4 grid grid-cols-1 gap-2">
        <div className="bg-slate-950 rounded-xl">
          <h1 className="text-white text-4xl text-center p-2">My Roles</h1>
        </div>
        
      </div>
      <div className="bg-slate-900 rounded-3xl p-4 grid grid-cols-1 gap-2">
        <div className="bg-slate-950 rounded-xl">
          <h1 className="text-white text-4xl text-center p-2">Tech Stack</h1>
        </div>
        <div className="bg-slate-950 rounded-xl">
          <div className="flex flex-wrap gap-2 p-2 place-content-center">
            {skills.map((skill: string, index: number) => {
              return (
                <div className="bg-slate-900 rounded-xl p-2" key={index}>
                  <i
                    className={`devicon-${skill} p-2 rounded-full transition ease-in-out duration-500 hover:shadow-xl`}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
