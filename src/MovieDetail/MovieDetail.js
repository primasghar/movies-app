import React from "react";

import classes from "./MovieDetail.module.css";
// import { useParams } from "react-router-dom";

import test from "../assets/images/test.jpg";

const MovieDetail = () => {
  // const params = useParams();

  //find the id const movie= movieData.find(movie=>movie.id===params.id);
  //if (!movie) {
  //   <p>No movie found</p> fallback for unknown url
  // }

  return (
    <main className={classes.wrapper}>
      <div className={classes.detail}>
        <img
          className={classes.img}
          alt="movie poster"
          src={test}
          width={300}
          height={450}
        />
        <section>
          <h1>Enchanto</h1>
          <span>2021</span>
          <br />
          <span>Family/Musical</span> <span>1h 49min</span>
          <span>Play trailer</span>
          <h3>Overview</h3>
          <p>
            The Madrigals are an extraordinary family who live hidden in the
            mountains of Colombia in a charmed place called the Encanto.
          </p>
          <span>Director and Screenplay</span>
          <br />
          {/* <p>{params.id}</p> */}
        </section>
      </div>
      <div>
        <span>Cast</span>
        {/* use slider or carousel */}
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
