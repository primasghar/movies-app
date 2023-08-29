import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Paginate from "../shared/Paginate";
import MovieList from "../shared/MovieList/MovieList";

const NowPlaying = () => {
  const [data, setData] = useState(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);

  const getNextPage = () => {
    navigate(`/nowplaying/${+currentPage + 1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <MovieList movies={data.results} />

      <Paginate
        nextLabel={">"}
        onPageChange={getNextPage}
        pageRangeDisplayed={5}
        pageCount={data.total_pages}
        previousLabel={"<"}
      />
    </div>
  );
};

export default NowPlaying;