import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";

import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Content>
          <Nav />
          <Socials />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Content>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: var(--bg-color-98);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
`;

const StyledContainer = styled(Container)`
  height: var(--header-height);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style-type: none;
`;
