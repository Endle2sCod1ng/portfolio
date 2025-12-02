import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear" | "filled";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}

export const AppButton = ({
  children,
  type,
  variant = "clear",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <StyledAppButton
      {...otherProps}
      type={type}
      className={`${className ? className : ""}`}
      $variant={variant}
    >
      {children}
    </StyledAppButton>
  );
};

const StyledAppButton = styled.button<{ $variant: AppButtonVariant }>`
  color: inherit;
  cursor: pointer;
  padding: 8px 12px;
  transition: all linear var(--transtion-delay);

  ${(props) => {
    switch (props.$variant) {
      case "filled":
        return css`
          border-radius: var(--border-radius-s);
          background: var(--acented-gradient);
          border: 2px solid transparent;
          background: var(--acented-gradient) border-box;
          color: var(--bg-color);
/* 
          &:hover {
            background-image: var(--acented-gradient);
            background-clip: text;
            color: transparent;
            border: 2px solid transparent;
            background: linear-gradient(var(--bg-color))
          } */
        `;
      default:
        return css`
          background: none;
          border: none;
          &:hover {
            background-image: var(--acented-gradient);
            background-clip: text;
            color: transparent;
          }
        `;
    }
  }}
`;
