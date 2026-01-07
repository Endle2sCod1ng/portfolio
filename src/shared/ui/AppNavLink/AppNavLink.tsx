import type { ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router";

import s from "./AppNavLink.module.scss";

type AppNavLinkVariant = "clear";
type AppNavLinkColorType = "primary" | "accented";

interface AppNavLinkProps extends NavLinkProps {
  children: ReactNode;
  variant?: AppNavLinkVariant;
  colorType?: AppNavLinkColorType;
  className?: string;
}

export const AppNavLink = ({
  children,
  variant = "clear",
  colorType = "primary",
  className,
  ...otherProps
}: AppNavLinkProps) => {
  return (
    <NavLink
      {...otherProps}
      className={({ isActive, isPending }) =>
        `${s.appNavLink} ${s[variant]} ${s[colorType]} ${
          isActive ? s.isActive : ""
        } ${isPending ? s.isPending : ""} ${className ? className : ""}`
      }
    >
      {children}
    </NavLink>
  );
};
