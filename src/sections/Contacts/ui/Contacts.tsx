import { Container } from "@/shared/ui/Container/Container";
import styled from "styled-components";

interface ContactsProps {
  className?: string;
}
export const Contacts = ({ className }: ContactsProps) => {
  return (
    <StyledContacts
      as="section"
      className={`${className ? className : ""}`}
    >
      <h2>{"For any questions"}</h2>
      <StyledForm action="#">
        <input
          type="text"
          placeholder={"Name"}
        />
        <input
          type="text"
          placeholder={"Email"}
        />
        <textarea
          name="message"
          id="message"
          placeholder={"Message"}
        ></textarea>
        <input
          type="button"
          value={"Submit"}
        />
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled(Container)``;
const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 50%;
  width: 100%;
  min-width: 330px;
  display: flex;
  flex-direction: column;
`;
