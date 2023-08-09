import { TMovie } from "@/app/api/movies/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ results }: TMovie) => {
  return (
    <>
      {results.map((movies) => (
        <div
          key={movies.id}
          className="flex flex-row ml-36 mt-6  px-6 py-3 lg:px-12 lg:py-6 items-center lg:ml-0 xs:ml-0"
        >
          <span className="text-center bg-slate-500">
            <Link href={`/movie/${movies.id}`}>
              <Image
                src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
                alt={movies.title}
                width={160}
                className="ml-24 w-auto h-auto mt-6 mr-36"
                height={120}
              />
              <p key={movies.id}>{movies.title}</p>
            </Link>
          </span>
        </div>
      ))}
    </>
  );
};
