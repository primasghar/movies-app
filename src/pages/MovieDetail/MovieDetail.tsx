import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import Breadcrumbs from "../components/Breadcrumbs";
import classes from "./MovieDetail.module.css";

import { MovieInfo } from "../../types/movieDetail";
import { API_key, Base_URL } from "../../assets/scripts";

const MovieDetail = () => {
  const [data, setData] = useState<MovieInfo | null>(null);
  let { id } = useParams();

  const URL = `${Base_URL}/movie/${id}?${API_key}&language=en-US`;

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
        />{" "}
        <img
          className={classes.movieImage}
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          height={500}
        />
      </div>

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
    </main>
  );
};

export default MovieDetail;
