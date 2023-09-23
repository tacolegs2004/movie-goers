import { TMovie } from "@/lib/types/MovieTypes";
import { use } from "react";
import { MovieCard } from "./MovieCard";

export default function MovieListId({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const { results } = use(moviePromise);

  results.map((movie) => console.log(movie.title));

  console.log(results);
  return (
    <main className="">
      {results.map((movie) => (
        <span key={movie.id} className="w-full h-full">
          <MovieCard results={[movie]} key={movie.id} />
        <span>
      ))}
    </main>
  );
}
