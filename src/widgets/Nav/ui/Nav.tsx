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
      <List>
        {routesConfig.map((l) => (
          <li key={l.link}>
            <AppLink to={l.link}>
              {l.link === "/"
                ? `${t("Home")}`
                : `${t(
                    l.link.slice(1).replace(l.link[1], l.link[1].toUpperCase())
                  )}`}
            </AppLink>
          </li>
        ))}
      </List>
      <BurgerWrapper>
        <Burger />
      </BurgerWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  padding: 20px;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    display: block;
  }
  &:hover {
    span {
      transition: all linear var(--transtion-delay);
      background: transparent;
      &::before {
        top: 0;
        transform: rotateZ(45deg);
      }
      &::after {
        top: 0;
        transform: rotateZ(-45deg);
      }
    }
  }
`;

const Burger = styled.span`
  width: 40px;
  transition: all linear 1s;
  content: "";
  height: 3px;
  background: var(--inverted-bg-color);
  display: block;
  position: relative;
  &::before {
    transition: all linear var(--transtion-delay);
    top: -8px;
    position: absolute;
    content: "";
    width: 40px;
    height: 3px;
    background: var(--inverted-bg-color);
  }
  &::after {
    transition: all linear var(--transtion-delay);
    top: 8px;
    position: absolute;
    content: "";
    width: 40px;
    height: 3px;
    background: var(--inverted-bg-color);
  }
`;
