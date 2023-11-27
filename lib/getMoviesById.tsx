import { TMovieObject } from "./types/MovieTypes";

export const getMoviesById = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  }

  const data = await res.json();
  console.log(data);

  return data as TMovieObject;
};

export default getMoviesById;
