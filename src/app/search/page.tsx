import { TMovieResult } from "@/src/lib/types/MovieTypes";
import React, { Suspense } from "react";
import Search from "../_components/Search";
import { type TMovie } from "@/src/lib/types/MovieTypes";
import getPopularMovies from "@/src/lib/getPopularMovies";
import getSearchedMovies from "@/src/lib/getSearchedMovies";
import MovieListCard from "../_components/MovieListCard";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 1;
  const movieListReq = await getPopularMovies() as TMovie
  const searchMovies = await getSearchedMovies({ query: query || movieListReq });

  if (!searchMovies) return (
    <div>Movies not found...</div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <Search query={query} />
      <Suspense fallback={<h1>Loading results...</h1>}>
        <div className="grid w-[80vw] grid-cols-3 gap-24">
          {searchMovies ? searchMovies.results.map((movie: TMovieResult) => (
            <MovieListCard results={movie} key={movie.id} />
          )) : movieListReq.results.map((movie: TMovieResult) => (
              <MovieListCard results={movie} key={movie.id} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
