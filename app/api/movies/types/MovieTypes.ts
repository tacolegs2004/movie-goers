import { z } from "zod";
import MovieObject from "../zod/movieObject";

export type TMovie = {
  page?: number;
  results: Array<{
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
  }>;
  total_pages?: number;
  total_results?: number;
};

type ZMovie = {
  page?: number;
  results: z.infer<typeof MovieObject>[];
  total_pages?: number;
  total_results?: number;
};
