import type { ReactNode } from "react";
import s from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  as?: "section" | "div" | "header";
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${s.container} ${className ? className : ""}`}>
      {children}
    </div>
  );
};
