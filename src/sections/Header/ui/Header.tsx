import { useEffect, useState } from "react";

import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";

import { Logo } from "@/shared/ui/Logo/Logo";
import { Container } from "@/shared/ui/Container/Container";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

import styled from "styled-components";

type Theme = "light" | "dark";

export const Header = () => {
  const LOCAL_STORAGE_PORTFOLIO_THEME_KEY = "portfolio_theme";
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_PORTFOLIO_THEME_KEY) as Theme) || "dark"
  );

  useEffect(() => {
    document.body.className = ` portfolio_theme_${theme}`;
  });
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Content>
          <Nav />
          <Socials />

          <AppButton
            onClick={() => {
              const newTheme = theme === "light" ? "dark" : "light";
              setTheme(newTheme);
              localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_THEME_KEY, newTheme);
            }}
          >
            Theme
          </AppButton>
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
  gap: 40px;
  list-style-type: none;
`;
