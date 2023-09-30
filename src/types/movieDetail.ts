export type Belong_Collect = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type Spoken_Lang = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Prod_Countries = {
  iso_3166_1: string;
  name: string;
};

export type Prod_Companies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type GenreInfo = {
  id: number;
  name: string;
};

export type MovieInfo = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belong_Collect;
  budget: number;
  genres: GenreInfo[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 43.651;
  poster_path: string;
  production_companies: Prod_Companies[];
  production_countries: Prod_Countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spoken_Lang[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
