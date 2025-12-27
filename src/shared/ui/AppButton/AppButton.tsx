import type { ButtonHTMLAttributes, ReactNode } from "react";

import s from "./AppButton.module.scss";

type AppButtonVariant = "clear" | "filled" | "outlined";
type AppButtonColorType = "primary" | "accentedGradient";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  colorType?: AppButtonColorType;
  className?: string;
}

export const AppButton = ({
  children,
  type,
  variant = "clear",
  colorType = "primary",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      type={type}
      className={`${s.appButton} ${s[variant]} ${s[colorType]} ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};
