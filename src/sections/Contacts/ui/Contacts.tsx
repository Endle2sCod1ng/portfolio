import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { AppTextarea } from "@/shared/ui/AppTextarea";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { Container } from "@/shared/ui/Container/Container";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
    console.log("meassage", meassage);
  };
  const { t } = useTranslation();

  return (
    <StyledContacts
      as="section"
      className={`${className ? className : ""}`}
    >
      <AppTitle>{t("For any questions")}</AppTitle>
      <StyledForm
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <AppInput
          className="field"
          type="text"
          placeholder={t("Name")}
          inputValue={name}
          onChangeValue={(value: string) => setName(value)}
        />
        <AppInput
          className="field"
          type="tel"
          placeholder={t("Phone")}
          inputValue={phone}
          onChangeValue={(value: string) => setPhone(value)}
        />
        <AppInput
          className="field"
          type="text"
          placeholder={t("Email")}
          inputValue={email}
          onChangeValue={(value: string) => setEmail(value)}
        />
        <AppTextarea
          className="field"
          name="message"
          id="message"
          placeholder={t("Message")}
          inputValue={meassage}
          onChangeValue={(value: string) => setMessage(value)}
        />
        <AppButton
          className="btn"
          variant="filled"
          onClick={sendContacts}
          type="submit"
        >
          {t("Submit")}
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
