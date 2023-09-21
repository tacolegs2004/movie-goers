import getMoviesById from "@/lib/getMoviesById";
import { TMovie } from "@/lib/types/MovieTypes";

export interface TParams extends TMovie {
  movieId: string;
}

export default async function Page({ params }: { params: TParams }) {
  const { results } = await getMoviesById(params.movieId);

  console.log(typeof results, "type");

  results.map((movie) => {
    console.log(movie);
  });



  //  console.log("movies", movies);
  return (
    <>
    
      {results.map((movie) => {
        return <h1 key={movie.id}>{movie.title}</h1>;
      })}
    </>
  );
}
