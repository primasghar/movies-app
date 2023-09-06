import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Paginate from "../../shared/Paginate";
import MovieList from "../../shared/MovieList/MovieList";

const ComingSoon = () => {
  const [data, setData] = useState(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);

  const onChangePage = (event) => {
    navigate(`/comingsoon/${event.selected+1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <Paginate
        onPageChange={onChangePage}
        pageCount={data.total_pages}
      />
    </div>
  );
};

export default ComingSoon;
