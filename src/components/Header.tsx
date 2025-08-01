import { Link } from "react-router-dom";
import logo from "../assets/bird.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeList } from "../lib/contstants";
import type { Theme } from "../lib/types";
import PaletteIcon from "./PaletteIcon";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const iconColor =
    theme === "light"
      ? "bg-white"
      : theme === "dark"
      ? "bg-black/80"
      : "bg-forest-700";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between px-4 py-2 md:px-8 w-full border-b border-[var(--list-border-color)] bg-[var(--header-bg)] backdrop-blur-[var(--blur)]">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="size-10" />
        <Link to="/" className="text-xl font-bold text-[var(--logo-colour)]">
          FlowCart
        </Link>
      </div>

      <div ref={dropdownRef} className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-x-2 cursor-pointer bg-slate-50 hover:bg-slate-200 px-2 py-1 rounded-md"
        >
          <PaletteIcon />

          <span
            className={`block border border-slate-300 size-4 rounded-full ${iconColor}`}
          ></span>
        </div>
        {open && (
          <div className="absolute top-8 bg-white right-2 rounded-md">
            <ul className="border border-slate-300 list-none rounded-md p-1">
              {themeList.map((theme) => (
                <li
                  key={theme.label}
                  className="px-2 py-1 cursor-pointer text-[var(--dropdown-text-color)] hover:bg-[var(--dropdown-text-hover)] hover:text-[var(--light-text)] flex items-center gap-x-2 justify-between rounded-sm"
                  onClick={() => {
                    toggleTheme(theme.value as Theme);
                    setOpen(false);
                  }}
                >
                  {theme.label}
                  {theme.icon}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
