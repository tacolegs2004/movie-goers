"use client";
import { TMovie } from "@/types/MovieTypes";
import { use } from "react";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const movies = use(moviePromise);
  return (
    <div>
      {movies.map((movie) => (
        <h1 key={movie.results.id}>{movie.results.title}</h1>
      ))}
    </div>
  );
}
