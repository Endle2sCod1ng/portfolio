import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router";
import styled, { css } from "styled-components";

type AppLinkVariant = "clear";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
  className?: string;
}

export const AppLink = ({
  children,
  variant = "clear",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <StyledAppLink
      {...otherProps}
      className={`${className ? className : ""}`}
      $variant={variant}
    >
      {children}
    </StyledAppLink>
  );
};

const StyledAppLink = styled(Link)<{ $variant: AppLinkVariant }>`
  ${(props) => {
    switch (props.$variant) {
      // case "clear":
      //   return css``;
      default:
        return css`
          &:hover {
            background-image: var(--acented-gradient);
            background-clip: text;
            color: transparent;
          }
        `;
    }
  }}
`;
