import getMoviesById from "@/lib/getMoviesById";

export type TParams = {
  movieId: string;
};

export default async function Page({ params }: { params: TParams }) {
  const movies = await getMoviesById(params.movieId);

  movies.results.map((movie) => {
    console.log(movie.title);
  });
  console.log("movies", movies);
  return (
    <>
      {!movies && <h1>Movie data not found</h1>}

      {movies.results.map((movie) => (
        <h1 className="flex flex-row justify-center items-center">
          {movie.title}
        </h1>
      ))}
    </>
  );
}
