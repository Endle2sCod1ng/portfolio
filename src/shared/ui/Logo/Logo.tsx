import { AppLink } from "../AppLink/AppLink";
import s from "./Logo.module.scss";
interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <AppLink
      colorType="accented"
      to="/"
      className={`${s.logo} ${className ? className : ""}`}
    >
      <span>{"Fort"}</span>
      <span>{"Code"}</span>
    </AppLink>
  );
};
