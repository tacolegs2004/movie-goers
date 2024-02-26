import getSearchedMovies from "@/src/lib/getSearchedMovies";
import { TQuery } from "@/src/lib/types/MovieTypes";
import React, { Suspense } from "react";
import MovieSearchList from "../_components/MovieSearchList";

const SearchPage: React.FC<{ query: TQuery }> = async (props) => {
  const movies = await getSearchedMovies(props);
  if (!movies) return null;

  // function handleSearch(idx: number) {
  //  const results = movies.results.find((res) => res.id === idx ? idx : null)
  //  console.log(results)
  // }

  return (
    <>
      {/** <SearchBar /> */}
      <Suspense fallback={<h1>Loading results...</h1>}>
        {movies.results.map((movie) => (
          <>
            <MovieSearchList
              key={movie.id}
              moviePromise={Promise.resolve(movies)}
            />
          </>
        ))}
      </Suspense>
      <h1 className="bg-red-400">
        hi
      </h1>
    </>
  );
}

export default SearchPage
