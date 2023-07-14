import { IMovies, MovieType } from "@/types/MovieTypes";
import Image from "next/image";

export const MovieCard = ({ movie }: IMovies) => {
  return (
    <div className="flex grid-flex-row  px-12 py-6">
      <span className="text-center items-center bg-slate-500">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={160}
          className="ml-24 mr-36"
          height={120}
        />
        <p key={movie.id}>{movie.title}</p>
      </span>
    </div>
  );
};
