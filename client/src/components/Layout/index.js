import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="w-8/12 mx-auto mt-2 h-full px-3 py-2">{children}</main>
  );
};

export default Layout;
