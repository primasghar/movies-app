import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Paginate from "../../shared/Paginate";
import MovieList from "../../shared/MovieList/MovieList";

import { MoviesData } from "../../types/movieData";
import { API_key, Base_URL } from "../../assets/scripts";

const PopularMovies = () => {
  const [data, setData] = useState<MoviesData | null>(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `${Base_URL}/movie/popular?${API_key}&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);

  const handlePageChange = (selectedNumber: { selected: number }) => {
    navigate(`/popularmovies/${selectedNumber.selected + 1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <Paginate onPageChange={handlePageChange} pageCount={data.total_pages} />
    </div>
  );
};

export default PopularMovies;
