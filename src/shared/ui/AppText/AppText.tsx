import s from "./AppText.module.scss";

interface AppTextProps {
  text: string;
  Tag?: "div" | "span" | "p";
  className?: string;
}
export const AppText = ({ text, Tag = "div", className }: AppTextProps) => {
  return (
    <Tag className={`${s.appText} ${className ? className : ""}`}>{text}</Tag>
  );
};
