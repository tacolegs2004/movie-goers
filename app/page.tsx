import MovieList from "./_components/MovieList";
import NotFound from "./_components/NotFound";
import { TMovie } from "./api/movies/types/MovieTypes";

export default function Home() {
  const movieReq = fetch("http://localhost:3000/api/movies", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<TMovie>;
  return (
    <div className="">
      <div className="justify-center items-center">
        <p className="ml-12 w-full">Popular</p>
        <MovieList moviePromise={movieReq} />
      </div>
      {!movieReq && <NotFound />}
    </div>
  );
}
