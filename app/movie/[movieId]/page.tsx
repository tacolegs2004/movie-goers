import getMoviesById from "@/lib/getMoviesById";

export default async function Page({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
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
