import { createContext } from "react";
import type { Theme } from "../lib/types";

// "theme" is the current theme value, and "toggleTheme" is a function that changes the theme
interface Props {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props | null>(null);
