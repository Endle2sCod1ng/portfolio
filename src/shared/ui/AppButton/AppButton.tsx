import type { ButtonHTMLAttributes, ReactNode } from "react";

import s from "./AppButton.module.scss";

type AppButtonVariant = "clear" | "outlined";
type AppButtonColorType = "primary" | "accented";
type BorderRadius = "xs" | "s" ;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  colorType?: AppButtonColorType;
  borderRadius?: BorderRadius;
  className?: string;
}

export const AppButton = ({
  children,
  type,
  variant = "clear",
  colorType = "primary",
  borderRadius = "xs",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      type={type}
      className={`${s.appButton} ${s[variant]} ${s[colorType]} ${
        className ? className : ""
      } ${s[borderRadius]}`}
    >
      {children}
    </button>
  );
};
