import { SocialIcon } from "react-social-icons";

export default function Card({
  title,
  description,
  link,
  cardClassName
}: {
  title: string;
  description: string;
  link: string;
  cardClassName?: string;
}) {
  return (
    <div className={"fixed p-4 rounded-xl shadow-xl w-96 backdrop-blur-sm bg-slate-900 " + cardClassName}>
      <div className="rounded-full block bg-slate-800">
        <h1 className="text-slate-100 text-xl text-center">{title}</h1>
      </div>
      <div>
        <p className="text-white text-sm text-wrap text-left p-1">
          {description}
        </p>
      </div>
      <div className="items-center justify-center">
        <SocialIcon url={link} target="_blank" className="p-2" />
      </div>
    </div>
  );
}
