import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideNav from "../components/SideNav";

import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={classes.appLayout}>
      <header className={classes.appHeader}>
        <Header />
      </header>
      <div className={classes.main}>
        <div className={classes.sideContainer}>
          <SideNav />
        </div>
        <div className={classes.displayContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
