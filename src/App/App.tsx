import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import NowPlaying from "../pages/NowPlaying";
import ComingSoon from "../pages/ComingSoon";
import PopularMovies from "../pages/PopularMovies";
import PopularPeople from "../pages/PopularPeople";
import TopRated from "../pages/TopRated";
import MovieDetail from "../pages/MovieDetail";
import SearchResult from "../pages/SearchResult";
import NotFound from "../shared/NotFound/NotFound";

import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="nowplaying/:currentPage" element={<NowPlaying />} />
      <Route path="comingsoon/:currentPage" element={<ComingSoon />} />
      <Route path="popularmovies/:currentPage" element={<PopularMovies />} />
      <Route path="popularpeople/:currentPage" element={<PopularPeople />} />
      <Route path="toprated/:currentPage" element={<TopRated />} />
      <Route
        path=":movieType/:currentPage/moviedetail/:id"
        element={<MovieDetail />}
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
