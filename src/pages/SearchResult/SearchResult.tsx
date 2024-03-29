import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../shared/MovieList";
import Paginate from "../../shared/Paginate";
import { MoviesData } from "../../types/movieData";

// import classes from "./SearchResult.module.css";

const SearchResult = () => {
  const [data, setData] = useState<MoviesData | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  let { query } = useParams();

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&query=${query}&page=${currentPageNumber}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPageNumber]);

  const onChangePage = (selectedNumber: { selected: number }) => {
    setCurrentPageNumber(selectedNumber.selected + 1);
  };

  if (!data) {
    return <p>Loading</p>;
  }

  if (!data.results.length) {
    return <p>No results found</p>;
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <Paginate onPageChange={onChangePage} pageCount={data.total_pages} />
    </div>
  );
};

export default SearchResult;
