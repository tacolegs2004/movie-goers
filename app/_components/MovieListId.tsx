import { TMovie } from "@/lib/types/MovieTypes";
import Image from "next/image";

export default async function MovieCardId({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  }

  const movie = (await res.json()) as TMovie;

  return (
    <div>
      <section className="container flex flex-col justify-center w-2/5 lg:w-[24%] lg:p-4 p-2 items-center ml-[32%] lg:ml-8 my-4 -mr-8 border-gray-600 border-2">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={120}
          className="mt-6 ml-8 pr-2 mb-8"
          height={120}
        />
        <h1>{movie.title}</h1>
        <blockquote className="mt-4 pl-4 pt-2 pr-2 pb-4 font-mono italic text-slate-600 lg:text-sm text-ellipsis tracking-wide">
          {movie.overview}
        </blockquote>
        <span>Original Language: {movie.original_language}</span>
        <span className="mt-4">{movie.vote_average.toFixed()}/10</span>
      </section>
    </div>
  );
}
