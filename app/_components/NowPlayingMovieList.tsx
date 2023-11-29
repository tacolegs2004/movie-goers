import { TNowPlayingMovieObject } from "@/lib/types/MovieTypes";
import { Suspense, use } from "react";
import MovieListCard from "./MovieListCard";

export default function NowPlayingMovieList({
  nowPlayingMovieListPromise,
}: {
  nowPlayingMovieListPromise: Promise<TNowPlayingMovieObject>;
}) {
  const { results } = use(nowPlayingMovieListPromise) as TNowPlayingMovieObject;
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
