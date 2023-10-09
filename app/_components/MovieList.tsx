import { ZMovie } from "@/lib/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";
import { Suspense, use } from "react";

export default function MovieList({
  moviePromise,
}: {
  moviePromise: Promise<ZMovie>;
}) {
  const { results } = use(moviePromise) as ZMovie;

  console.log(results);
  return (
    <main className="grid grid-cols-3 items-center justify-center pr-8 pt-4 lg:flex lg:overflow-scroll sm:gap-3">
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((movie) => (
          <span key={movie.id} className="w-full h-full">
            <span key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.title}
                  width={92}
                  className="w-min h-min mt-6 ml-6 pr-2 rounded-lg"
                  height={92}
                />
                <p key={movie.id} className="pt-4 pr-4 mr-6 ml-12 w-36">
                  {movie.title}
                </p>
              </Link>
            </span>{" "}
          </span>
        ))}
      </Suspense>
    </main>
  );
}
