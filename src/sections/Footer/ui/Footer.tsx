import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";
import EmailSvg from "@/shared/assets/img/email.svg?react";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo />
        <ContactsWrapper>
          <AppSvg
            viewBox="0 0 18 18"
            size="18"
            Svg={EmailSvg}
            varinat="filled"
          />
          <div>endlesscoding@yahoo.com</div>
          <Socials />
        </ContactsWrapper>
      </Wrapper>
      <hr />
      <Wrapper>
        <Nav />
        <div>Cp</div>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
