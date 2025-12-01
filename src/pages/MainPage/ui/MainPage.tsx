import { Container } from "@/shared/ui/Container/Container";
import { Banner } from "@/sections/Banner";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";
import { Contacts } from "@/sections/Contacts";
// import styled from "styled-components";

export const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Stack />
      <Projects />
      <Contacts />
    </Container>
  );
};
// const MainPageStyled = styled.div`
//   width: 100%;
//   max-width: var(--width-container-xl);
//   min-width: var(--width-container-min);
//   margin: 0 auto;
// `;
