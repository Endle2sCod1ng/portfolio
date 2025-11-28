import { Banner } from "@/widgets/Banner";
import { Projects } from "@/widgets/Projects";
import { Stack } from "@/widgets/Stack";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <MainPageStyled>
      <Banner />
      <Stack />
      <Projects />
    </MainPageStyled>
  );
};
const MainPageStyled = styled.div`
  width: 100%;
  max-width: var(--width-container-xl);
  min-width: var(--width-container-min);
  margin: 0 auto;
`;
