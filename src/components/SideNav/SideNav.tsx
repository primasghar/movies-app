import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import classes from "./SideNav.module.css";

import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";

type Props = {
  openNav: boolean;
};
const SideNav = ({ openNav }: Props) => (
  <nav className={cn(classes.nav, !openNav && classes.displayNone)}>
    <ul className={classes.list}>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/"
        >
          <div className={classes.homeIconText}>
            <Icon icon={home} size={20} />{" "}
            <h1 className={classes.home}>Home</h1>
          </div>
        </NavLink>
      </li>
      <h2 className={classes.heading}>Movies</h2>
      <li>
        <NavLink
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
          to="/topratedmovies/1"
        >
          Top Rated Movies
        </NavLink>
      </li>
      <h2 className={classes.heading}>TV shows</h2>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/popular_shows/1"
        >
          Popular Shows
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/airing_today/1"
        >
          Airing Today
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/on_the_air/1"
        >
          On TV
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/top_rated_shows"
        >
          Top Rated Shows
        </NavLink>
      </li>
      <h2 className={classes.heading}>People</h2>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/popularpeople/1"
        >
          Popular People
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default SideNav;
