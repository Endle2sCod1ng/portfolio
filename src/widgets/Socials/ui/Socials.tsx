import { AppLink } from "@/shared/ui/AppLink/AppLink";
import TgSvg from "@/shared/assets/img/socials/tg.svg?react";
import VkSvg from "@/shared/assets/img/socials/vk.svg?react";
import GhSvg from "@/shared/assets/img/socials/gh.svg?react";
import InSvg from "@/shared/assets/img/socials/in.svg?react";

import s from "./Socials.module.scss";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
const socials = [
  { svg: GhSvg, link: "https://github.com/Endle2sCod1ng" },
  { svg: TgSvg, link: "https://github.com/Endle2sCod1ng" },
  { svg: VkSvg, link: "https://github.com/Endle2sCod1ng" },
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
            ? "1.4 -0.5 21 21"
            : "0 0 21 21";
        const size = soc.svg === GhSvg || soc.svg === InSvg ? "35" : "21";

        return (
          <li key={i + soc.link}>
            <AppLink to={soc.link}>
              <AppSvg
                Svg={soc.svg}
                viewBox={viewBox}
                size={size}
                className="link"
              />
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
};
