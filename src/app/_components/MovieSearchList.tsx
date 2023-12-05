import { TMovie, TSearchedMovieObject } from "@/src/lib/types/MovieTypes";
import { use } from "react";
import MovieListCard from "./MovieListCard";

export default function MovieSearchList({
  moviePromise,
  query, //
}: {
  moviePromise: Promise<TMovie>;
  query: string;
}) {
  const { results } = use(moviePromise) as TSearchedMovieObject;

  return (
    // reate a grid for the search results
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((results) => (
          <MovieListCard key={results.id} results={results} />
        ))}
      </div>
    </div>
  );
}
