import Avatar from "@/shared/assets/img/banner/avatar.png";
import styled from "styled-components";

export const Banner = () => {
  return (
    <BannerStyled>
      <div>
        <span>Hi</span>
        <br />
        <span>I'm Viacheslav</span>
        <h1>Front-end Developer</h1>
      </div>
      <ImgBackground>
        <ImgWrapper>
          <Img
            src={Avatar}
            alt="avatar"
          />
        </ImgWrapper>
      </ImgBackground>
    </BannerStyled>
  );
};
const BannerStyled = styled.section`
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: space-between;
`;
const ImgBackground = styled.div`
  border-radius: 50%;
  width: 370px;
  height: 370px;
  background: var(--acented--gradient);
`;
const ImgWrapper = styled.div`
  content: "";
  width: 350px;
  height: 350px;
  border-radius: 50%;
  
  display: flex;
  align-content: center;
  justify-content: center;

  transform: translate3d(10px, 10px, 0);
  overflow: hidden;
`;
const Img = styled.img`
  height: 100%;
`;
