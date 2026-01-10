import { useTheme } from "@/app/providers/ThemeProvider/ui/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeIcon from "@/shared/assets/img/theme.svg?react";
import s from "./ThemeSwitcher.module.scss";
export const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  return (
    <AppButton onClick={() => changeTheme?.()}>
      <ThemeIcon className={s.themeIcon} />
    </AppButton>
  );
};
