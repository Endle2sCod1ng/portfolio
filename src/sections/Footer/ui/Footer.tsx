// import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import s from "./Footer.module.css";
import { AppText } from "@/shared/ui/AppText/AppText";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <Socials />
      <AppText
        text={`© ${new Date().getFullYear()} ${t(`Viacheslav`)}, ${t(
          `All Rights Reserved`
        )}.`}
      />
    </footer>
  );
};
