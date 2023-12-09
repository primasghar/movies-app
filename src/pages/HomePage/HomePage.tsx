import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./HomePage.module.css";
import "react-multi-carousel/lib/styles.css";

import { MoviesData } from "../../types/movieData";
import CarouselSlider from "../../shared/CarouselSlider";
import { API_key, Base_URL } from "../../assets/scripts";

const HomePage = () => {
  const [data, setData] = useState<MoviesData | null>(null);

  const URL = `${Base_URL}/trending/all/day?${API_key}&language=en-US`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL]);

  if (!data) {
    return "Loading...";
  }
  return (
    <div className={classes.home}>
      <h1 className={classes.heading}>Trending</h1>
      <CarouselSlider movies={data.results}></CarouselSlider>
    </div>
  );
};

export default HomePage;
