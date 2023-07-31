import MovieList from "@/components/MovieList";
import NotFound from "@/components/NotFound";
import { TMovie } from "@/types/MovieTypes";

export default function Home() {
  const movieReq = fetch("http://localhost:3000/api/movies", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<TMovie[]>;
  return (
    <>
      <MovieList moviePromise={movieReq} />
      {!movieReq && <NotFound />}
    </>
  );
}
