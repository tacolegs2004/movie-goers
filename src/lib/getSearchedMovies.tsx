import { TMovie, TQuery } from "./types/MovieTypes";

export default async function getSearchedMovies({
  query,
}: {
  query: TQuery;
}): Promise<TMovie> {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!data.ok) {
    throw new Error("There was an error fetching the data");
  }

  const movies = await data.json();

  return movies as TMovie;
}
