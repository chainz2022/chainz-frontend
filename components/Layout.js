import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

// @desc: This Main Layout component is 100vh tall.
// Can be called with withNavbar and withFooter as false.
// Use it with another container inside for better control.
const Layout = ({ children, withNavbar = true, withFooter = true, withFixedNavbar = false }) => {
  return (
    <div className={`h-full flex items-center justify-between flex-col`}>
      {withNavbar && <Navbar centered={true} withFixedNavbar={withFixedNavbar} />}
      <main className="z-10 w-full h-full">{children}</main>
      {withFooter && <Footer />}
    </div>
  );
};

export default Layout;
