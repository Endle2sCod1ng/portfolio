import { Stack } from "@/widgets/Stack";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <MainPageStyled>
      {/* <Form>
        <Field placeholder="Hello" />
        <Field />
        <Field />
        <Checkbox />
      </Form> */}
      <Stack />
    </MainPageStyled>
  );
};
const MainPageStyled = styled.div`
  width: 100%;
  max-width: var(--width-container-max);
  min-width: var(--width-container-min);
  margin: 0 auto;
`;