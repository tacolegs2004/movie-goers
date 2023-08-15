import { use } from "react";
import { ZMovie } from "../api/movies/types/MovieTypes";
import { MovieCard } from "./MovieCard";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<ZMovie>;
}) {
  const { results } = use(moviePromise) as ZMovie;
  console.log(results);
  return (
    <main className="grid grid-cols-3 md:flex md:flex-row overflow-scroll">
      {results.map((movie) => (
        <span key={movie.id} className="py-4 w-full h-full">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
