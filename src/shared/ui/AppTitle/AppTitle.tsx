import styled, { css } from "styled-components";

type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface AppTitleProps {
  children: string;
  tagName?: TagName;
  className?: string;
}
export const AppTitle = ({
  children,
  tagName = "h2",
  className,
}: AppTitleProps) => {
  return (
    <StyledAppTitle
      as={tagName}
      $tagName={tagName}
      className={`${className ? className : ""}`}
    >
      {children}
    </StyledAppTitle>
  );
};

export const StyledAppTitle = styled.div<{ $tagName: TagName }>`
  ${(props) => {
    switch (props.$tagName) {
      case "h1":
        return css`
          background-image: var(--acented-gradient);
          background-clip: text;
          color: transparent;
        `;
      case "h2":
        return css`
          color: var(--title-color);
        `;
      default:
        return css``;
    }
  }}
`;
