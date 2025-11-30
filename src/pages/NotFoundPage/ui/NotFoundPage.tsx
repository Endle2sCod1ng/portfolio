import { Container } from "@/shared/ui/Container/Container";
import styled from "styled-components";

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <StyledNotFoundPage className={`${className ? className : ""}`}>
      <h2>Page Not Found</h2>
    </StyledNotFoundPage>
  );
};
const StyledNotFoundPage = styled(Container)`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
`;
