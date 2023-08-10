import { TMovie } from "@/app/api/movies/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ results }: TMovie) => {
  return (
    <>
      {results.map((movies) => (
        <div key={movies.id}>
          <Link href={`/movie/${movies.id}`}>
            <Image
              src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
              alt={movies.title}
              width={220}
              className="w-full h-full mt-6 pl-4 pr-2 rounded-lg"
              height={220}
            />
            <p key={movies.id} className="pt-4 pr-12 ml-12">
              {movies.title}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};
