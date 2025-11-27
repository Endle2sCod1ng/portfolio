import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}

export const AppButton = ({
  children,
  variant = "clear",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <StyledAppButton
      {...otherProps}
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
  
  ${(props) => {
    switch (props.$variant) {
      // case "clear":
      //   return css``
      default:
        return css`
          background: none;
          border: none;
        `;
    }
  }}
`;
