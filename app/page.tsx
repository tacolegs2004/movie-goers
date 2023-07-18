import { MovieCard } from "@/components/MovieCard";
import { IMovies, MovieType } from "@/types/MovieTypes";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    console.error("Failed to fetch data");
  }
  const movies = (await res.json()) as IMovies[];

  // console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {movies?.map((movie: IMovies) => (
        <main key={movie.movie.id}>
          {" "}
          <MovieCard {...movie} />{" "}
        </main>
      ))}
    </div>
  );
}
