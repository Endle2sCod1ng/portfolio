import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";

import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Logo />
        <div className={s.content}>
          <Nav />
          <Socials />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};
