import React from "react";

import Button from "../Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Show Time</h1>

      <div className={classes.movieSearch}>
        <input
          type="search"
          id="search"
          // placeholder="movie name"
          className={classes.searchBox}
        />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Header;
