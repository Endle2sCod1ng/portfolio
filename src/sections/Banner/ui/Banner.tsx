import Avatar from "@/shared/assets/img/banner/avatar.png";

import { Container } from "@/shared/ui/Container/Container";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { useTranslation } from "react-i18next";
import s from "./Banner.module.scss";
export const Banner = () => {
  const { t } = useTranslation();
  return (
    <Container
      className={s.banner}
      as="section"
    >
      <div className={s.textWrapper}>
        <AppTitle>{t("Hi")}</AppTitle>
        <AppTitle>{t("I'm Viacheslav")}</AppTitle>
        <AppTitle tagName="h1">{t("Front-end Developer")}</AppTitle>
      </div>
      <div className={s.imgWrapper}>
        <div className={`${s.imgBorder} `}>
          {Array(5)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i}>
                </div>
              );
            })}
        </div>

        <div className={s.imgBackground}>
          <div>
            <img
              className={s.img}
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
