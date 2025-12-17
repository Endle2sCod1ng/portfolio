import { AppButton } from "@/shared/ui/AppButton/AppButton";
import styled from "styled-components";

export const ScrollTop = () => {
  return (
    <StyledScrollTop
      variant="outlined"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {">"}
    </StyledScrollTop>
  );
};
const StyledScrollTop = styled(AppButton)`
  position: fixed;
  z-index: var() var(--scroll-top-z-index);
  transform: rotateZ(-90deg);
  top: calc(100vh - 50px);
  right: 20px;
  /* color: red; */
`;
