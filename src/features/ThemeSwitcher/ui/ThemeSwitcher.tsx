import { useTheme } from "@/app/providers/ThemeProvider/ui/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeIcon from "@/shared/assets/img/theme.svg?react";
import styled from "styled-components";

export const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  return (
    <AppButton onClick={() => changeTheme?.()}>
      <StyleThemeIcon />
    </AppButton>
  );
};

const StyleThemeIcon = styled(ThemeIcon)`
  fill: var(--inverted-bg-color);
  transition: all linear var(--transtion-delay);
  &:hover {
    fill: var(--accented-color);
  }
`;
