import { AppLink } from "@/shared/ui/AppLink/AppLink";
import TgSvg from "@/shared/assets/img/socials/tg.svg?react";
import VkSvg from "@/shared/assets/img/socials/vk.svg?react";
import GhSvg from "@/shared/assets/img/socials/gh.svg?react";
import InSvg from "@/shared/assets/img/socials/in.svg?react";

import s from "./Socials.module.scss";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
const socials = [
  { svg: GhSvg, link: "https://github.com/Endle2sCod1ng" },
  { svg: TgSvg, link: "https://t.me/EndlessCoding" },
  { svg: VkSvg, link: "https://vk.com/id949021058" },
  // { svg: InSvg, link: "https://github.com/Endle2sCod1ng" },
];

interface SocialsProps {
  className?: string;
}
export const Socials = ({ className }: SocialsProps) => {
  return (
    <ul className={`${s.socials} ${className ? className : ""}`}>
      {socials.map((soc, i) => {
        const viewBox: string =
          soc.svg === GhSvg || soc.svg === InSvg
            ? "0 -2 35 35"
            : soc.svg === TgSvg
              ? "-0.6 -2.5 25 25"
              : "-2 -2 25 25";
        const size = soc.svg === GhSvg || soc.svg === InSvg ? "35" : "21";
        const className = soc.svg === GhSvg ? s.svg : s.bg;

        return (
          <li
            key={i + soc.link}
            className={s.socItem}
          >
            <AppLink
              to={soc.link}
              target="_blank"
            >
              <AppSvg
                Svg={soc.svg}
                viewBox={viewBox}
                size={size}
                className={`${className}`}
              />
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
};
