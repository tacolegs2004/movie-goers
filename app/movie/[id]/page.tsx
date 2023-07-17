import NotFound from "@/components/NotFound";
import { IMovies, MovieType } from "@/types/MovieTypes";
import React from "react";

export default async function Page(params: { id: string; movie: IMovies[] }) {
  const selectedMovie = params?.movie?.find(
    (movie) => movie.movie.id.toString() === params.id
  );

  if (!selectedMovie) {
    return <NotFound />;
  }

  console.log(selectedMovie);
  return (
    <>
      <h1 className="">{selectedMovie.movie.title}</h1>
    </>
  );
}

export async function generateStaticParams(params: {
  id: string;
  movie: MovieType;
}) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies data");
    }

    const movies: MovieType[] = await res.json();

    console.log(movies);

    if (!Array.isArray(movies)) {
      throw new Error("Invalid response data: Expected an array of movies");
    }

    return movies.map((movie) => ({
      params: { id: movie.id.toString() },
    }));
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
}
