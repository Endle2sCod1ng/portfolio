import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const AppLink = ({
  children,
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      className={`${className ? className : ""}`}
    >
      {children}
    </Link>
  );
};
