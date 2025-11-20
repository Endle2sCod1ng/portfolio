import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Content>
        <Nav>
          {routesConfig.map((l, i) => (
            <li key={i + l}>
              <AppLink to={l === "Home" ? "/" : `/${l.toLowerCase()}`}>
                {l}
              </AppLink>
            </li>
          ))}
        </Nav>
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
      </Content>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: var(--header-height);
  margin: 0 auto;
  max-width: var(--width-container-max);
  width: 100%;
  min-width: var(--width-container-min);
`;
const Content = styled.div`
  display: flex;
  gap: 40px;
  list-style-type: none;
`;
const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
const Socials = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
