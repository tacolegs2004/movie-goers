import MovieObject from "@/app/api/movies/zod/movieObj";
import { z } from "zod";

// export type TTMovie<TData> = TData;

export type TMovie = {
  page: number;
  results: z.infer<typeof MovieObject>;
}[];

// interface Mov extends TMovie {}

// interface TTTest<T> extends TTMovie {}
