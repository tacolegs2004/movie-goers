import { TMovieResult } from "@/src/lib/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

export default function MovieListCard({
  results,
}: {
  results: TMovieResult;
}) {
  return (
    <div className="flex justify-center items-center">
      <span key={results.id} className="h-full sm:w-full sm:grid-cols-3">
        <span className="text-center">
          <Link
            href={`/movie/${results.id}`}
            className="hover:opacity-75 hover:shadow-2xl transition-all duration-200 ease-in-out text-center"
          >
            <Image
              src={"https://image.tmdb.org/t/p/w500" + results.poster_path}
              alt={results.title}
              width={90}
              className="fade w-full h-fit mt-6 ml-6 pr-2 rounded-lg hover:scale-105 hover:shadow-2xl transition duration-200 ease-in-out sm:ml-8"
              height={60}
            />
            <p className="pt-4 w-48 ml-16 overflow-visible text-center text-sm font-bold text-gray-900 hover:underline transition-all duration-200 ease-in-out sm:ml-8">
              {results.title}
            </p>
          </Link>
        </span>{" "}
      </span>
    </div>
  );
}
