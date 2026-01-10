import { Container } from "@/shared/ui/Container/Container";
import s from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <Container className={`${s.container} ${className ? className : ""}`}>
      <h2>Page Not Found</h2>
    </Container>
  );
};
