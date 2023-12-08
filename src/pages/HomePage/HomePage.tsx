import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./HomePage.module.css";
import "react-multi-carousel/lib/styles.css";

import { MoviesData } from "../../types/movieData";
import CarouselSlider from "../../shared/CarouselSlider";

const HomePage = () => {
  const [data, setData] = useState<MoviesData | null>(null);

  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=44215a69b2337d878932ea0a9d2088d4&language=en-US`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL]);

  if (!data) {
    return "Loading...";
  }
  return (
    <div className={classes.home}>
      <h1>Trending</h1>
      <CarouselSlider Data={data.results}></CarouselSlider>
      <h1>Popular</h1>
      <CarouselSlider Data={data.results}></CarouselSlider>
    </div>
  );
};

export default HomePage;
