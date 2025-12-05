import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}
export type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const LOCAL_STORAGE_PORTFOLIO_THEME_KEY = "portfolio_theme";
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_PORTFOLIO_THEME_KEY) as Theme) || "dark"
  );

  useEffect(() => {
    document.body.className = `portfolio_theme_${theme}`;
  });
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_THEME_KEY, newTheme);
  };

  const defaultValue = { theme, changeTheme };

  return <ThemeContext value={defaultValue}>{children} </ThemeContext>;
};
