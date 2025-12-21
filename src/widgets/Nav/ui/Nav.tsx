import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import s from "./Nav.module.scss";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <nav
      className={`
    ${s.nav} 
    ${className ? className : ""}
    `}
    >
      <div
        className={`
          ${s.listWrapper}
          ${isOpen ? s.isOpen : ""}
         `}
        aria-modal={true}
      >
        <ul
          className={`
            ${s.list} 
          ${isOpen ? s.isOpen : ""}
          `}
          role="menu"
        >
          {routesConfig.map((l) => (
            <li
              key={l.link}
              role="menuitem"
            >
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
        </ul>
        <BurgerWrapper
          aria-haspopup={true}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          $isOpen={isOpen}
        >
          <Burger $isOpen={isOpen} />
        </BurgerWrapper>
      </div>
    </nav>
  );
};

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
