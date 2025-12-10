import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";
import GithubSvg from "@/shared/assets/img/stack/github.svg?react";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
const socials = [
  { svg: GithubSvg, link: "https://github.com/Endle2sCod1ng" },
  // ,
  // { name: "X-GH", link: "https://github.com/Endle2sCod1ng" },
  // { name: "IN-GH", link: "https://github.com/Endle2sCod1ng" },
];

export const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((soc, i) => {
        return (
          <li key={i + soc.link}>
            <AppLink to={soc.link}>
              {" "}
              <AppSvg
                Svg={soc.svg}
                viewBox={`0 0 88 88`}
                size="30"
                className="link"
              />
            </AppLink>
          </li>
        );
      })}
    </StyledSocials>
  );
};

const StyledSocials = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
