import { TMovie } from "./types/MovieTypes";

export const getMoviesById = async (movieId: string): Promise<TMovie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  }

  const data = (await res.json()) as TMovie;

  //  console.log(data);

  return data as TMovie;
};

export default getMoviesById;
