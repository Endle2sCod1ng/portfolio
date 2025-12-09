import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  const { t } = useTranslation();
  return (
    <StyledNav className={`${className ? className : ""}`}>
      {routesConfig.map((l) => (
        <li key={l.link}>
          <AppLink to={l.link}>
            {l.link === "/"
              ? `${t("Home")}`
              : l.link.slice(1).replace(l.link[1], l.link[1].toUpperCase())}
          </AppLink>
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
