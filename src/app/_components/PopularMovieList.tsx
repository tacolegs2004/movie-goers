import { TMovie } from "@/src/lib/types/MovieTypes";
import { Suspense, use } from "react";
import MovieListCard from "./MovieListCard";

export default function PopularMovieList({
  popularMoviePromise,
}: {
  popularMoviePromise: Promise<TMovie>;
}) {
  const { results } = use(popularMoviePromise) as TMovie;

  return (
    <main className="grid grid-cols-3 lg:flex lg:flex-row lg:overflow-scroll gap-12 sm:gap-3">
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((movie) => (
          <MovieListCard key={movie.id} results={movie} />
        ))}
      </Suspense>
    </main>
  );
}
