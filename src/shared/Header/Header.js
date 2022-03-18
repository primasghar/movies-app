import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.movieSearch}>
      <form>
        <button className={classes.btn}>Search</button>
        <input
          type="search"
          id="search"
          placeholder="movie name"
          className={classes.searchBox}
        />
      </form>
    </div>
  );
};

export default Header;
