import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/shared/ui/Logo/Logo";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <Flex>
        <Logo />
        <Socials />
      </Flex>
      <hr />
      <Flex>
        <Nav />
        <div>Cp</div>
      </Flex>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: var(--width-container-xl);
  width: 100%;
  min-width: var(--width-container-min);
  min-height: var(--footer-height);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`;
