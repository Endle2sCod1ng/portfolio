import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styled from "styled-components";

const socials = [
  { name: "GH", link: "https://github.com/Endle2sCod1ng" },
  { name: "X-GH", link: "https://github.com/Endle2sCod1ng" },
  { name: "IN-GH", link: "https://github.com/Endle2sCod1ng" },
];

export const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((s, i) => {
        return (
          <li key={i + s.link}>
            <AppLink to={s.link}>{s.name}</AppLink>
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
