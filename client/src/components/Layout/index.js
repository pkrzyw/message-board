import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="bg-gray-100 w-8/12 mx-auto mt-4 shadow-lg rounded h-full px-3 py-4">
      {children}
    </main>
  );
};

export default Layout;
