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
import NotFound from "../shared/NotFound/NotFound";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />

      <div className={classes.main}>
        <SideNav />

        <section className={classes.mainContent}>
          <Routes>
            <Route path="/" element={<NewRelease />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/popularmovies" element={<PopularMovies />} />
            <Route path="/popularpeople" element={<PopularPeople />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/moviedetail/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default App;

// Dynamic Routes with Params
//* Route is considered when no other Route matches
