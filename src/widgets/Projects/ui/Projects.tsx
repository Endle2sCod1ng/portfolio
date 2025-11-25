import { ProjectsItem } from "./ProjectsItem/ProjectsItem";

interface ProjectsProps {
  className?: string;
}
export interface Project {
  img: string;
  title: string;
  content: string;
  stackList: string[];
  preview: string;
  code: string;
}
export const Projects = ({ className }: ProjectsProps) => {
  const projects: Project[] = [
    {
      img: "",
      title: "Portfolio",
      content:
        "This is my portfolio project,sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stackList: [" HTML", " JavaScript", "SASS", " React"],
      preview: "https://github.com/Endle2sCod1ng/portfolio",
      code: "https://github.com/Endle2sCod1ng/portfolio",
    },
  ];
  return (
    <section className={`${className ? className : ""}`}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      {projects.map((project) => {
        return Array(5)
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
    </section>
  );
};
