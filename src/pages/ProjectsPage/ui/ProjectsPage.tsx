import { Container } from "@/shared/ui/Container/Container";
import { Projects } from "@/widgets/Projects";

interface ProjectsPageProps {
  className?: string;
}
export const ProjectsPage = ({ className }: ProjectsPageProps) => {
  return (
    <Container className={`${className ? className : ""}`}>
      <Projects />
    </Container>
  );
};
