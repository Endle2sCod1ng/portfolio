import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";
// import EmailSvg from "@/shared/assets/img/email.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <TopWrapper>
        <Logo />
        <ContactsWrapper>
          <div>endlesscoding@yahoo.com</div>
          <Socials />
        </ContactsWrapper>
      </TopWrapper>
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
  min-height: var(--footer-height);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
