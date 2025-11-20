import type { SVGProps } from "react";
import Sprite from "@/shared/assets/img/sprite.svg";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  id: "html" ;
  size?: string;
  className?: string;
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
