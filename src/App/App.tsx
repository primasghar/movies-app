import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
/* common */
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SearchResult from "../pages/SearchResult";
import NotFound from "../shared/NotFound/NotFound";
/* movies */
import NowPlaying from "../pages/NowPlaying";
import ComingSoon from "../pages/ComingSoon";
import PopularMovies from "../pages/PopularMovies";
import PopularPeople from "../pages/PopularPeople";
import TopRated from "../pages/TopRated";
import MovieDetail from "../pages/MovieDetail";
import PersonDetail from "../pages/PersonDetail";

/* tv shows */
import PopularShows from "../pages/PopularShows";
import AiringToday from "../pages/AiringToday";
import OnTheAir from "../pages/OnTheAir";
import TopRatedShows from "../pages/TopRatedShows";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="nowplaying/:currentPage" element={<NowPlaying />} />
      <Route path="comingsoon/:currentPage" element={<ComingSoon />} />
      <Route path="popularmovies/:currentPage" element={<PopularMovies />} />
      <Route path="popularpeople/:currentPage" element={<PopularPeople />} />
      <Route path="topratedmovies/:currentPage" element={<TopRated />} />
      <Route
        path=":movieType/:currentPage/moviedetail/:id"
        element={<MovieDetail />}
      />
      <Route path="popular_shows/:currentPage" element={<PopularShows />} />
      <Route path="airing_today/:currentPage" element={<AiringToday />} />
      <Route path="on_the_air/:currentPage" element={<OnTheAir />} />
      <Route path="top_rated_shows/:currentPage" element={<TopRatedShows />} />
      <Route path="popularpeople/:currentPage" element={<PopularPeople />} />
      <Route
        path=":personType/:currentPage/persondetail/:id"
        element={<PersonDetail />}
      />
      <Route path="search/:query" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
