import React from "react";
import { Link } from "react-router-dom";

import test from "../../assets/images/test.jpg";

import classes from "./MovieItem.module.css";

const MovieItem = ({ movieData, handledetail }) => {
  return (
    <div className={classes.movieItem}>
      <Link to={`/moviedetail/${movieData.id}`}>
        <img
          src={test}
          alt="poster"
          width={200}
          height={250}
          onClick={handledetail}
        />
      </Link>

      <div className={classes.genre}>
        <span className={classes.title}>{"Enchanto"}</span>
        <span className={classes.rating}>{movieData.rating}</span>
      </div>
    </div>
  );
};

export default MovieItem;
