import getMoviesById from "@/lib/getMoviesById";

export type TParams = {
  movieId: string;
};

export default async function Page({ params }: { params: TParams }) {
  const results = await getMoviesById(params.movieId);

  console.log("results", results);
  return (
    <>
      {!results ? (
        <h1>Movie Page {params.movieId}</h1>
      ) : (
        <div>
          {results.results.map((movie) => (
            <h1>{movie.title}</h1>
          ))}
        </div>
      )}
    </>
  );
}
