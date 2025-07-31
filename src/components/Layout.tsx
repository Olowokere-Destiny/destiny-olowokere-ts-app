import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="mt-[58px] p-4 md:p-8">{children}</main>
    </div>
  );
};

export default Layout;
