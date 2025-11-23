import type { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
  as?: "section" | "div" | "header" | "footer";
  className?: string;
}
export const Container = ({
  children,
  as = "div",
  className,
}: ContainerProps) => {
  return (
    <StyledContainer
      as={as}
      className={`${className ? className : ""}`}
    >
      {children}
    </StyledContainer>
  );
};
export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: var(--width-container-max);
  min-width: var(--width-container-min);
`;
