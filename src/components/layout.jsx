import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./navigation";
import Services from "./services";
import Footer from "./footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Services />
      <Footer />
    </>
  );
};

export default Layout;