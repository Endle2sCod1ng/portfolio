import { AppLink } from "@/shared/ui/AppLink/AppLink";
import type { Project } from "../Projects";

interface ProjectsItemProps {
  project: Project;
  className?: string;
}
export const ProjectsItem = ({ project, className }: ProjectsItemProps) => {
  const { img, title, content, stackList, preview, code } = project;
  return (
    <div className={`${className ? className : ""}`}>
      <img
        src={img}
        alt={"image"}
      />
      <h4>{title}</h4>
      <span>{content}</span>
      <div>
        <span>Tech stack:</span>
        {stackList.map((s, i) => {
          return <span key={s + i}>{s}</span>;
        })}
      </div>
      <div>
        <AppLink to={preview}>
          <span>Live preview</span>
        </AppLink>
        <AppLink to={code}>
          <span>Vie code</span>
        </AppLink>
      </div>
    </div>
  );
};
