import { ProjectsItem } from "./ProjectsItem/ProjectsItem";
import styled, { css } from "styled-components";

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
import Image from "@/shared/assets/img/projects/avatar.png";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
const projects: Project[] = [
  {
    img: Image,
    title: "Todolist",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/todolist",
    code: "https://github.com/Endle2sCod1ng/todolist",
  },
  {
    img: Image,
    title: "Portfolio",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: Image,
    title: "React",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: Image,
    title: "Vue",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "Vue"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: Image,
    title: "Angular",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "Angular"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
  {
    img: Image,
    title: "React Native",
    text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stackList: ["HTML", " JavaScript", "SASS", "React Native"],
    preview: "https://github.com/Endle2sCod1ng/portfolio",
    code: "https://github.com/Endle2sCod1ng/portfolio",
  },
];
const PAGINATION = ["All", "React", "Vue", "Angular", "React Native"] as const;

export const Projects = ({ className }: ProjectsProps) => {
  const [activeBtn, setActiveBtn] =
    useState<(typeof PAGINATION)[number]>("All");
  const { t } = useTranslation();
  return (
    <ProjectsStyled className={`${className ? className : ""}`}>
      {/* <ProjectsTitle>Projects</ProjectsTitle> */}
      <ProjectsSubitle>{t("Things I’ve built so far")}</ProjectsSubitle>
      <Pagination>
        {PAGINATION.map((c) => (
          <PaginationItem
            $activeBtn={c === activeBtn}
            onClick={() => setActiveBtn(c)}
          >
            {t(`${c}`)}
          </PaginationItem>
        ))}
      </Pagination>
      <ProjectsWrapper>
        {projects.filter((p: Project) =>
          activeBtn === "All" ? p : p.stackList.join(",").includes(activeBtn)
        ).length !== 0 ? (
          projects
            .filter((p: Project) =>
              activeBtn === "All"
                ? p
                : p.stackList.join(",").includes(activeBtn)
            )
            .map((project) => {
              return (
                <ProjectsItem
                  key={project.title}
                  project={project}
                />
              );
            })
        ) : (
          <Stub>
            <h3>{t("Projects using this technology in development")}</h3>
          </Stub>
        )}
      </ProjectsWrapper>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const ProjectsTitle = styled(AppTitle)`
//   padding: 0 0 var(--section-title-indent-l) 0;
// `;

const ProjectsSubitle = styled.h2`
  padding: 0 0 60px 0;
`;

const Pagination = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 0 50px 0;
`;

const PaginationItem = styled(AppButton)<{ $activeBtn: boolean }>`
  ${(props) =>
    props.$activeBtn
      ? css`
          background-image: var(--acented-gradient);
          background-clip: text;
          color: transparent;
        `
      : undefined}
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Stub = styled.div`
  height: 570px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
