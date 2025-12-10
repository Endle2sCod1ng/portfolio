import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear" | "filled" | "outlined";

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
      case "outlined":
        return css`
          border-radius: var(--border-radius-s);
          border: 2px solid var(--accented-color);
          background: transparent;
          &:hover {
            background: linear-gradient(var(--bg-color), var(--bg-color))
                padding-box,
              var(--acented-gradient) border-box;
            border: 2px solid transparent;

            color: var(--primary-color);
          }
        `;
      case "filled":
        return css`
          border-radius: var(--border-radius-s);
          border: 2px solid transparent;
          background: var(--accented-color);
          color: white;
          &:hover {
            background: linear-gradient(var(--bg-color), var(--bg-color))
                padding-box,
              var(--acented-gradient) border-box;
            border: 2px solid transparent;

            color: var(--primary-color);
          }
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
