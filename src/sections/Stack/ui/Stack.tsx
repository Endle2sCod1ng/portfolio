// 👇 Update SVG imports with ?react
import HtmlSvg from "@/shared/assets/img/stack/html.svg?react";
import CssSvg from "@/shared/assets/img/stack/css.svg?react";
import JsSvg from "@/shared/assets/img/stack/js.svg?react";
import ReactSvg from "@/shared/assets/img/stack/react.svg?react";
import ReduxSvg from "@/shared/assets/img/stack/redux.svg?react";
import BootstrapSvg from "@/shared/assets/img/stack/bootstrap.svg?react";
import TailwindSvg from "@/shared/assets/img/stack/tailwind.svg?react";
import SassSvg from "@/shared/assets/img/stack/sass.svg?react";
import GitSvg from "@/shared/assets/img/stack/git.svg?react";
import GreensockSvg from "@/shared/assets/img/stack/greensock.svg?react";
import VSCodeSvg from "@/shared/assets/img/stack/vscode.svg?react";
import GithubSvg from "@/shared/assets/img/stack/github.svg?react";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
import styled from "styled-components";

interface StackProps {
  className?: string;
}

const svgList = [
  HtmlSvg,
  CssSvg,
  JsSvg,
  ReactSvg,
  ReduxSvg,
  BootstrapSvg,
  TailwindSvg,
  SassSvg,
  GitSvg,
  GreensockSvg,
  VSCodeSvg,
  GithubSvg,
];

export const Stack = ({ className }: StackProps) => {
  return (
    <StyledStack className={`${className ?? ""}`}>
      <StackTitle>Tech stack</StackTitle>
      <StackSubitle> Technologies I’ve been working with recently</StackSubitle>
      <List as="ul">
        {svgList.map((svg, i) => (
          <Item key={i}>
            <AppSvg
              Svg={svg}
              viewBox={
                svg === GithubSvg || svg === BootstrapSvg
                  ? `0 0 88 88`
                  : `0 0 120 120`
              }
            />
          </Item>
        ))}
      </List>
    </StyledStack>
  );
};
const StyledStack = styled.section`
  /* padding: var(--section-indent-l) 0; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  text-align: center;
  border: 1px solid red;
`;

const StackTitle = styled.h2`
  padding: 0 0 var(--section-title-indent-l) 0;
`;

const StackSubitle = styled.h2`
  padding: 0 0 var(--section-subtitle-indent-l) 0;
`;

const List = styled.ul`
  gap: var(--stack-icons-indent-l) 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin: 0 auto; */
  @media (max-width: 767px) {
    justify-content: space-around;
  }
`;

const Item = styled.li`
  width: calc((var(--width-container-xl) / 6) - 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
