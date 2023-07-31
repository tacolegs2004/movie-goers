import { z } from "zod";

const MovieObject = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.number().array(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_count: z.number(),
  vote_average: z.number(),
});

export default MovieObject;
