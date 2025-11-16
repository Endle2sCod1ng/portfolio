import { Container } from "@/shared/ui/Container/Container";
import styled from "styled-components";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <Content>
        <Nav>
          <li>Home</li>
          <li>About</li>
          <li>Stack</li>
          <li>Projects</li>
          <li>Contacts</li>
        </Nav>
        <Socials>
          <li>GH</li>
          <li>X</li>
          <li>IN</li>
        </Socials>
      </Content>
    </StyledHeader>
  );
};

const StyledHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
`;
const Content = styled.div`
  display: flex;
  gap: 40px;
  list-style-type: none;
`;
const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
const Socials = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;
