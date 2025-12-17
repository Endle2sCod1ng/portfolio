import styled from "styled-components";
import Avatar from "@/shared/assets/img/banner/avatar.png";

import { Container } from "@/shared/ui/Container/Container";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <BannerStyled as="section">
      <TextWrapper>
        <AppTitle>{t("Hi")}</AppTitle>
        <AppTitle>{t("I'm Viacheslav")}</AppTitle>
        <AppTitle tagName="h1">{t("Front-end Developer")}</AppTitle>
      </TextWrapper>
      <ImgWrapper>
        {Array(5)
          .fill("")
          .map((_, i) => {
            return (
              <ImageBorder
                key={i}
                $angle={`-${(Number(i) + 1) * 15}`}
              >
                <div></div>
              </ImageBorder>
            );
          })}

        <ImgBackground>
          <div>
            <Img
              src={Avatar}
              alt="avatar"
            />
          </div>
        </ImgBackground>
      </ImgWrapper>
    </BannerStyled>
  );
};

const BannerStyled = styled(Container)`
  padding: var(--section-indent-l) 0;
  min-height: 720px;
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImgWrapper = styled.div`
  border-radius: 50%;
  width: 444px;
  height: 444px;
  position: relative;
  padding: 20px;
`;

const ImageBorder = styled.div<{ $angle: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: rotateZ(${(props) => props.$angle}deg);
  z-index: var(--banner-img-border-z-index);
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--image-border-gradient);
    &:before {
      content: "";
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      background: var(--bg-color);
    }
  }
`;

const ImgBackground = styled.div`
  position: absolute;
  z-index: var(--banner-img-background-z-index);
  border-radius: 50%;
  width: 370px;
  height: 370px;
  background: var(--acented-gradient);
  padding: 10px;
  & > div {
    overflow: hidden;
    border-radius: 50%;
    width: 350px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
