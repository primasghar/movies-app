import React from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "../shared/SideNav";
import Header from "../shared/Header";
import NewRelease from "../NewRelease";
import ComingSoon from "../ComingSoon";
import PopularMovies from "../PopularMovies";
import PopularPeople from "../PopularPeople";
import TopRated from "../TopRated";

const App = () => {
  return (
    <div>
      <section>
        <SideNav />
      </section>
      <section>
        <Header />

        <Routes>
          <Route path="/" element={<NewRelease />} />
          <Route path="comingsoon" element={<ComingSoon />} />
          <Route path="popularmovies" element={<PopularMovies />} />
          <Route path="popularpeople" element={<PopularPeople />} />
          <Route path="toprated" element={<TopRated />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
