import { Container } from "@/shared/ui/Container/Container";
import styled from "styled-components";

interface FooterProps {
  className?: string;
}
export const Footer = ({ className }: FooterProps) => {
  return (
    <StyledFooter>
      <div>
        <div>Logo</div>
        <div>Contacts</div>
      </div>
      <hr />
      <div>
        <div>Navbar</div>
        <div>Cp</div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(Container)``;
