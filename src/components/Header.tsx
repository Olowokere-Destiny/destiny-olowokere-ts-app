import { Link, NavLink } from "react-router-dom";
import logo from "../assets/bird.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { pagesLinks, themeList } from "../lib/constants";
import type { Theme } from "../lib/types";
import PaletteIcon from "./PaletteIcon";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const iconRef = useRef<HTMLDivElement>(null);
  const iconColor =
    theme === "light"
      ? "bg-white"
      : theme === "dark"
      ? "bg-black/80"
      : "bg-forest-700";

  const isForest = theme === "forest";

  const applyLinkClasses = (isActive: boolean) => {
    return `px-4 py-2 rounded-xl text-[var(--text)] ${
      isActive
        ? `bg-[var(--link-active-bg)] ${
            isForest ? "underline" : "no-underline"
          }`
        : `hover:bg-[var(--link-active-bg)] ${isForest && "hover:underline"}`
    }`;
  };

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

  // adding a rotating animation to palette icon on theme change
  useEffect(() => {
    iconRef.current?.classList.add("animate-spin");

    // timeout to stop icon animation at the right time
    const timeout = setTimeout(() => {
      iconRef.current?.classList.remove("animate-spin");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between px-4 py-2 md:px-8 w-full border-b border-[var(--list-border-color)] bg-[var(--header-bg)] max-h-[58px]">
      <Link to="/" className="flex items-center shrink-0">
        <img src={logo} alt="logo" className="size-10 shrink-0" />
        <span className="hidden md:block text-xl font-bold text-[var(--logo-colour)]">
          FlowCart
        </span>
      </Link>

      {theme !== "dark" && (
        <div className="flex gap-x-2 md:gap-x-4 items-center">
          {pagesLinks.map((link) => (
            <NavLink
              className={({ isActive }) => {
                return applyLinkClasses(isActive);
              }}
              key={link.route}
              to={link.route}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <div ref={dropdownRef} className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-x-2 cursor-pointer bg-slate-50 hover:bg-slate-200 px-2 py-1 rounded-md"
        >
          <div ref={iconRef}>
            <PaletteIcon />
          </div>

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
