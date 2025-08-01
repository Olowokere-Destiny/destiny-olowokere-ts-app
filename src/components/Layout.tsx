import { useContext, type ReactNode } from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const {theme} = useContext(ThemeContext)!;
  return (
    <div className={`theme-${theme} bg-[var(--main-bg)] font-(family-name:--font-display)`}>
      <Header />
      <main className="mt-[56px] p-4 md:p-8 overflow-x-hidden">{children}</main>
    </div>
  );
};

export default Layout;
