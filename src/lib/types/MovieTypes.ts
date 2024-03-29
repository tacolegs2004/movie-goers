export interface TMovie {
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface TSearchedMovieObject {
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
}


export interface TRest {
  data: TNowPlayingMovieObject[];
}

export interface TNowPlayingMovieObject {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
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

export interface TQuery {
  query: TSearchedMovieObject[];
}
