import { use } from "react";
import { TMovie } from "../api/movies/types/MovieTypes";
import { MovieCard } from "./MovieCard";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const { results } = use(moviePromise) as TMovie;
  console.log(results);
  return (
    <main className="grid grid-cols-3 md:flex md:flex-row overflow-scroll">
      {results.map((movie) => (
        <span key={movie.id} className="pt-4 ml-4 w-max h-full">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
