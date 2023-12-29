import { TMovieResult } from "@/src/lib/types/MovieTypes";
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

  const movie = (await res.json()) as TMovieResult;

  return (
    <div className="flex justify-center items-center">
      <section className="container flex flex-col  justify-center items-center lg:w-screen lg:h-screen mr-12 ml-12 my-4 ">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={150}
          className=" w-[60%] h-full mt-24 ml-8 pr-2 mb-4 lg:w-[40%] lg:h-[90%] lg:mt-0 lg:ml-0 lg:pr-0"
          height={120}
        />
        <h1>{movie.title}</h1>
        <span>Original Language: {movie.original_language}</span>

        <span>
          Release Date:{" "}
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="mt-4">Rating: {movie.vote_average.toFixed()}/10</span>
        <blockquote className="mt-4 py-4 px-8 font-mono italic text-slate-600 text-ellipsis tracking-wide">
          {movie.overview}
        </blockquote>
      </section>
    </div>
  );
}
