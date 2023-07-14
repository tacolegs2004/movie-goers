import { MovieCard } from "@/components/MovieCard";
import { IMovies, MovieType } from "@/types/MovieTypes";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const response = await res.json();
  const movies: MovieType[] = response.results;

  // console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {movies.map((movie) => (
        <main key={movie.id}>
          {" "}
          <MovieCard movie={movie} />{" "}
        </main>
      ))}
    </div>
  );
}
