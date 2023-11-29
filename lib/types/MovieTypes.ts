export interface IMovie {
  page: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
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
  total_pages: number;
  total_results: number;
}
export type TMovie = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

export type TPopularMovieObject = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

export interface TNowPlayingMovieObject {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
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
