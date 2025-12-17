import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <StyledNav className={`${className ? className : ""}`}>
      <ListWrapper $isOpen={isOpen}>
        <List $isOpen={isOpen}>
          {routesConfig.map((l) => (
            <li key={l.link}>
              <AppLink
                onClick={() => {
                  setIsOpen(false);
                }}
                to={l.link}
              >
                {l.link === "/"
                  ? `${t("Home")}`
                  : `${t(
                      l.link
                        .slice(1)
                        .replace(l.link[1], l.link[1].toUpperCase())
                    )}`}
              </AppLink>
            </li>
          ))}
        </List>
        <BurgerWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          $isOpen={isOpen}
        >
          <Burger $isOpen={isOpen} />
        </BurgerWrapper>
      </ListWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;
const ListWrapper = styled.div<{ $isOpen: boolean }>`
  /* transform: translateY(-100%); */
  /* transition: transform linear 1s; */
  ${(props) =>
    props.$isOpen === true &&
    css`
      background: var(--bg-color);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* transform: translateY(0); */
      /* transition: transform linear 1s; */
    `}
`;
const List = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  gap: 20px;
  @media (max-width: 767px) {
    display: none;
    flex-direction: column;
    ${(props) =>
      props.$isOpen === true &&
      css`
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid var(--primary-color);
          &:last-child {
            border: none;
          }
        }
      `}
  }
`;

const BurgerWrapper = styled.div<{ $isOpen: boolean }>`
  padding: 20px;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    display: block;
    ${(props) =>
      props.$isOpen === true &&
      css`
        position: absolute;
        top: 20px;
        right: 20px;
      `}
  }
`;

const Burger = styled.span<{ $isOpen: boolean }>`
  width: 40px;
  content: "";
  height: 3px;
  background: var(--inverted-bg-color);
  display: block;
  position: relative;
  transition: all linear var(--transtion-delay);
  &::before {
    transition: all linear var(--transtion-delay);
    top: -8px;
    position: absolute;
    content: "";
    width: 40px;
    height: 3px;
    background: var(--inverted-bg-color);
    z-index: var(--burger-z-index);
  }
  &::after {
    transition: all linear var(--transtion-delay);
    top: 8px;
    position: absolute;
    content: "";
    width: 40px;
    height: 3px;
    background: var(--inverted-bg-color);
    z-index: var(--burger-z-index);
  }
  ${(props) =>
    props.$isOpen === true
      ? css`
          background: transparent;
          &::before {
            top: 0;
            transform: rotateZ(45deg);
          }
          &::after {
            top: 0;
            transform: rotateZ(-45deg);
          }
        `
      : css``}
`;
