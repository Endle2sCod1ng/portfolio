import { Nav } from "@/features/Nav";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Container } from "@/shared/ui/Container/Container";

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
          <Socials>
            <li>
              <AppLink to="/">GH</AppLink>
            </li>
            <li>
              <AppLink to="/">X</AppLink>
            </li>
            <li>
              <AppLink to="/">IN</AppLink>
            </li>
          </Socials>

          <button
            onClick={() => {
              const newTheme = theme === "light" ? "dark" : "light";
              setTheme(newTheme);
              localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_THEME_KEY, newTheme);
            }}
          >
            Theme
          </button>
        </Content>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: var(--bg-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const StyledContainer = styled(Container)`
  height: var(--header-height);
  min-width: var(--width-container-min);
  max-width: var(--width-container-max);
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

const Socials = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
