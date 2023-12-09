import Carousel from "react-multi-carousel";

import classes from "./CarouselSlider.module.css";
import "react-multi-carousel/lib/styles.css";

import { Movie } from "../../types/movieData";

import React from "react";
import MovieItem from "../MovieList/MovieItem";

type Props = { movies: Movie[] };

const CarouselSlider = ({ movies }: Props) => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      showDots: true,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      showDots: true,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 810 },
      items: 2,
      showDots: true,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 810, min: 425 },
      items: 1,
      slidesToSlide: 1,
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
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={classes.carouselContainer}
        itemClass={classes.carouselItem}
        sliderClass={classes.carouselSlider}
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
