import React from "react";

import MovieItem from "./MovieItem";

import classes from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={classes.wrapper}>
      {movies.map((movie) => (
        <MovieItem movieData={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
