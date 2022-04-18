import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div className={`h-full flex items-center justify-between flex-col`}>
      <Navbar />
      <main className="z-10 bg-gray-400 p-4 rounded">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
