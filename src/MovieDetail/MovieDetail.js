import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import classes from "./MovieDetail.module.css";

import axios from "axios";

const MovieDetail = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL]);

  console.log("data", data);
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <main className={classes.wrapper}>
      <div className={classes.detail}>
        <img
          className={classes.img2}
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          width={500}
          height={500}
        />
        <section>
          <h1>{data.title}</h1>
            <div>
          <h3>Release Date: {data.release_date}</h3>
          <h3>Genres:
            {data.genres.map((genre) => (
              <span>{genre.name}</span>
            ))}
          </h3>
          <h3>Overview</h3>
          <p>{data.overview}</p>
            </div>
        </section>
      </div>
    </main>
  );
};

export default MovieDetail;

//  useParams hook to extract route params
//Use dynamic Route in App to set path with dynamic id and then setting id here to use to display data
//dynamically when certain id movie is clicked and show the details
//Can use Redux for that to send http requests.

// {

//   "id": 7555,
//   "title": "Rambo",
//   "release_date": "2008-01-24",
//   "original_language": "en",
//   "adult": false,
//   "backdrop_path": "/wZVluw8j7i7TPsrrh7yhSE0ekCc.jpg",
//   "poster_path": "/45YC86aMjWlcPkvgWwqdI6Clq7b.jpg",
//   "genres": [
//       {
//           "id": 28,
//           "name": "Action"
//       },
//       {
//           "id": 53,
//           "name": "Thriller"
//       }
//   ],
//   "runtime": 92,
//   "vote_average": 6.6,
//   "tagline": "Heroes never die... They just reload.",
//   "overview": "When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action.  Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.",

// // }
