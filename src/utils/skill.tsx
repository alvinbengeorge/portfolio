import Image from "next/image";

export const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className="p-2 rounded-2xl bg-white hover:scale-105">
      <Image
        src={`/skills/${skill}.svg`}
        width={40}
        height={40}
        className="p-1"
        alt={skill}
        priority={true}
        quality={10}
      />
    </div>
  );
};

export const Role = ({ role }: { role: string }) => (
  <div
    key={role}
    className="bg-slate-900 flex flex-col place-content-center items-center rounded-xl hover:scale-105">
    <div className="p-4 h-full">
      <Image
        src={"/organization"+role}
        width={200}
        height={200}
        className="rounded-full bg-white p-8"
        alt="Alvin Ben George"
        priority={true}
        quality={10}
      />
    </div>
  </div>
);
