import Avatar from "@/shared/assets/img/banner/avatar.png";
import styled from "styled-components";

export const Banner = () => {
  return (
    <BannerStyled>
      <div>
        <h2>Hi</h2>
        <h2>I'm Viacheslav</h2>
        <h1>Front-end Developer</h1>
      </div>
      <ImgWrapper>
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
          <div></div>
          {/* <Img
            src={Avatar}
            alt="avatar"
          /> */}
        </ImgBackground>
      </ImgWrapper>
    </BannerStyled>
  );
};
const BannerStyled = styled.section`
  min-height: 800px;
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

const ImgWrapper = styled.div`
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
  div {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5)
    );
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
  /* position: absolute;
  width: 350px;
  height: 350px;
  div {
    &:before {
      position: absolute;
      border-radius: 50%;
      content: "";
      top: -10px;
      left: -10px;
      width: 370px;
      height: 370px;
      z-index: 1;
      background: var(--acented--gradient);
    }
  } */
`;

const Img = styled.img`
  height: 100%;
`;
// const ImgWrapper = styled.div`
//   content: "";
//   width: 350px;
//   height: 350px;
//   border-radius: 50%;

//   display: flex;
//   align-content: center;
//   justify-content: center;

//   transform: translate3d(10px, 10px, 0);
//   overflow: hidden;
// `;
