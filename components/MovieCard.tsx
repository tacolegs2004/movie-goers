import { IMovies, MovieType } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ movie }: IMovies) => {
  return (
    <div className="flex ml-36 mt-6  px-6 py-3 lg:px-12 lg:py-6 items-center lg:ml-0 xs:ml-0">
      <span className="text-center bg-slate-500">
        <Link href={`/movie/${movie.id}`}>
          <Image
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            width={160}
            className="ml-24 w-auto h-auto mt-6 mr-36"
            height={120}
          />
          <p key={movie.id}>{movie.title}</p>
        </Link>
      </span>
    </div>
  );
};
