import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import classes from "./CarouselSlider.module.css";
import "react-multi-carousel/lib/styles.css";

import { Movie } from "../../types/movieData";

import React from "react";

type Props = {
  Data: Movie[];
};
const CarouselSlider = ({ Data }: Props) => {
  const responsive = {
    SuperDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 6,
    },
    Laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.carouselContainer}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {Data.map((movie: Movie) => {
          return (
            <div className={classes.carouselCard}>
              <Link to={`moviedetail/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="poster"
                  width={234}
                  height={330}
                  className={classes.poster}
                />
              </Link>
              <Link to={`moviedetail/${movie.id}`} className={classes.title}>
                {movie.title}
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
