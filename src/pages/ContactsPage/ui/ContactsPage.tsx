import { Contacts } from "@/sections/Contacts";
import s from "./ContactsPage.module.scss";
import { Container } from "@/shared/ui/Container/Container";
interface ContactsPageProps {
  className?: string;
}
export const ContactsPage = ({ className }: ContactsPageProps) => {
  return (
    <Container className={`${s.contactsPage} ${className ? className : ""}`}>
      <Contacts />
    </Container>
  );
};
