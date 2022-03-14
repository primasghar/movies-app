import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">New Release</NavLink>
        </li>
        <li>
          <NavLink to="comingsoon">Coming soon</NavLink>
        </li>
        <li>
          <NavLink to="popularmovies">Popular Movies</NavLink>
        </li>
        <li>
          <NavLink to="toprated">Top Rated</NavLink>
        </li>

        <li>
          <NavLink to="popularpeople">Popular People</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
