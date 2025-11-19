import styled from "styled-components";

import HtmlSvg from "@/shared/assets/img/stack/html.svg";

interface StackProps {
  className?: string;
}

export const Stack = ({ className }: StackProps) => {
  return (
    <section className={`${className ? className : ""}`}>
      <h2>Stack</h2>
      <HtmlSvg />
    </section>
  );
};

// const StyledSvg = styled.svg`
//   width: 200px;
//   height: 200px;
// `;

// const StyledSvgUSe = styled.use`
//   width: 200px;
//   height: 200px;
// `;
