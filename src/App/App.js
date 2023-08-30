import React from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "../shared/SideNav";
import Header from "../shared/Header";
import NowPlaying from "../NowPlaying";
import ComingSoon from "../ComingSoon";
import PopularMovies from "../PopularMovies";
import PopularPeople from "../PopularPeople";
import TopRated from "../TopRated";
import MovieDetail from "../MovieDetail";
import SearchResult from "../SearchResult";
import NotFound from "../shared/NotFound/NotFound";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.main}>
        <div className={classes.sideContainer}>
          <SideNav />
        </div>

        <div className={classes.displayContainer}>
          <header className={classes.displayContainerHeader}>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<NowPlaying />} />
            <Route path="nowplaying/:currentPage" element={<NowPlaying />} />
            <Route path="comingsoon/:currentPage" element={<ComingSoon />} />
            <Route
              path="popularmovies/:currentPage"
              element={<PopularMovies />}
            />
            <Route
              path="popularpeople/:currentPage"
              element={<PopularPeople />}
            />
            <Route path="toprated/:currentPage" element={<TopRated />} />
            <Route
              path=":movieType/:currentPage/moviedetail/:id"
              element={<MovieDetail />}
            />
            <Route path="search/:query" element={<SearchResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

// Dynamic Routes with Params
//* Route is considered when no other Route matches
