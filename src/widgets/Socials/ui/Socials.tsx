import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";
import GithubSvg from "@/shared/assets/img/stack/github.svg?react";
import TelegrammSvg from "@/shared/assets/img/nav/telegramm.svg?react";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
const socials = [
  { svg: GithubSvg, link: "https://github.com/Endle2sCod1ng" },
  { svg: TelegrammSvg, link: "https://github.com/Endle2sCod1ng" },
];

export const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((soc, i) => {
        return (
          <li key={i + soc.link}>
            <AppLink to={soc.link}>
              {soc.svg === GithubSvg ? (
                <AppSvg
                  Svg={soc.svg}
                  viewBox={`0 0 88 88`}
                  size="30"
                  className="link"
                />
              ) : (
                <>
                  {/* <IconWrapper>
                    <AppSvg
                      viewBox="0 0 25 25"
                      size={`30`}
                      Svg={soc.svg}
                      className="link"
                    />
                  </IconWrapper> */}
                </>
              )}
            </AppLink>
          </li>
        );
      })}
    </StyledSocials>
  );
};

const StyledSocials = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 20px;
`;
// const IconWrapper = styled.div`
//   background: var(--inverted-bg-color);
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
