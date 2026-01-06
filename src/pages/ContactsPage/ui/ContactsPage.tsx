import { Contacts } from "@/sections/Contacts";
import s from "./ContactsPage.module.scss";
import { useTranslation } from "react-i18next";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { Container } from "@/shared/ui/Container/Container";
interface ContactsPageProps {
  className?: string;
}
export const ContactsPage = ({ className }: ContactsPageProps) => {
  const { t } = useTranslation();
  return (
    <Container className={`${s.contactsPage} ${className ? className : ""}`}>
      <Contacts />
      <AppTitle className={s.title}>{t("For any questions")}</AppTitle>
      <AppTitle className={s.email}>{"endlesscoding@yahoo.com"}</AppTitle>
    </Container>
  );
};
