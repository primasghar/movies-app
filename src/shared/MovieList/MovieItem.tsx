import React from "react";
import { Link } from "react-router-dom";

import star from "../../assets/images/star.png";
import classes from "./MovieItem.module.css";

import { Movie } from "../../types/movieData";

type Props = {
  movieData: Movie;
};
const MovieItem = ({ movieData }: Props) => {
  const rating = movieData.vote_average;
  const roundedRating = Math.round(rating);
  return (
    <div className={classes.movieItem}>
      <div className={classes.ratingBadge}>
        <span className={classes.rating}>{roundedRating}</span>
        <img src={star} alt="rating star" className={classes.star}></img>
      </div>
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
        <Link to={`moviedetail/${movieData.id}`} className={classes.title}>
          {movieData.title}
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
