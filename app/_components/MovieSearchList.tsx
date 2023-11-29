import { TPopularMovieObject } from "@/lib/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";
import { Suspense, use } from "react";

export default function MovieSearchList({
  moviePromise,
}: {
  moviePromise: Promise<TPopularMovieObject>;
}) {
  const { results } = use(moviePromise) as TPopularMovieObject;

  return (
    <main className="grid grid-cols-4 items-center justify-center md:ml-24">
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((movie) => (
          <span key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
                width={108}
                className="w-8/12 h-10/12 lg:w-48 lg:h-64  mt-6 ml-6 pr-2 rounded-lg hover:opacity-80 hover:scale-105  transition-all duration-200 ease-in-out"
                height={92}
              />
              <p key={movie.id} className="pt-4 pr-4 mr-6 ml-12 w-36">
                {movie.title}
              </p>
            </Link>
          </span>
        ))}
      </Suspense>
    </main>
  );
}
