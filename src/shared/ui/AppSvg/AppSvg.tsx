// import styled from "styled-components";
// AppSvg definition moved here for completeness
import type { FC, SVGProps } from "react";

import s from "./AppSvg.module.scss";
type AppSvgVariant = "clear" | "filled";

type Size = "120" | "88" | "30" | "35" | "18";
interface AppSvgProps extends SVGProps<SVGSVGElement> {
  Svg: FC<SVGProps<SVGSVGElement>>;
  size?: Size;
  viewBox?: string;
  varinat?: AppSvgVariant;
  className?: string;
}

export const AppSvg = ({
  Svg,
  size = "120",
  viewBox = `0 0 120 120`,
  varinat = "clear",
  className,
  ...otherProps
}: AppSvgProps) => {
  return (
    <Svg
      {...otherProps}
      width={size}
      height={size}
      viewBox={viewBox}
      className={`${s.appSvg} ${varinat ?? s[varinat]} ${
        className ?? className
      }`}
    />
  );
};
