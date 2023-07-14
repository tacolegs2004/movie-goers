import { IMovies, MovieType } from "@/types/MovieTypes";
import Image from "next/image";

export const MovieCard = ({ movie }: IMovies) => {
  return (
    <div className="flex ml-36 mt-6 px-6 py-3 lg:px-12 lg:py-6 items-center lg:ml-0 xs:ml-0">
      <span className="text-center bg-slate-500">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={160}
          className="ml-24 mt-6 mr-36"
          height={120}
        />
        <p key={movie.id}>{movie.title}</p>
      </span>
    </div>
  );
};
