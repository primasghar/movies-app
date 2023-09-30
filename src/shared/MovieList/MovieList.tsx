import React from "react";

import MovieItem from "./MovieItem";

import classes from "./MovieList.module.css";
import { Movie } from "../../types/movieData";

type Props = {
  movies: Movie[];
};
const MovieList = ({ movies }: Props) => {
  return (
    <div className={classes.wrapper}>
      {movies.map((movie) => (
        <MovieItem movieData={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
