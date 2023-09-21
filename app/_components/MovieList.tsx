import { TMovie } from "@/lib/types/MovieTypes";
import { use } from "react";
import { MovieCard } from "./MovieCard";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const { results } = use(moviePromise);

  results.map((movie) => console.log(movie.title));

  console.log(results);
  return (
    <main className="grid grid-cols-3 items-center justify-center pr-8 pt-4 lg:flex lg:overflow-scroll sm:gap-3">
      {results.map((movie) => (
        <span key={movie.id} className="w-full h-full">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
