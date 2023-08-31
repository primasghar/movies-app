import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideNav from "../components/SideNav";

import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={classes.appLayout}>
      <div className={classes.main}>
        <div className={classes.sideContainer}>
          <SideNav />
        </div>
        <div className={classes.displayContainer}>
          <header className={classes.displayContainerHeader}>
            <Header />
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
