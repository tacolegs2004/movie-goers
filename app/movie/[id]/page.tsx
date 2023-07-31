import NotFound from "@/components/NotFound";
import { TTMovie } from "@/types/MovieTypes";
import React from "react";

export default async function Page(params: { id: string; movie: TTMovie[] }) {
  const selectedMovie = params?.movie?.find(
    (movie) => movie?.id?.toString() === params.id
  );

  if (!selectedMovie) {
    return <NotFound />;
  }

  console.log(selectedMovie);
  return (
    <>
      <h1>{selectedMovie.title}</h1>
    </>
  );
}

// export async function generateStaticParams(params: {
//   id: string;
//   movie: MovieType;
// }) {
//   const movies = await getMoviesById(params);
// }
