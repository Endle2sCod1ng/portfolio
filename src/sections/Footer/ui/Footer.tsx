// import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import s from "./Footer.module.scss";
import { AppText } from "@/shared/ui/AppText/AppText";
import { useTranslation } from "react-i18next";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <Socials />
      <AppTitle
        TagName="h5"
        className={s.email}
      >
        {"endlesscoding@yahoo.com"}
      </AppTitle>
      <AppText
        className={s.cp}
        text={`© ${new Date().getFullYear()} ${t(`Viacheslav`)}, ${t(
          `All Rights Reserved`
        )}.`}
      />
    </footer>
  );
};
