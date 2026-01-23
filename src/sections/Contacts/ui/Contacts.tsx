import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { AppTextarea } from "@/shared/ui/AppTextarea";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { Container } from "@/shared/ui/Container/Container";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./Contacts.module.scss";

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
    <Container className={`${s.contacts} ${className ? className : ""}`}>
      <AppTitle className={s.title}>{t("For any questions")}</AppTitle>
      <form
        className={s.form}
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
          variant="outlined"
          colorType="accented"
          onClick={sendContacts}
          type="submit"
        >
          {t("Submit")}
        </AppButton>
      </form>
   
    </Container>
  );
};
