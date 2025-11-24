import styled from "styled-components";

export const Flex = styled.div<{
  direction?: "row" | "column" | "row-reverse";
  justify?:
    | "flex-start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
