import MovieListId from "@/app/_components/MovieListId";
import getMoviesById from "@/lib/getMoviesById";

export interface TParams {
  movieId: string;
}

export default function Page({ params }: { params: TParams }) {
  const movies = getMoviesById(params.movieId);

  console.log("movies", movies);
  return (
    <>
      <MovieListId moviePromise={movies} />
    </>
  );
}
