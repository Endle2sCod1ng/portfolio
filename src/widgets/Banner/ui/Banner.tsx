import styled from "styled-components";
import Avatar from "@/shared/assets/img/banner/avatar.png";
import { Flex } from "@/shared/ui/Flex/Flex";

export const Banner = () => {
  return (
    <BannerStyled
      as="section"
      justify="space-between"
      align="center"
    >
      <Flex
        direction="column"
        align="flex-start"
      >
        <h2>Hi</h2>
        <h2>I'm Viacheslav</h2>
        <h1>Front-end Developer</h1>
      </Flex>
      <ImgWrapper
        justify="center"
        align="center"
      >
        {Array(5)
          .fill("")
          .map((_, i) => {
            console.log(i);

            return (
              <ImageBorder $angle={`-${(Number(i) + 1) * 15}`}>
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
const BannerStyled = styled(Flex)`
  padding: var(--section-indent-l) 0;
  min-height: 720px;
  height: calc(100vh - var(--header-height));
  border: 1px solid red;
`;

const ImgWrapper = styled(Flex)`
  border-radius: 50%;
  width: 444px;
  height: 444px;
  position: relative;
`;

const ImageBorder = styled.div<{ $angle: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: rotateZ(${(props) => props.$angle}deg);
  z-index: 0;
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
  z-index: 2;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  background: var(--acented--gradient);
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

  /* position: absolute; */
`;
