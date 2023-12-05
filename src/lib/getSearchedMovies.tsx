import { TMovie } from "./types/MovieTypes";

export default async function getSearchedMovies({
  query,
}: {
  query?: {
    query?: string;
  };
}): Promise<TMovie> {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );

  const movies = await data.json();

  return movies as TMovie;
}
