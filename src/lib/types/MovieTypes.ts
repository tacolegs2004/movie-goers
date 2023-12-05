export type TMovie = {
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
};

export type TSearchedMovieObject = {
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
};

export interface TNowPlayingMovieObject {
  dates: Dates;
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface TMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}