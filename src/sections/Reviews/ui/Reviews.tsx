import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Reviews.module.scss";

import QuotesSvg from "@/shared/assets/img/reviews/quotes.svg?react";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { useTranslation } from "react-i18next";

interface ReviewsProps {
  className?: string;
}
// const reviewsList = [
//   { id: "1", name: "User 1", text: "Review1" },
//   { id: "2", name: "User 2", text: "Review2" },
//   { id: "3", name: "User 3", text: "Review3" },
//   { id: "4", name: "User 4", text: "Review4" },
// ];
export const Reviews = ({ className }: ReviewsProps) => {
  const { t } = useTranslation();
  return (
    <section className={`${s.section} ${className ? className : ""}`}>
      <AppTitle>{t("Reviews")}</AppTitle>
      <div className={s.slider}>
        {/* {reviewsList.map((r) => {
          return (
            <Slide key={r.id}>
              <div>{r.text}</div>
              <div>{r.name}</div>
            </Slide>
          );
        })} */}
        <QuotesSvg />
        <div className={s.slide}>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!"
          }
        </div>
      </div>
      <div>
        <AppButton>{"<"}</AppButton>
        <AppButton>{">"}</AppButton>
      </div>
      <div className={s.pagination}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <AppLink to="/reviews">{t("Write a review")}</AppLink>
    </section>
  );
};
