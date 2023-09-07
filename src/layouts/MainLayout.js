import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

import useWindowSize from "../hooks/useWindowSize";

import classes from "./MainLayout.module.css";

const MainLayout = () => {
  const { width } = useWindowSize();

  const [openNav, setOpenNav] = useState(width > 810);

  useEffect(() => {
    if (width > 810) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  }, [width]);

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={classes.appContainer}>
      <Header onClickNav={handleNavClick} />
      <main className={classes.main}>
        <SideNav openNav={openNav} />
        <section className={classes.displaySection}>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
