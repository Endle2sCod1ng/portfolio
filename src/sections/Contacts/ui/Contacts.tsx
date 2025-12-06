import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { AppTextarea } from "@/shared/ui/AppTextarea";
import { Container } from "@/shared/ui/Container/Container";
import { useState } from "react";
import styled from "styled-components";

interface ContactsProps {
  className?: string;
}
export const Contacts = ({ className }: ContactsProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [meassage, setMessage] = useState<string>("");

  const sendContacts = () => {
    console.log("name", name);
    console.log("phone", phone);
    console.log("email", email);
    console.log("telegramm", telegramm);
    console.log("meassage", meassage);
  };
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
          inputValue={name}
          onChangeValue={(value: string) => setName(value)}
        />
        <AppInput
          className="field"
          type="tel"
          placeholder={"Phone"}
          inputValue={phone}
          onChangeValue={(value: string) => setPhone(value)}
        />
        <AppInput
          className="field"
          type="text"
          placeholder={"Email"}
          inputValue={email}
          onChangeValue={(value: string) => setEmail(value)}
        />
        <AppTextarea
          className="field"
          name="message"
          id="message"
          placeholder={"Message"}
          inputValue={meassage}
          onChangeValue={(value: string) => setMessage(value)}
        />
        <AppButton
          className="btn"
          variant="filled"
          onClick={sendContacts}
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
  gap: 20px;
  .btn {
    margin: 0 auto;
  }
  .field {
    /* margin-bottom: 20px; */
  }
`;
