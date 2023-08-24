import getMovies from "@/lib/getMovies";
import MovieList from "./_components/MovieList";

export default function Home() {
  const movieReq = getMovies();
  return (
    <main>
      <div className="justify-center items-center">
        <p className="ml-12 w-full -mb-6 -mt-4">Popular</p>
        <MovieList moviePromise={movieReq} />
      </div>
    </main>
  );
}
