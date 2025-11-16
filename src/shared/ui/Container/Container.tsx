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
  max-width: 1600px;
  width: 100%;
  min-width: 360px;
`;
