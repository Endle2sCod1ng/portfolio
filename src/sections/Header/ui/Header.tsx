import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";

import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <Container
      TagName="header"
      className={`${s.header}`}
    >
      <Logo />
      <div className={s.content}>
        <Nav />
        <Socials className={s.socials} />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </Container>
  );
};
