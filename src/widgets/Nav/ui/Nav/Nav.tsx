import { routesConfig } from "@/shared/config/routesCpnfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./Nav.module.scss";
import { Burger } from "../Burger/Burger";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("isOpen");
    } else {
      document.body.classList.remove("isOpen");
    }
  }, [isOpen]);
  return (
    <nav
      className={`${s.nav} ${className ? className : ""}
    `}
    >
      <div
        className={`${s.listWrapper} ${isOpen ? s.isOpen : ""}`}
        aria-modal={true}
      >
        <ul
          className={`${s.list} ${isOpen ? s.isOpen : ""}`}
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
      </div>
      <Burger
        isOpen={isOpen}
        setIsOpen={(bool: boolean) => {
          setIsOpen(bool);
        }}
      />
    </nav>
  );
};
