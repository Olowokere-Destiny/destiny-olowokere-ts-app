import { createContext } from "react";
import type { Theme } from "../lib/types";

interface Props {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}
export const ThemeContext = createContext<Props | null>(null);
