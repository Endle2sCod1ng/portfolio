import { Flex } from "@/shared/ui/Flex/Flex";
import { ProjectsItem } from "./ProjectsItem/ProjectsItem";
import styled from "styled-components";

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
export const Projects = ({ className }: ProjectsProps) => {
  const projects: Project[] = [
    {
      img: Image,
      title: "Portfolio",
      text: "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stackList: [" HTML", " JavaScript", "SASS", " React"],
      preview: "https://github.com/Endle2sCod1ng/portfolio",
      code: "https://github.com/Endle2sCod1ng/portfolio",
    },
  ];
  return (
    <ProjectsStyled className={`${className ? className : ""}`}>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsSubitle>Things I’ve built so far</ProjectsSubitle>
      <Flex
        wrap="wrap"
        justify="space-between"
      >
        {projects.map((project) => {
          return Array(6)
            .fill(project)
            .map((project) => {
              return (
                <ProjectsItem
                  key={project.title}
                  project={project}
                />
              );
            });
        })}
      </Flex>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsTitle = styled.h2`
  padding: 0 0 var(--section-title-indent-l) 0;
`;
const ProjectsSubitle = styled.h2`
  padding: 0 0 var(--section-subtitle-indent-l) 0;
`;
