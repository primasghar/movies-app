import React from "react";
import { Link } from "react-router-dom";

import star from "../../assets/images/star.png";
import classes from "./MovieItem.module.css";

import { Movie } from "../../types/movieData";
type Props = {
  movieData: Movie;
};
const MovieItem = ({ movieData }: Props) => {
  return (
    <div className={classes.movieItem}>
      <Link to={`moviedetail/${movieData.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt="poster"
          width={234}
          height={330}
          className={classes.poster}
        />
      </Link>

      <div className={classes.movieInfo}>
        <div>
          <img src={star} alt="rating star" className={classes.star} />
          <span className={classes.rating}>{movieData.vote_average}</span>
        </div>
        <Link to={`moviedetail/${movieData.id}`} className={classes.title}>
          {movieData.title}
        </Link>
        <p className={classes.releaseDate}>{movieData.release_date}</p>
      </div>
    </div>
  );
};

export default MovieItem;
