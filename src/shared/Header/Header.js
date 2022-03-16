import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <form className={classes.movieSearch}>
      <input type="search" id="search" placeholder="movie name"></input>
      <button className={classes.btn}>Search</button>
    </form>
  );
};

export default Header;
