import getMovies from "@/lib/getMovies";
import MovieList from "./_components/MovieList";

export default function Home() {
  const movieReq = getMovies();

  if (!movieReq) {
    console.log("failed to fetch");
  }

  return (
    <main>
      <div className="justify-center items-center">
        <MovieList moviePromise={movieReq} />
      </div>
    </main>
  );
}
