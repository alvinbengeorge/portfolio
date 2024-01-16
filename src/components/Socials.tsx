import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <div className="flex justify-center">
      <div className="p-1 transition ease-in-out duration-500 hover:scale-125">
        <SocialIcon
          url="https://github.com/alvinbengeorge"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1 transition ease-in-out duration-500 hover:scale-125">
        <SocialIcon
          url="https://linkedin.com/in/alvinbengeorge"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1 transition ease-in-out duration-500 hover:scale-125">
        <SocialIcon
          url="https://www.instagram.com/alvinallen333/"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1 transition ease-in-out duration-500 hover:scale-125">
        <SocialIcon
          url="https://twitter.com/AlvinBenGeorge"
          target="_blank"
          className="p-2"
        />
      </div>
    </div>
  );
}
