import type { SVGProps } from "react";
import Sprite from "@/shared/assets/img/sprite.svg";

type AppIconSize = "120" | "41";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  id: "html";
  size?: AppIconSize;
  className?: string;
  Svg: SVGProps<SVGSVGElement>;
}
export const AppIcon = ({
  id,
  size = "120",
  className,
  ...otherProps
}: AppIconProps) => {
  return (
    <svg
      {...otherProps}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`${className ? className : ""}`}
    >
      <use xlinkHref={`${Sprite}#${id}`}></use>
    </svg>
  );
};
