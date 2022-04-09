import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieList from "../shared/MovieList";
import CommonPaginate from "../shared/CommonPaginate";
import Notification from "../shared/Notification";
import Spinner from "../shared/Spinner";

import { fetchMovies } from "../store/movie-action";

const NewRelease = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const dispatch = useDispatch();

  const {
    movie: { moviesList },
    ui: { notification },
  } = useSelector((state) => state);

  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPageNumber}`;

  useEffect(() => {
    dispatch(fetchMovies(URL));
  }, [URL, currentPageNumber, dispatch]);

  const getNextPage = (event) => {
    setCurrentPageNumber(event.selected + 1);
  };

  if (notification.status === "loading" || notification.status === "pending") {
    return <Spinner />;
  }

  return (
    <>
      {notification.status === "error" && (
        <Notification status={notification.status} />
      )}

      <MovieList movies={moviesList.results} />

      <CommonPaginate
        getNextPage={getNextPage}
        pageCount={moviesList.total_pages}
      />
    </>
  );
};

export default NewRelease;
