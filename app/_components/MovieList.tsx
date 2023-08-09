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
    <div>
      {results.map((movie) => (
        <MovieCard results={[movie]} key={movie.id} />
      ))}
    </div>
  );
}
