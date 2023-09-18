import { TMovie } from "@/lib/types/MovieTypes";
import { use } from "react";
import { MovieCard } from "./MovieCard";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const { results } = use(moviePromise);

  console.log(results);
  return (
    <main className="grid grid-cols-3 items-center justify-center pr-12 pt-4 lg:flex lg:flex-row lg:overflow-scroll">
      {results.map((movie) => (
        <span key={movie.id} className="w-fixed h-full">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
