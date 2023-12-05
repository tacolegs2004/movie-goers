"use client";
import { TNowPlayingMovieObject } from "@/src/lib/types/MovieTypes";
import { Suspense, use } from "react";
import MovieListCard from "./MovieListCard";

export default function NowPlayingMovieList({
  nowPlayingMovieListPromise,
}: {
  nowPlayingMovieListPromise: Promise<TNowPlayingMovieObject>;
}) {
  const { results } = use(nowPlayingMovieListPromise) as TNowPlayingMovieObject;

  // function scrollRight() {
  //   window.scrollBy({
  //     top: 0,
  //     left: 100,
  //     behavior: "smooth",
  //   });
  // }
  return (
    <main className="grid grid-cols-3 lg:flex lg:flex-row lg:overflow-scroll gap-12 sm:gap-3">
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((movie) => (
          <MovieListCard key={movie.id} results={movie} />
        ))}
      </Suspense>
      {/* <button
        className="absolute right-0 top-1/2 z-50 bg-gray-400 rounded-full p-2 shadow-lg"
        onClick={scrollRight}
      >
        <ArrowBigRightIcon />
      </button> */}
    </main>
  );
}
