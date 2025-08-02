import { useContext, useEffect, useState, type ReactNode } from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import Sidebar from "./Sidebar";
import sidebarHandle from "../assets/sidebar-handle.svg";

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ThemeContext)!;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // handle consistent behavior on different screen sizes
  useEffect(() => {
    if (theme !== "dark") return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [theme])

  return (
    <div
      className={`theme-${theme} bg-[var(--main-bg)] font-(family-name:--font-display)`}
    >
      <Header />
      <Sidebar sidebarOpen={sidebarOpen} />
      <main
        className={`mt-[56px] p-4 md:p-8 overflow-x-hidden ${
          theme === "dark" &&
          sidebarOpen &&
          "w-full md:w-[calc(100%-250px)] lg:w-[calc(100%-300px)] md:ml-auto"
        }`}
      >
        {theme === "dark" && (
          <img
            src={sidebarHandle}
            alt="Sidebar handle"
            className={`fixed top-[64px] left-2 z-10 md:hidden size-10 ${
              !sidebarOpen ? "rotate-180" : ""
            }`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
