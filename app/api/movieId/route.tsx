import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    console.log("Fetching failed");
  } else {
    console.log("Fetching was successful!");
  }

  const movies = await res.json();

  // console.log(movies);
  return NextResponse.json(movies);
}
