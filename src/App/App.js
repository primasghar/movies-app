import React from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "../shared/SideNav";
import Header from "../shared/Header";
import NewRelease from "../NewRelease";
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
          <h1 className={classes.logo}>Show time</h1>
          <SideNav />
        </div>

        <div className={classes.displayContainer}>
          <div className={classes.displayContainerHeader}>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<NewRelease />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/popularmovies" element={<PopularMovies />} />
            <Route path="/popularpeople" element={<PopularPeople />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/moviedetail/:id" element={<MovieDetail />} />
            <Route path="/search/:query" element={<SearchResult />} />
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
