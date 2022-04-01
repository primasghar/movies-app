import axios from "utils/axios";

const getMovies = (moviesType, currentPageNumber) =>
  axios.get(
    `${moviesType}?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=${currentPageNumber}`
  );

export default getMovies;
