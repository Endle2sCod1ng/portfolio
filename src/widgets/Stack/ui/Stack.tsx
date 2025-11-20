import styled from "styled-components";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";

import HtmlSvg from "@/shared/assets/img/stack/html.svg";
import CssSvg from "@/shared/assets/img/stack/html.svg";
import JsSvg from "@/shared/assets/img/stack/html.svg";
import ReactSvg from "@/shared/assets/img/stack/html.svg";
import ReduxSvg from "@/shared/assets/img/stack/html.svg";
import BootstrapSvg from "@/shared/assets/img/stack/html.svg";
import TailwindSvg from "@/shared/assets/img/stack/html.svg";
import SassSvg from "@/shared/assets/img/stack/html.svg";
import GitSvg from "@/shared/assets/img/stack/html.svg";
import GreensockSvg from "@/shared/assets/img/stack/html.svg";
import VSCodeSvg from "@/shared/assets/img/stack/html.svg";
import GithubSvg from "@/shared/assets/img/stack/html.svg";

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
    <section className={`${className ?? ""}`}>
      <h2>Stack</h2>
      <List>
        {svgList.map((svg, i) => (
          <Item key={i}>
            <AppSvg Svg={svg} />
          </Item>
        ))}
      </List>
    </section>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  max-width: calc(var(--width-container-max) / 4);
  min-width: calc(var(--width-container-min) / 2);
  display: flex;
  justify-content: center;
`;
