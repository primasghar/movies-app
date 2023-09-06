import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

import classes from "./MainLayout.module.css";

const MainLayout = () => {
    const handleNavClick = ()=>{

    }

  return (
    <div className={classes.appContainer}>
        <Header onClick = {handleNavClick}/>
      <main className={classes.main}>
              <SideNav/>
         <section className={classes.displaySection}>
             <Outlet />
         </section>
      </main>
        <Footer/>
    </div>
  );
};

export default MainLayout;
