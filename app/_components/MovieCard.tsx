import { TMovie } from "@/lib/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ results }: TMovie) => {
  return (
    <>
      {results.map((movies) => (
        <span key={movies.id}>
          <Link href={`/movie/${movies.id}`}>
            <Image
              src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
              alt={movies.title}
              width={92}
              className="w-min h-min mt-6 ml-6 pr-2 rounded-lg"
              height={92}
            />
            <p key={movies.id} className="pt-4 pr-4 mr-6 ml-12 w-36">
              {movies.title}
            </p>
          </Link>
        </span>
      ))}
    </>
  );
};
