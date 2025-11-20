import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <div>
        <Logo />
        <div>Contacts</div>
      </div>
      <hr />
      <div>
        <div>Navbar</div>
        <div>Cp</div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: var(--width-container-max);
  width: 100%;
  min-width: var(--width-container-min);
`;
