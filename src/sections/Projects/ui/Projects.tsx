import { ProjectsItem } from "./ProjectsItem/ProjectsItem";
import s from "./Projects.module.scss";
import AvaImg from "@/shared/assets/img/projects/avatar.png";
import PortfolioImg from "@/shared/assets/img/projects/portfolio.png";
import TodolistImg from "@/shared/assets/img/projects/todolist.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "@/features/Pagination";
import { Container } from "@/shared/ui/Container/Container";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface ProjectsProps {
  className?: string;
}
export interface Project {
  img: string;
  title: string;
  text: string;
  stackList: string[];
  preview: string;
  code: string;
}

const projects: Project[] = [
  {
    img: TodolistImg,
    title: "Todolist",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/todolist",
    code: "https://github.com/Endle2sCod1ng/todolist",
  },
  {
    img: PortfolioImg,
    title: "Portfolio",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: AvaImg,
    title: "React",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: AvaImg,
    title: "Vue",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "Vue"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: AvaImg,
    title: "Angular",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "Angular"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: AvaImg,
    title: "React Native",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React Native"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
];

const PAGINATION = [
  "All",
  "React",
  "Vue",
  "Angular",
  "React Native",
  "NodeJs",
  "Python",
] as const;

export const Projects = ({ className }: ProjectsProps) => {
  const [activeBtn, setActiveBtn] =
    useState<(typeof PAGINATION)[number]>("All");

  // const [slideNum, setSlideNum] = useState<number>(0);

  const [slideNum] = useState<number>(0);

  const { t } = useTranslation();
  return (
    <Container
      indent
      className={`${s.section} ${className ? className : ""}`}
    >
      <h2 className={s.title}>{t("Things I’ve built so far")}</h2>
      <ul className={s.pagination}>
        {PAGINATION.map((c, i) => (
          <li key={c + i}>
            <button
              onClick={() => setActiveBtn(c)}
              className={`${s.paginationItem} ${
                activeBtn === c ? s.active : ""
              }`}
            >
              {t(`${c}`)}
            </button>
          </li>
        ))}
      </ul>

      <div className={s.listWrapper}>
        {projects.filter((p: Project) =>
          activeBtn === "All" ? p : p.stackList.join(",").includes(activeBtn),
        ).length !== 0 ? (
          <ul className={s.list}>
            {projects
              .filter((p: Project) =>
                activeBtn === "All"
                  ? p
                  : p.stackList.join(",").includes(activeBtn),
              )
              .map((project, i) => {
                return (
                  <ProjectsItem
                    className={`${s.projectItem} ${
                      i === slideNum ? s.activeItem : ""
                    }`}
                    key={project.title + i}
                    project={project}
                  />
                );
              })}
          </ul>
        ) : (
          <div className={s.stub}>
            <h3>{t("Projects using this technology in development")}</h3>
          </div>
        )}
        <Pagination list={projects} />
        <AppLink
          className={s.navLink}
          to={"/projects"}
        >
          {t("All projects")}
          {" >"}
        </AppLink>
      </div>
    </Container>
  );
};
