import { TMovie } from "@/lib/types/MovieTypes";
import Image from "next/image";

export default async function MovieListId({
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
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        width={150}
        className="w-max h-max mt-6 ml-6 pr-2 mb-8 rounded-lg"
        height={150}
      />
      <h1>{movie.title}</h1>
    </div>
  );
}
