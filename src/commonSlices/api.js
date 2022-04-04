import axios from "utils/axios";

const getMovies = (moviesType, currentPageNumber) => {
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const queryParam =
    "?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=";

  axios.get(`${baseURL}${moviesType}${queryParam}${currentPageNumber}`);
};

export default getMovies;

// NewRelease=now_playing
// https://api.themoviedb.org/3/movie/now_playing?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=1;

// PopularMovies=popular
// https://api.themoviedb.org/3/movie/popular?api_key=44215a69b2337d878932ea0a9d2088d4language=en-US&page=1

// ComingSoon=upcoming
//https://api.themoviedb.org/3/movie/upcoming?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=1

// TopRated=top_rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US&page=1

//PopularPeople
// https://api.themoviedb.org/3/person/1136406/images?api_key=44215a69b2337d878932ea0a9d2088d4
