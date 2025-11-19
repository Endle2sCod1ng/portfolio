import styled from "styled-components";

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <StyledLogo
      href="#"
      className={`${className ? className : ""}`}
    >
      <span>{"Fort"}</span>
      <span>{"Code"}</span>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
