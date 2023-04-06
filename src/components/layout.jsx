import React from "react";
import {Outlet} from "react-router-dom";
import Services from "./services";
import Footer from "./footer";


const Layout = () => {
  return (
    <>
      <Outlet />
      <Services />
      <Footer />
    </>
  );
};

export default Layout;