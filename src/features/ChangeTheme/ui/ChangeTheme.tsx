import { useTheme } from "@/app/providers/ThemeProvider/ui/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeIcon from "@/shared/assets/img/theme.svg?react";
import styled from "styled-components";


export const ChangeTheme = () => {
  const { changeTheme } = useTheme();

  return (
    <AppButton onClick={() => changeTheme?.()}>
      {/* <ThemeIcon /> */}
      <StyleThemeIcon />
    </AppButton>
  );
};

const StyleThemeIcon = styled(ThemeIcon)`
  fill: var(--inverted-bg-color)
`;
