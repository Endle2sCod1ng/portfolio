import { createContext } from "react";
import type { Theme } from "./ThemeProvider";

export interface ThemeContextValue {
  theme?: Theme;
  changeTheme?: () => void;
}
export const ThemeContext = createContext<ThemeContextValue>({});
