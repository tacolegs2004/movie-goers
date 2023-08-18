import { z } from "zod";
import MovieObject from "../zod/movieObject";

export type TMovie = z.infer<typeof MovieObject>;
