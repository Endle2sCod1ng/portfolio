import type { ReactNode } from "react";
import s from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  TagName?: "section" | "header" | "footer";
  indent?: boolean;
  className?: string;
}
export const Container = ({
  children,
  TagName = "section",
  // indent = false,
  className,
}: ContainerProps) => {
  return (
    <TagName className={`${s.containerWrapper}`}>
      <div
        className={`${s.container} ${s.indent} ${className ? className : ""}`}
      >
        {children}
      </div>
    </TagName>
  );
};
