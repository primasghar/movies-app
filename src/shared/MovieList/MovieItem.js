import React from "react";

import test from "../Images/test.jpg";
import classes from "./MovieItem.module.css";

const MovieItem = (title, rating, handledetail) => {
  return (
    <li>
      <div>
        <img src={test} alt={"movie poster"} />
        <div className={classes.genra}>
          <span className={classes.title}>{title}</span>
          <span className={classes.rating}>{rating}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handledetail}>view detail</button>
      </div>
    </li>
  );
};

export default MovieItem;
