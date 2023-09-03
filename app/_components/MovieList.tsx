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
    // grid grid-cols-3 md:flex md:flex-row overflow-scroll
    <main className=" flex flex-row gap-3 overflow-scroll mt-4">
      {results.map((movie) => (
        <span key={movie.id} className="w-fixed h-full">
          <MovieCard results={[movie]} key={movie.id} />
        </span>
      ))}
    </main>
  );
}
