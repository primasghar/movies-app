import React from "react";

import MovieItem from "./MovieItem";

import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <div className={classes.wrapper}>
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
      <MovieItem movieData={"data"} />
    </div>
  );
};

export default MovieList;
