import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { AppTextarea } from "@/shared/ui/AppTextarea";
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
      <StyledForm
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <AppInput
          className="field"
          type="text"
          placeholder={"Name"}
        />
        <AppInput
          className="field"
          type="text"
          placeholder={"Email"}
        />
        <AppTextarea
          className="field"
          name="message"
          id="message"
          placeholder={"Message"}
        />
        <AppButton
          className="btn"
          variant="filled"
        >
          {"Submit"}
        </AppButton>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled(Container)`
  padding: var(--section-indent-l) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 50%;
  width: 100%;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  .btn {
    margin: 0 auto;
  }
  .field {
    margin-bottom: 20px;
  }
`;
