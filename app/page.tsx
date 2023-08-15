import MovieList from "./_components/MovieList";
import NotFound from "./_components/NotFound";
import { ZMovie } from "./api/movies/types/MovieTypes";

export default function Home() {
  const movieReq = fetch("http://localhost:3000/api/movies", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<ZMovie>;
  return (
    <main>
      <div className="justify-center items-center">
        <p className="ml-12 w-full -mb-6 -mt-4">Popular</p>
        <MovieList moviePromise={movieReq} />
      </div>
      {!movieReq && <NotFound />}
    </main>
  );
}
