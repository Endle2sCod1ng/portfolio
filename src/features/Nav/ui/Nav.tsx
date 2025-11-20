import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  return (
    <StyledNav className={`${className ? className : ""}`}>
      {routesConfig.map((l, i) => (
        <li key={i + l}>
          <AppLink to={l === "Home" ? "/" : `/${l.toLowerCase()}`}>{l}</AppLink>
        </li>
      ))}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
