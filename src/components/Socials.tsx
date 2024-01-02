import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <div className="flex justify-center">
      <div className="p-1">
        <SocialIcon
          url="https://github.com/alvinbengeorge"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1">
        <SocialIcon
          url="https://linkedin.com/in/alvinbengeorge"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1">
        <SocialIcon
          url="https://www.instagram.com/alvinallen333/"
          target="_blank"
          className="p-2"
        />
      </div>
      <div className="p-1">
        <SocialIcon
          url="https://www.hackerrank.com/profile/alvinallen333"
          target="_blank"
          className="p-2"
        />
      </div>
    </div>
  );
}
