import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MovieList from "../../shared/MovieList";
import Paginate from "../../shared/Paginate";

import axios from "axios";

import { MoviesData } from "../../types/movieData";
import { API_key, Base_URL } from "../../assets/scripts";

const AiringToday = () => {
  const [data, setData] = useState<MoviesData | null>(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `${Base_URL}/tv/airing_today?${API_key}&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);

  const onChangePage = (selectedNumber: { selected: number }) => {
    navigate(`/airing_today/${selectedNumber.selected + 1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <Paginate onPageChange={onChangePage} pageCount={data.total_pages} />
    </div>
  );
};

export default AiringToday;
