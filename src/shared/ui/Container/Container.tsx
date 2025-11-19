import type { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <StyledContainer className={`${className ? className : ""}`}>
      {children}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: var(--width-container-max);
  width: 100%;
  min-width: var(--width-container-min);
`;
