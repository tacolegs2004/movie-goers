import NotFound from "@/app/_components/NotFound";
import { TMovie } from "@/app/api/movies/types/MovieTypes";

export default async function Page(params: { id: string; movie: TMovie[] }) {
  const selectedMovie = params?.movie?.find(
    (movie) => movie.results.id.toString() === params.id
  );

  if (!selectedMovie) {
    return <NotFound />;
  }

  console.log(selectedMovie);
  return (
    <>
      <h1>{selectedMovie.results.title}</h1>
    </>
  );
}

// export async function generateStaticParams(params: {
//   id: string;
//   movie: MovieType;
// }) {
//   const movies = await getMoviesById(params);
// }
