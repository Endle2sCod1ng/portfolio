

import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

import s from "./AppLink.module.scss";

type AppLinkVariant = "clear";
type AppLinkColorType = "primary" | "accented";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
  colorType?: AppLinkColorType;
  className?: string;
}

export const AppLink = ({
  children,
  variant = "clear",
  colorType = "primary",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      className={`${s.appLink} ${s[variant]} ${s[colorType]} ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};
