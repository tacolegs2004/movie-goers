import { TQuery, TSearchedMovieObject } from "@/src/lib/types/MovieTypes";
import { use } from "react";
import MovieListCard from "./MovieListCard";

export default function MovieSearchList({
  moviePromise,
  query,
}: {
  moviePromise: Promise<TSearchedMovieObject>;
  query?: TQuery;
}) {
  const { results } = use(moviePromise) as TSearchedMovieObject;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((result) => (
          <MovieListCard key={result.id} results={result} />
        ))}
        {results.length === 0 && (
          <div className="text-center text-2xl">
            No results found for {query?.query.map((q) => `"${q}"`)}{" "}
          </div>
        )}
      </div>
    </div>
  );
}
