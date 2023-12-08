import Carousel from "react-multi-carousel";

import classes from "./CarouselSlider.module.css";
import "react-multi-carousel/lib/styles.css";

import { Movie } from "../../types/movieData";

import React from "react";
import MovieItem from "../MovieList/MovieItem";

type Props = { movies: Movie[] };

const CarouselSlider = ({ movies }: Props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2560 },
      items: 9,
    },
    largeDesktop: {
      breakpoint: { max: 2560, min: 1600 },
      items: 5,
    },
    mediumDesktop: {
      breakpoint: { max: 1600, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
      slidesToSlide: 1,
      showDots: false,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={classes.carouselContainer}
        itemClass={classes.carouselItem}
        slidesToSlide={1}
      >
        {movies.map((movie) => {
          return (
            <div className={classes.carouselCard}>
              <MovieItem movieData={movie} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
