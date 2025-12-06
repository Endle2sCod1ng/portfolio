import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";

import { Logo } from "@/shared/ui/Logo/Logo";
import { Container } from "@/shared/ui/Container/Container";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

import styled from "styled-components";
import { useTheme } from "@/app/providers/ThemeProvider/ui/useTheme";

export const Header = () => {
  const { changeTheme } = useTheme();

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Content>
          <Nav />
          <Socials />
          <AppButton onClick={() => changeTheme?.()}>Theme</AppButton>
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
