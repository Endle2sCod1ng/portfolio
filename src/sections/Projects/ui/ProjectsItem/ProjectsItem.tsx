import { AppLink } from "@/shared/ui/AppLink/AppLink";
import type { Project } from "../Projects";
import { useTranslation } from "react-i18next";
import s from "./ProjectsItem.module.scss";
import { AppText } from "@/shared/ui/AppText/AppText";
// import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
// import GhSvg from "@/shared/assets/img/socials/gh.svg?react";

interface ProjectsItemProps {
  project: Project;
  className: string;
}

export const ProjectsItem = ({ project, className }: ProjectsItemProps) => {
  const { img, title, text, stackList, preview, code } = project;
  const { t } = useTranslation();
  return (
    <li className={`${s.listItem} ${className ?? className}`}>
      <div className={s.imageContainer}>
        <img
          className={s.image}
          src={img}
          alt={"image"}
        />
        <AppLink
          to={preview}
          className={s.imgLink}
          target="_blank"
        >
          {t("Live preview")}
        </AppLink>
      </div>

      <div className={s.content}>
        <h4 className={s.title}>{title}</h4>
        <AppText
          text={text}
          className={s.text}
        />
        <div className={s.stack}>
          <span>{"Tech stack: "}</span>
          {stackList.map((sItem, i) => {
            return (
              <span
                className={s.stackItem}
                key={sItem + i}
              >
                {sItem}
                {", "}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.linkWrapper}>
        <AppLink
          className={s.decorated}
          to={preview}
          target="_blank"
        >
          <span>{t("Live preview")}</span>
        </AppLink>
        <AppLink
          target="_blank"
          to={code}
          className={s.decorated}
        >
          {/* <AppSvg
            Svg={GhSvg}
            viewBox="0 0 120 120"
            width={"21"}
            height={"21"}
          /> */}
          <span>{t("View code")}</span>
        </AppLink>
      </div>
    </li>
  );
};
