import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

import MovieList from "../shared/MovieList/MovieList";
import classes from "./NewRelease.module.css";

const NewRelease = () => {
  const [data, setData] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPageNumber}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPageNumber]);

  const getNextPage = (event) => {
    setCurrentPageNumber(event.selected + 1);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <ReactPaginate
        nextLabel={">"}
        onPageChange={getNextPage}
        pageRangeDisplayed={5}
        pageCount={data.total_pages}
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
