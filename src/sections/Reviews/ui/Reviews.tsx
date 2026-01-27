import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Reviews.module.scss";

import QuotesSvg from "@/shared/assets/img/reviews/quotes.svg?react";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { useTranslation } from "react-i18next";
import { Container } from "@/shared/ui/Container/Container";
import { NSlider } from "@/widgets/Slider";

interface ReviewsProps {
  className?: string;
}
const reviewsList = [
  {
    id: "1",
    name: "User 1",
    text: "11111Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!",
  },
  {
    id: "2",
    name: "User 2",
    text: "22222Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!",
  },
  {
    id: "3",
    name: "User 3",
    text: "33333Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!",
  },
  {
    id: "4",
    name: "User 4",
    text: "444444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!",
  },
];
export const Reviews = ({ className }: ReviewsProps) => {
  const { t } = useTranslation();
  return (
    <Container className={`${s.section} ${className ? className : ""}`}>
      <AppTitle>{t("Reviews")}</AppTitle>
      <NSlider slides={reviewsList.map((r) => r.text)} />;
      <div className={s.slider}>
        <QuotesSvg />
        {/* <div className={s.slide}>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!"
          }
        </div>
        <div className={s.author}>
          {"@"}
          {"Author"}
        </div> */}
      </div>
      <div className={s.pagination}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <AppLink to="/reviews">{t("Write a review")}</AppLink>
    </Container>
  );
};
