import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`h-full bg-gray-700 flex items-center justify-between flex-col bg-[url('/background2.png')] bg-no-repeat bg-center bg-cover relative`}
    >
      <Navbar />
      <main className="z-10 bg-gray-400 p-4 rounded">{children}</main>
      <Footer />
      <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-96 bottom-0"></div>
    </div>
  );
};

export default Layout;
