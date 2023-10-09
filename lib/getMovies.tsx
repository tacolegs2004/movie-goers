import { TMovie } from "./types/MovieTypes";

export const getMovies = async (): Promise<TMovie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  } else {
    console.log("Fetch succeded");
  }

  const data = await res.json();

  // console.log(data);

  return data as TMovie;
};

export default getMovies;
