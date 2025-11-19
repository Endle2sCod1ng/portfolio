import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";


export const Footer = () => {
  return (
    <StyledFooter>
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

const StyledFooter = styled(Container)``;
