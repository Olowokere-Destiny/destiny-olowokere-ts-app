import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { pagesLinks } from "../lib/constants";
import { NavLink } from "react-router-dom";

type Props = {
  sidebarOpen: boolean;
};
const Sidebar = ({sidebarOpen}:Props) => {
  const { theme } = useContext(ThemeContext)!;
  if (theme !== "dark" || !sidebarOpen) return null;
  return (
    // using aside tag for better accessibility
    <aside className="fixed w-[250px] lg:w-[300px] min-h-[calc(100vh-58px)] bg-[var(--sidebar-bg)] backdrop-blur-[var(--blur)]">
      <div className="mt-24 flex flex-col gap-y-8 px-4 md:px-8">
        {pagesLinks.map((link) => (
          <NavLink
            to={link.route}
            key={link.label}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "bg-[var(--link-active-bg)]"
                  : "hover:bg-[var(--link-active-bg)]"
              } px-4 py-2 rounded-xl text-[var(--text)] text-center font-bold text-lg`;
            }}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
