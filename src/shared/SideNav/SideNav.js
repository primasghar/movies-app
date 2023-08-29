import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink
            exact
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/nowplaying/1"
          >
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/comingsoon/1"
          >
            Coming Soon
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/popularmovies/1"
          >
            Popular Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/toprated/1"
          >
            Top Rated
          </NavLink>
        </li>

        <li>
          {/*<NavLink*/}
          {/*  className={(navData) => (navData.isActive ? classes.active : "")}*/}
          {/*  to="/popularpeople"*/}
          {/*>*/}
          {/*  Popular People*/}
          {/*</NavLink>*/}
        </li>
      </ul>
    </nav>
  );
};
export default SideNav;
