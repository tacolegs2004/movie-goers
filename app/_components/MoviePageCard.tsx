import { TMovie } from "@/lib/types/MovieTypes";

import Image from "next/image";

export default function MoviePageCard({ results }: TMovie) {
  return (
    <>
      {results.map((movies) => (
        <div key={movies.id}>
          <span>
            <Image
              src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
              alt={movies.title}
              width={92}
              className="w-full h-full mt-6 pl-4 pr-2 rounded-lg"
              height={92}
            />
            <p key={movies.id} className="pt-4 pr-12 ml-12">
              {movies.title}
            </p>
          </span>
        </div>
      ))}
    </>
  );
}
