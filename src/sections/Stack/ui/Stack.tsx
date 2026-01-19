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

import { useTranslation } from "react-i18next";
import s from "./Stack.module.scss";
import { Pagination } from "@/features/Pagination";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { Container } from "@/shared/ui/Container/Container";

interface StackProps {
  className?: string;
}

const svgList = [
  ReactSvg,
  ReduxSvg,
  JsSvg,
  HtmlSvg,
  CssSvg,
  BootstrapSvg,
  TailwindSvg,
  SassSvg,
  GitSvg,
  GreensockSvg,
  VSCodeSvg,
  GithubSvg,
];

export const Stack = ({ className }: StackProps) => {
  const { t } = useTranslation();
  return (
    <Container
      indent={true}
      className={`${s.section} ${className ?? ""}`}
    >
      <AppTitle className={s.sectionTitle}>
        {t("Technologies I’ve been working with recently")}
      </AppTitle>
      <div className={s.listWrapper}>
        <ul className={s.list}>
          {svgList.map((svg, i) => (
            <li
              className={s.listItem}
              key={i}
            >
              <AppSvg
                className={s.svg}
                Svg={svg}
                viewBox={
                  svg === GithubSvg || svg === BootstrapSvg
                    ? `0 0 88 88`
                    : `0 0 120 120`
                }
              />
            </li>
          ))}
        </ul>
        <Pagination list={svgList} />
      </div>
    </Container>
  );
};
