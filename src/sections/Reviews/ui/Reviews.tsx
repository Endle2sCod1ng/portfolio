import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";

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
    <StyledReviews className={`${className ? className : ""}`}>
      <AppTitle>{t("Reviews")}</AppTitle>
      <Slider>
        {/* {reviewsList.map((r) => {
          return (
            <Slide key={r.id}>
              <div>{r.text}</div>
              <div>{r.name}</div>
            </Slide>
          );
        })} */}
        <QuotesSvg />
        <Slide>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla accusantium iure, nisi quos rerum dignissimos provident numquam magni cupiditate nostrum unde eos deleniti quisquam esse autem? Velit, consequuntur voluptatem!"
          }
        </Slide>
      </Slider>
      <div>
        <AppButton>{"<"}</AppButton>
        <AppButton>{">"}</AppButton>
      </div>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
      <AppLink to="/reviews">{t("Write a review")}</AppLink>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  padding: var(--section-indent-l) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Slide = styled.div`
  max-width: 600px;
  width: 100%;
  min-width: 320px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 7px;
    background: var(--inverted-bg-color);
    &:nth-child(2) {
      background: var(--acented-gradient-90);
    }
    cursor: pointer;
  }
`;
