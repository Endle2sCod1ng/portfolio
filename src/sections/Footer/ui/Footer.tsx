// import { Nav } from "@/widgets/Nav";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/shared/ui/Logo/Logo";
import EmailSvg from "@/shared/assets/img/email.svg?react";
import { AppSvg } from "@/shared/ui/AppSvg/AppSvg";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <Logo className={s.logo} />
        <div className={s.contactsWrapper}>
          <AppSvg
            viewBox="0 0 18 18"
            size="18"
            Svg={EmailSvg}
            varinat="filled"
          />
          <div>endlesscoding@yahoo.com</div>
        </div>
        <Socials />
      </div>
      {/* <hr /> */}
      {/* <div className={s.wrapper}> */}
      {/* <Nav /> */}
      {/* <div>Cp</div> */}
      {/* <div>Cp</div> */}
      {/* </div> */}
    </footer>
  );
};
