import getSearchedMovies from "@/src/lib/getSearchedMovies";
import { TQuery } from "../../lib/types/MovieTypes";
import MovieSearchList from "../_components/MovieSearchList";
import SearchBar from "../_components/SearchBar";

export default async function Page() {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  const data = (await res.json()) as TQuery;

  if (!data) [console.log("data not found")];

  const movies = await getSearchedMovies({ query: data });

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchBar>
        {movies.results.map((movie) => (
          <>
            <MovieSearchList
              key={movie.id}
              moviePromise={Promise.resolve(movies)}
            />
          </>
        ))}
      </SearchBar>
    </>
  );
}
