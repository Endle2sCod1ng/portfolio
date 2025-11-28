import { Nav } from "@/features/Nav";
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
        <Nav />
        <div>Cp</div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: var(--width-container-xl);
  width: 100%;
  min-width: var(--width-container-min);
`;
