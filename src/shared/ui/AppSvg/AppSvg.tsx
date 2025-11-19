import type { FunctionComponent, SVGProps } from "react";

type Size = "112" | "120" | "105" | "88" | "30";
interface AppSvgProps extends SVGProps<SVGSVGElement> {
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  size?: Size;
  viewBox: `0 0 ${Size} ${Size}`;
  className?: string;
}

export const AppSvg = ({
  Svg,
  size = "120",
  className,
  ...otherProps
}: AppSvgProps) => {
  return (
    <Svg
      width={size}
      height={size}
      className={className ?? ""}
      {...otherProps}
    />
  );
};
