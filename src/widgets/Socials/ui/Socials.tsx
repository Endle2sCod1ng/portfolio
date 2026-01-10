import { AppLink } from "@/shared/ui/AppLink/AppLink";
import GithubSvg from "@/shared/assets/img/stack/github.svg?react";
import TelegrammSvg from "@/shared/assets/img/stack/github.svg?react";
// import TelegrammSvg from "@/shared/assets/img/nav/telegramm.svg?react";
import s from "./Socials.module.scss";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
const socials = [
  { svg: GithubSvg, link: "https://github.com/Endle2sCod1ng" },
  { svg: TelegrammSvg, link: "https://github.com/Endle2sCod1ng" },
];

interface SocialsProps {
  className?: string;
}
export const Socials = ({ className }: SocialsProps) => {
  return (
    <ul className={`${s.socials} ${className ? className : ""}`}>
      {socials.map((soc, i) => {
        return (
          <li key={i + soc.link}>
            <AppLink to={soc.link}>
              <AppSvg
                Svg={soc.svg}
                viewBox={`0 -5 88 88`}
                size="30"
                className="link"
              />
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
};
