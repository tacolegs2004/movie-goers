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
    <main className="flex flex-row overflow-scroll">
      {results.map((movie) => (
        <span key={movie.id} className="py-4">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
