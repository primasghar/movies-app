import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import Breadcrumbs from "../components/Breadcrumbs";
import classes from "./MovieDetail.module.css";

import { MovieInfo } from "../../types/movieDetail";

const MovieDetail = () => {
  const [data, setData] = useState<MovieInfo | null>(null);
  let { id } = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL]);

  if (!data) {
    return <p>Loading</p>;
  }

  const renderGenres = data.genres.map((genre, index) => {
    if (index === data.genres.length - 1) {
      return <li className={classes.genreItems}>{genre.name}</li>;
    }

    return <li className={classes.genreItems}>{genre.name}, </li>;
  });

  return (
    <main className={classes.container}>
      {/*<Breadcrumbs movieName={data.title} />*/}
      <div className={classes.backdrop}>
        <img
          className={classes.backdropImage}
          alt="movie backdrop"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          height={500}
        />
      </div>
      <div className={classes.topDetail}>
        <section className={classes.imageSection}>
          <img
            className={classes.movieImage}
            alt="movie poster"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            height={500}
          />
        </section>
        <section className={classes.movieInfo}>
          <h1>{data.title}</h1>
          <ul className={classes.infoList}>
            <li className={classes.infoItem}>{data.release_date}</li>
            <li className={classes.infoItem}> - </li>
            <li className={classes.infoItem}>
              <ul className={classes.genreList}>{renderGenres}</ul>
            </li>
            <li className={classes.infoItem}> - </li>
            <li className={classes.infoItem}>{data.runtime}</li>
          </ul>
          <p className={classes.tagLine}>{data.tagline}</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
        </section>
      </div>
    </main>
  );
};

export default MovieDetail;
