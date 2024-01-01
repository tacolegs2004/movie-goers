import { TMovie } from "@/src/lib/types/MovieTypes";
import { Suspense, use } from "react";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

export default function PopularMovieList({
  popularMoviePromise,
}: {
  popularMoviePromise: Promise<TMovie>;
}) {
  const { results } = use(popularMoviePromise) as TMovie;

  return (
    <>
      <MovieListWrapper>
        <Suspense fallback={<h1>Loading...</h1>}>
          {results.map((movie) => (
            <MovieListCard key={movie.id} results={movie} />
          ))}
        </Suspense>
      </MovieListWrapper>
    </>
  );
}
