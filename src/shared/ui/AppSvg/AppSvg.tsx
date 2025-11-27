// import styled from "styled-components";
// AppSvg definition moved here for completeness
import type { FC, SVGProps } from "react";

import s from "./AppSvg.module.scss";

type Size = "112" | "120" | "105" | "88" | "30";
interface AppSvgProps extends SVGProps<SVGSVGElement> {
  Svg: FC<SVGProps<SVGSVGElement>>;
  size?: Size;
  viewBox?: string;
  className?: string;
}

export const AppSvg = ({
  Svg,
  size = "120",
  viewBox = `0 0 120 120`,
  className,
  ...otherProps
}: AppSvgProps) => {
  return (
    <Svg
      {...otherProps}
      width={size}
      height={size}
      viewBox={viewBox}
      className={`${s.appSvg} ${className ? className : ""}`}
    />
  );
};
