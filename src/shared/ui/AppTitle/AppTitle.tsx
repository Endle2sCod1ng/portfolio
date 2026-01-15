import s from "./AppTitle.module.scss";

type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AppTitleProps {
  children: string;
  TagName?: TagName;
  className?: string;
}
export const AppTitle = ({
  children,
  TagName = "h3",
  className,
}: AppTitleProps) => {
  return (
    <TagName className={`${s.appTitle} ${className ? className : ""}`}>
      {children}
    </TagName>
  );
};
