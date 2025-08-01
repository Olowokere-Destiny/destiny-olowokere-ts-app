import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../lib/types";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const lsTheme = localStorage.getItem("ts-theme") || "light";
  const [theme, setTheme] = useState(lsTheme as Theme);
  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("ts-theme", theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
