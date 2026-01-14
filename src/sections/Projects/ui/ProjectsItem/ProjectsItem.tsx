import { AppLink } from "@/shared/ui/AppLink/AppLink";
import type { Project } from "../Projects";
import { useTranslation } from "react-i18next";
import s from "./ProjectsItem.module.scss";

interface ProjectsItemProps {
  project: Project;
  className: string;
}

export const ProjectsItem = ({ project, className }: ProjectsItemProps) => {
  const { img, title, text, stackList, preview, code } = project;
  const { t } = useTranslation();
  return (
    <li className={`${s.listItem} ${className ?? className}`}>
      <div
        className={s.imageContainer}
      >
        <img
          className={s.image}
          src={img}
          alt={"image"}
        />
        <AppLink
          to={preview}
          className={s.link}
        >
          <span>{t("Live preview")}</span>
        </AppLink>
      </div>

      <div className={s.content}>
        <h4 className={s.title}>{title}</h4>
        <div className={s.text}>{text}</div>
        <div className={s.stack}>
          <span>{"Tech stack: "}</span>
          {stackList.map((s, i) => {
            return <span key={s + i}>{s}</span>;
          })}
        </div>
      </div>
      <div className={s.linkWrapper}>
        <AppLink to={preview}>
          <span>{t("Live preview")}</span>
        </AppLink>
        <AppLink to={code}>
          <span>{t("View code")}</span>
        </AppLink>
      </div>
    </li>
  );
};
