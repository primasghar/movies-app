import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieList from "../shared/MovieList/MovieList";
import ReactPaginate from "react-paginate";
import Notification from "../shared/Notification";
import { fetchMovieData } from "../store/movie-action";
import classes from "./NewRelease.module.css";

const NewRelease = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.moviesList);

  const notification = useSelector((state) => state.ui.notification);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPageNumber}`;

  useEffect(() => {
    dispatch(fetchMovieData(URL));
  }, [URL, currentPageNumber, dispatch]);

  const getNextPage = (event) => {
    setCurrentPageNumber(event.selected + 1);
  };

  console.log("NewRelease", notification);

  if (notification.status === "loading" || notification.status === "pending") {
    return "loading";
  }

  return (
    <div>
      {notification.status === "error" && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <MovieList movies={movies.results} />

      {/* <CommonPagination fecthNext= {() => fetchMovieData(URL)} /> */}

      <ReactPaginate
        nextLabel={">"}
        onPageChange={getNextPage}
        pageRangeDisplayed={5}
        pageCount={movies.total_pages}
        previousLabel={"<"}
        renderOnZeroPageCount={null}
        className={classes.paginationBttns}
        previousClassName={classes.previousBttn}
        nextClassName={classes.nextBttn}
        activeClassName={classes.paginationActive}
        disabledClassName={classes.paginationDisabled}
      />
    </div>
  );
};

export default NewRelease;
