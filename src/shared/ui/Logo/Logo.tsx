import styled from "styled-components";
import { AppLink } from "../AppLink/AppLink";

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <StyledLogo
      to="/"
      className={`${className ? className : ""}`}
    >
      <span>{"Fort"}</span>
      <span>{"Code"}</span>
    </StyledLogo>
  );
};

const StyledLogo = styled(AppLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
