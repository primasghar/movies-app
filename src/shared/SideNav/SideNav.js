import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={(navData) => navData.isActive && classes.active}
            to="/"
          >
            New Release
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/comingsoon"
          >
            Coming soon
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/popularmovies"
          >
            Popular Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/toprated"
          >
            Top Rated
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/popularpeople"
          >
            Popular People
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideNav;
